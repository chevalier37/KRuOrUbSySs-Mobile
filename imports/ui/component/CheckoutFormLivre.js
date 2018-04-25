import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Segment, Button, Checkbox, Form, Header, Divider, TextArea, Message,  Dimmer, Loader } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import Vote from 'react-icons/lib/fa/thumbs-up'; 
import ReactDOM from 'react-dom';
import { Route, Redirect } from 'react-router';
import {injectStripe} from 'react-stripe-elements';
import CardSection from './CardSection';


class CheckoutFormLivre extends React.Component {
	
	constructor(props) {
 			super(props);
 			this.handleSubmit = this.handleSubmit.bind(this)
 			this.state = {
		        nom: false,
		        prenom:false,
		        adresse: false,
		        ville:false,
		        code:false,
		        errorToken:false,
		        loader:false,
	        }
		}

	handleSubmit = (ev) => {
    ev.preventDefault();
    this.setState({nom: false})
    this.setState({prenom: false})
    this.setState({adresse: false})
    this.setState({ville: false})
    this.setState({code: false})
    this.setState({errorToken: false})
    this.setState({loader: true})
    

    const nom = ReactDOM.findDOMNode(this.refs.nom).value.trim();
    const prenom = ReactDOM.findDOMNode(this.refs.prenom).value.trim(); 
    const adresse = ReactDOM.findDOMNode(this.refs.adresse).value.trim();  
    const code = ReactDOM.findDOMNode(this.refs.code).value.trim(); 
    const ville = ReactDOM.findDOMNode(this.refs.ville).value.trim(); 
  

    if(!nom){
    	this.setState({nom: true});
    	this.setState({loader: false})
    }
    else if(!prenom){
    	this.setState({prenom: true});
    	this.setState({loader: false})
	}
	else if(!ville){
    	this.setState({ville: true});
    	this.setState({loader: false})
	}
	 else if(!code){
    	this.setState({code: true});
    	this.setState({loader: false})
	}
	 else if(!adresse){
    	this.setState({adresse: true});
    	this.setState({loader: false})
	}
    else{
    	this.props.stripe.createToken({type: 'card'}).then(({token}) => {
    	     if(!token){this.setState({errorToken: true});
  	 		this.setState({loader: false})}else{
  	     	
  	      Meteor.call('Commande',
  			  	token,
  			    nom,
  			    prenom,
  			    ville,
  			    adresse,
  			    code,
  			  	  (err) => {
  	            	if(err){
  	           		 } else {
  	              	{              		
  				        this.setState({
  					      ValidationFom: true
  					    })
  					  
  		              	}     
  	            	}
  	       })
  	  	}
	    });
	 }  
  }

  render() {

  		if (this.state.ValidationFom){
      		return <Redirect to={'/ValidationCommande/'}/>;
    		}
		return (
			<div className="ListeMessages">  			
			  		<Form error onSubmit={this.handleSubmit}>
                        <Form.Field>
                        <div className="textDons">
                        Completez ce formulaire pour commander le livre. Vous le recevrez dans un délai de 3 jours maximum.
                         </div>
                    	</Form.Field>

                        <Form.Field>
                           <div className="labelLivre">Nom</div>
                          <input
                           ref="nom"
                           placeholder="Nom"
                           />
                           <Message
                              hidden={!this.state.nom}
                              error={this.state.nom}
                              content='Le nom est obligatoire'
                            />
                        </Form.Field>

                        <Form.Field>
                          <div className="labelLivre">Prénom</div>
                          <input
                           ref="prenom"
                           placeholder="Prénom"
                           />
                           <Message
                              hidden={!this.state.prenom}
                              error={this.state.prenom}
                              content='Le prénom est obligatoire'
                            />
                        </Form.Field>

                        <Form.Field>
                           <div className="labelLivre">Adresse de Livraison</div>
                          <input
                           ref="adresse"
                           placeholder="Adresse"
                           />
                           <Message
                              hidden={!this.state.adresse}
                              error={this.state.adresse}
                              content="L'adresse  de livraison est obligatoire"
                            />
                        </Form.Field>

                        <Form.Field>
                           <div className="labelLivre">Code postal</div>
                          <input
                           ref="code"
                           placeholder="Code postal"
                           />
                           <Message
                              hidden={!this.state.code}
                              error={this.state.code}
                              content='Le code postal est obligatoire'
                            />
                        </Form.Field>

                        <Form.Field>
                           <div className="labelLivre">Ville</div>
                          <input
                           ref="ville"
                           placeholder="Ville"
                           />
                           <Message
                              hidden={!this.state.ville}
                              error={this.state.ville}
                              content='La ville est obligatoire'
                            />
                        </Form.Field>

			       	         <CardSection />
			       	         <Message
                            hidden={!this.state.errorToken}
                            error={this.state.errorToken}
                            header='Erreur carte bancaire'
                        />

			                  <Button color="green">
                        Commander
                         </Button>
			      </Form>

			      <Dimmer
		      	  active={this.state.loader}
		      	  inverted
			      >
  				    <Loader
  		        	active={this.state.loader}
  		         	inverted>
  		         	Validation
  				    </Loader>
			      </Dimmer>		      	
			</div>
		);
  	}
}

export default injectStripe(CheckoutFormLivre);