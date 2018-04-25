import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Segment, Button, Checkbox, Form, Header, Divider, Label, Comment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import Vote from 'react-icons/lib/fa/thumbs-up'; 

import { Favoris } from '../../api/Favoris.js';

class ListeReponses extends Component {
	
	constructor(props) {
		    super(props);
		 
		    this.state = {
		      	sexe: '',
			    disabled:false,
			    disabledVote:false,
			    disabledFavoris:false,
		    };
		}

	signalerReponse() {
	    Meteor.call('signalerReponse', this.props.message._id);
       	this.setState({disabled: true});
	 }

	 addFavoris() {
	    Meteor.call('addFavoris',
	    this.props.message._id,
	    this.props.message.comments,
	    this.props.message.post_author,
	    this.props.message.post_author_id,
	    this.props.message.gender );
       	this.setState({disabledFavoris: true});
	 }

	 vote() {
	    Meteor.call('vote', this.props.message._id);
       	this.setState({disabledVote: true});
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


		{
		Meteor.userId() && _.include(this.props.message.upvoters, Meteor.userId()) ?
       	this.setState({disabledVote: true}) :
       	this.setState({disabledVote: false})
   		}

   		{
		Meteor.userId() && _.include(this.props.message.signalerTab, Meteor.userId()) ?
       	this.setState({disabled: true}) :
       	this.setState({disabled: false})
   		}

   		{
   			this.props.isFavoris==true ?
   			this.setState({disabledFavoris: true}) :
       		this.setState({disabledFavoris: false})

   		}

	}

  render() {
    
	const colorSexe = this.state.sexe;
   	let now = new Date();
	let diff = now - this.props.message.naissance;
	let age = Math.round(diff / 31536000000);

		return (
			<div className="ListeMessages">
	  			<div className={colorSexe=="pink" ?
	        				  "filleMessageBackground" : "garconMessageBackground"
	        				}>
			  			<div className={colorSexe=="pink" ?
	        				  "titreMessageFille" : "titreMessageGarcon"
	        				}>
				  			<Link to={'/profil/' + this.props.message.userId}>
				  			{this.props.message.post_author}
				  			</Link>
			  			</div>
			  			<div className="ageAuthorReponse">
	        				{age} ans
	        			</div>
		  		</div>


	  				<Segment color={colorSexe=="pink" ?
	        				  "pink" : "blue" }>
		  			
		  			<p className={"ContentQuestion" + " " + "display-linebreak"}>
		  				{this.props.message.comments}
		  			</p>
		  			
		  			<Divider />
		  	
		  			<Comment>
	      				<Comment.Content>
	        				
	         				
	         				<div className="dateMessage">
		         			{	this.state.nbrSeconde<60 ? "Il y a 30 secondes": 
		         				this.state.nbrMinutes<2 ? "Il y a " + this.state.nbrMinutes +" minute": 
		         				this.state.nbrMinutes<60 ? "Il y a " + this.state.nbrMinutes +" minutes":
		         				this.state.nbrHeures<2 ? "Il y a " + this.state.nbrHeures  +" heure": 
								this.state.nbrHeures<24 ? "Il y a " + this.state.nbrHeures  +" heures": 
								this.state.nbrJours<2 ? "Il y a " + this.state.nbrJours  +" jour":
								this.state.nbrJours<30 ? "Il y a " + this.state.nbrJours  +" jours":  
								"Il y a " + this.state.nbrMois +" mois" 
	         				}
	         				
	         				</div>
	         				
						
							<div className="repondreMessage" >

								<span className="vote">
									{this.props.message.votes}
								</span>

								<span className="vote">
								<Button
								 basic
								 size="tiny"
								 disabled={this.state.disabledVote}
								 color='green'
								 onClick={this.vote.bind(this)}
								 >
									<Vote />
							    </Button>
								</span>

								<Button
								 basic size="tiny"
								 disabled={this.state.disabled}
								 color='red'
								 onClick={this.signalerReponse.bind(this)}>
									Signaler
								</Button>

								<Button
								 basic size="tiny"
								 disabled={
								 	this.props.isFavoris==true ||
								    this.state.disabledFavoris==true ?
								    true : false}
								 color='blue'
								 onClick={this.addFavoris.bind(this)}>
									Ajouter au favoris
								</Button>
							</div>
	      				</Comment.Content>
	    			</Comment>
	  			</Segment>
			</div>
		);
  	}
}

export default ListeReponses =  withTracker(({ message }) => {
	let id = message._id;
	let myId = Meteor.userId();
	const Handle = Meteor.subscribe('isFavoris', id, myId );
	const loading = !Handle.ready();
 	let FavorisSearch = Favoris.findOne({'idMessage':id, 'from_id':myId});
 	const reponseExists = !loading && !!FavorisSearch;
  return {
  	isFavoris:reponseExists ? true : false,
  };
})(ListeReponses);