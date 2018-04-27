import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Segment, Button, Form, Header, Divider, Table, Rating, Popup, Message } from 'semantic-ui-react'
import { Link, Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';

import { Dons } from '../../api/Stripe.js';
import { DemandeVirement } from '../../api/DemandeVirement.js';

class ListeDonsContent extends Component {

	constructor(props) {
    super(props);
    this.state = {
	    column: null,
	    data: this.props.allreponses,
	    data1: this.props.autresConseilleres,
	    direction: null,
	    titre:'',
	    pasDeResultat:'cacher',
	    IBANerror:false,
	    ValidationFom:false,
	    validButton:true
	  }
	}
	  
	  handleSort = clickedColumn => () => {
    	const { column, data, direction } = this.state
    	let Allconseilleres = this.props.allreponses;

	    if (column !== clickedColumn) {
	      this.setState({
	        column: clickedColumn,
	        data: _.sortBy(Allconseilleres, [clickedColumn]),
	        direction: 'ascending',
	      })

	      return
	    }

		  this.setState({
		      data: Allconseilleres.reverse(),
		      direction: direction === 'ascending' ? 'descending' : 'ascending',
		    })
	  }

	  renderDonsEffectues() {
      let AllDons = this.props.DonsEffectuesResult;

      return AllDons.map((dons) => {
       
        return (
          	<Table.Row key={dons._id}>
				<Table.Cell>
				<div className={dons.to_gender}>
					<Link to={'/Chat/' + dons.to_id}>
						{dons.to_name}
					</Link>
				</div>
				</Table.Cell>
	            <Table.Cell>{dons.montantTotal}€</Table.Cell>

              	<Table.Cell >{dons.message}</Table.Cell>
              
			</Table.Row>
        );
      });
  	}

  	renderDonsRecus() {
      let Alldons = this.props.DonsRecusResult;

      return Alldons.map((dons) => {
        return (
          	<Table.Row key={dons._id}>
				<Table.Cell>
				<div className={dons.from_gender}>
					<Link to={'/Chat/' + dons.from_id}>
						{dons.from_name}
					</Link>
				</div>
				</Table.Cell>
              	<Table.Cell>
              	{dons.montantPercu}€
              	</Table.Cell>
              	<Table.Cell>{dons.message}</Table.Cell>
			</Table.Row>
        );
      });
  	}

  	Submit(event) {
        event.preventDefault(); 	
	  	const IBANform = ReactDOM.findDOMNode(this.refs.IBAN).value.trim();
	  	const validIBAN = IBAN.isValid(IBANform);
	  	const montant = this.props.DonsrecuResultSum - this.props.DemandeVirement;
	  	 this.setState({IBANerror: false})

	    if(validIBAN == false ){
	  	 this.setState({IBANerror: true})}else{
		  	Meteor.call('addVirement',
		  	  IBANform,
		  	  montant,
		  	  (err) => {
            	if(err){
           		 } else {
              	{
			  	// Clear form
		        ReactDOM.findDOMNode(this.refs.IBAN).value = '';
		         this.setState({ValidationFom: true})
              	}     
            	}
          	})

	       
	    }

	}

  render() {
  	let montant = this.props.DonsrecuResultSum - this.props.DemandeVirement

    const { column, data, data1, direction } = this.state
    if (this.state.ValidationFom){
      		return <Redirect to={'/ConfirmationVirement/'}/>;
    		}

	    return (
	    	<div className="MainContent">
				<Segment className="MainContent">
					<Header>
					Dons effectués:
					<div className="TotalDonEffectué">
					  Total : {this.props.DonsEffectueResultSum}€
					</div>
					</Header>
					<Divider />

					<div className={this.props.pasDeResultatTableau}>
					     <Table sortable celled fixed selectable color="teal" >
					        <Table.Body>
					             {this.renderDonsEffectues()}
					        </Table.Body>
					    </Table>
				    </div>

	    			<Header>
					Dons reçus :
					<div className="TotalDonEffectué">
					  Total disponible: {this.props.DonsrecuResultSum - this.props.DemandeVirement}€
					</div>
					</Header>
					<Divider />										
				     <Table sortable celled fixed selectable color="red" >
				        <Table.Body>
				             {this.renderDonsRecus()}
				        </Table.Body>
				    </Table>

				    <Header>
					Demander un paiement
					</Header>
					<Divider />	

					<div className="demanderPaiement">

						Montant disponible : <b> {this.props.DonsrecuResultSum - this.props.DemandeVirement}€ </b><br />
						Vous devez avoir un montant disponible de 50€ minimum pour demander un paiement.
						<br /><br />
						Renseignez un IBAN pour effectuer un virement :
						<Form
						 className="formPaiement"
						 error
						 onSubmit={this.Submit.bind(this)}
						 >				    
						    <Form.Field>
						   		 <label>IBAN</label>
	     						 <input
	     						  ref="IBAN"
	     						  placeholder='IBAN' />
						       <Message
					            hidden={!this.state.IBANerror}
					            error={this.state.IBANerror}
					            content='IBAN non valide'
					          />
						    </Form.Field>

						    <Button
						     disabled={montant>=50 ? false : true}
						     type='submit'
						     color="green"
						     >
						     Valider
						    </Button>
				  		
				  		</Form>
				  	</div>
	    		</Segment>
			</div>
	    )
	  }
	
}

export default ResultatsConseillerContent = withTracker(() => {
	const myId = Meteor.userId();
  	const Handle = Meteor.subscribe('MyDons', myId);
  	const loading = !Handle.ready();
  	const Handle1 = Meteor.subscribe('AllVirement');
  	const loading1 = !Handle1.ready();
  	let DemandeVirementSum = 0;
    let search = DemandeVirement.findOne({'from_id':Meteor.userId()});
    if(!search){let DemandeVirementSum = 0}else{
	    DemandeVirement.find({'from_id':myId}).map(function(doc) {
		DemandeVirementSum += doc.montant;
	});
    }

  	let DonsEffectues = Dons.find({'from_id':myId}, {sort: {date: -1 }});
  
	let DonsEffectueResultSum = 0;
	Dons.find({'from_id':myId}).map(function(doc) {
	  DonsEffectueResultSum += doc.montantTotal;
	});

	let DonsRecusResultSum = 0;
	Dons.find({'to_id':myId}).map(function(doc) {
	  DonsRecusResultSum += doc.montantPercu;
	});

  	let DonsRecus = Dons.find({'to_id':myId},{sort: {date: -1 }});

 	const reponseExists = !loading && !!DonsEffectues;
 	const reponseExists1 = !loading && !!DonsRecus;

  return {
    DonsEffectuesResult: reponseExists ? DonsEffectues.fetch() : [],
    DonsRecusResult: reponseExists1 ? DonsRecus.fetch() : [],
    DonsEffectueResultSum: DonsEffectueResultSum,
    DonsrecuResultSum: DonsRecusResultSum,
    DemandeVirement:DemandeVirementSum,   
  };
})(ListeDonsContent);