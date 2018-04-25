import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Segment, Button, Checkbox, Form, Header, Divider, Label, Comment, Rating } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import Vote from 'react-icons/lib/fa/thumbs-up'; 

class ListeReponses extends Component {
	
	constructor(props) {
		    super(props);
		 
		    this.state = {
		      	sexe: '',
			    disabled:false,
			    disabledVote:false,
		    };
		}

	componentWillMount(){
		const sexe = this.props.message.gender;
	    
	    {sexe == 'fille' ? 
	         this.setState({sexe: 'pink'}):
		  	 this.setState({sexe: 'blue'})
		}

		//on calcul la date du post
		const today = new Date();
		const diffToday = Date.parse(today);
		const post_date = this.props.date;
		const nbrSeconde = ((diffToday-post_date)/1000) + 2;
		this.setState({nbrSeconde: nbrSeconde})

		const nbrMinutes = Math.round(nbrSeconde/60);
		this.setState({nbrMinutes: nbrMinutes})
		
		const nbrHeures = Math.round(nbrMinutes/60);
		this.setState({nbrHeures: nbrHeures})

		const nbrJours = Math.round(nbrHeures/24);
		this.setState({nbrJours: nbrJours})

		const nbrMois = Math.round(nbrJours/30);
		this.setState({nbrMois: nbrMois})
	}

	breaklines(){
			  let message = this.props.message.text
			  return message
			}

	Supprimer(){
		Meteor.call('supprimerFavoris',
	    this.props.message._id,
	     );
	}

  	render() {
    
		const colorSexe = this.state.sexe;
  
		return (
			<div className="ListeMessages">
	  			<div className={this.props.message.gender=="fille" ?
	        				  "filleMessageBackground" : "garconMessageBackground"
	        				}>
			  			<div className={this.props.message.gender=="fille" ?
	        				  	"titreMessageFille" : "titreMessageGarcon"}>
				  			<Link to={'/profil/' + this.props.message.authorId}>
				  			{this.props.message.authorName} 
				  			</Link>
			  			</div>
		  		</div>

	  			<Segment color={this.props.message.gender=="fille" ?
	        				  "pink" : "blue" }>
		  					  			
		  			<p className={"ContentQuestion" + " " + "display-linebreak"}>
		  				{this.breaklines()}
		  			</p>
		  			
		  			<Divider />
		  	
		  			<Comment>
	      				<Comment.Content>
	         				<div className="dateMessage">
		         			{	this.state.nbrSeconde<60 ? "Il y a " + this.state.nbrSeconde +" secondes": 
		         				this.state.nbrMinutes<2 ? "Il y a " + this.state.nbrMinutes +" minute": 
		         				this.state.nbrMinutes<60 ? "Il y a " + this.state.nbrMinutes +" minutes":
		         				this.state.nbrHeures<2 ? "Il y a " + this.state.nbrHeures  +" heure": 
								this.state.nbrHeures<24 ? "Il y a " + this.state.nbrHeures  +" heures": 
								this.state.nbrJours<2 ? "Il y a " + this.state.nbrJours  +" jour":
								this.state.nbrJours<30 ? "Il y a " + this.state.nbrJours  +" jours":  
								"Il y a " + this.state.nbrMois +" mois" 
	         				}
	         				
	         				</div>
	         				<div className="supprimerFavoris">
	         				<Button
	         					size="mini"
								color='red'
								onClick={this.Supprimer.bind(this)}
							 >
								Supprimer 	 
							</Button>
							</div>
	      				</Comment.Content>
	    			</Comment>
	  			</Segment>
			</div>
		);
  	}
}

export default ListeReponses =  withTracker(({ id }) => {
  return {
  };
})(ListeReponses);