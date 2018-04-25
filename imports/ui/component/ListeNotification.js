import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Segment, Button, Checkbox, Form, Header, Divider, Label, Comment, Rating } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import Vote from 'react-icons/lib/fa/thumbs-up'; 

import FaComments from 'react-icons/lib/fa/comments';
import FaEur from 'react-icons/lib/fa/eur';
import FathumbsUp from 'react-icons/lib/fa/thumbs-up';
import FaEnvelope from 'react-icons/lib/fa/envelope';

class ListeNotifications extends Component {
	
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
			  let message = this.props.message.message
			  return message
			}

	Supprimer(){
		Meteor.call('supprimerNotification',
	    this.props.message._id,
	     );
	}

  render() {
    
	const colorSexe = this.state.sexe;
	const myId = Meteor.userId();
   
		return (
			<div className="ListeMessages">
	  			<div className={this.props.message.gender=="fille" ?
	        				    "filleMessageBackground" : "garconMessageBackground"
	        				}>

			  			<span className={this.props.message.type=='chat' ?
	        				  "visibleTitre" : "none"
	        				}>
				  			<Link to={'/profil/' + this.props.message.from_id}>
				  			Nouveau message de {this.props.message.from_name} 
				  			</Link>
				  			<div className="iconNotif">
				  				<FaComments />
				  			</div>
			  			</span>

			  			<span className={this.props.message.type=='reponse' ?
	        				  "visibleTitre" : "none"
	        				}>
				  			<Link to={'/singleMessage/' + this.props.message.postId}>
				  			Nouvelle réponse au message : {this.props.message.post_title} 
				  			</Link>
				  			<div className="iconNotif">
				  				<FaEnvelope />
				  			</div>
			  			</span>

			  			<span className={this.props.message.type=='recommandaton' ?
	        				  "visibleTitre" : "none"
	        				}>
				  			<Link to={'/profil/' + this.props.message.from_id}>
				  			Nouvelle recommandation de {this.props.message.from_name} 
				  			</Link>
				  			<div className="iconNotif">
				  				<FathumbsUp />
				  			</div>
			  			</span>

			  			<span className={this.props.message.type=='don' ?
	        				  "visibleTitre" : "none"
	        				}>
				  			<Link to={'/profil/' + this.props.message.from_id}>
				  			Nouveau don de {this.props.message.from_name} 
				  			</Link>
				  			<div className='montantDonNotif'>
				  				{this.props.message.montant}€
				  			</div> 
				  			
			  			</span>
		  		</div>
	  			
	  			<Segment color={this.props.message.gender=="fille" ?
	        				  "pink" : "blue" }>			
		  			<p className="ContentQuestion">
		  				{this.breaklines()}
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

	         				<div className={this.props.message.type=='recommandaton' ? "visibleNote" : "none"}>
							  	<div className={this.props.message.note>=1 && this.props.message.note<2 ? "visiblenote" : "none"}>
									<Rating icon='heart'
				              			defaultRating={1}
				              			maxRating={4}
				              			disabled
		              	 			/>
		              	 		</div>
		              	 		<div className={this.props.message.note>=2 && this.props.message.note<3 ? "visiblenote" : "none"}>
									<Rating icon='heart'
				              			defaultRating={2}
				              			maxRating={4}
				              			disabled
		              	 			/>
		              	 		</div>
		              	 		<div className={this.props.message.note>=3 && this.props.message.note<4 ? "visiblenote" : "none"}>
									<Rating icon='heart'
				              			defaultRating={3}
				              			maxRating={4}
				              			disabled
		              	 			/>
		              	 		</div>
		              	 		<div className={this.props.message.note>=4 && this.props.message.note<5 ? "visiblenote" : "none"}>
									<Rating icon='heart'
				              			defaultRating={4}
				              			maxRating={4}
				              			disabled
		              	 			/>
		              	 		</div>
							</div>

	         				<div className="supprimerFavoris">
		         				<Button
		         					size="mini"
									color='red'
									onClick={this.Supprimer.bind(this)}
								 >
									Supprimer 	 
								</Button>

								<div className={this.props.message.type=='chat' ? "visiblebutton" : "none"}>
									<Link to={'/Chat/' + this.props.message.from_id}>
										<Button
				         					size="mini"
											color='green'
										 >
											Voir 	 
										</Button>
									</Link>
								</div>

								<div className={this.props.message.type=='reponse' ? "visiblebutton" : "none"}>
									<Link to={'/singleMessage/' + this.props.message.postId}>
										<Button
				         					size="mini"
											color='green'
										 >
											Voir 	 
										</Button>
									</Link>
								</div>

								<div className={this.props.message.type=='recommandaton' ? "visiblebutton" : "none"}>
									<Link to={'/Recommandations/' + myId}>
										<Button
				         					size="mini"
											color='green'
										 >
											Voir 	 
										</Button>
									</Link>
								</div>

								<div className={this.props.message.type=='don' ? "visiblebutton" : "none"}>
									<Link to={'/ListeDons/' + myId}>
										<Button
				         					size="mini"
											color='green'
										 >
											Voir 	 
										</Button>
									</Link>
								</div>
							</div>
	      				</Comment.Content>
	    			</Comment>
	  			</Segment>
			</div>
		);
  	}
}

export default ListeNotifications =  withTracker(({ id }) => {
  return {
  };
})(ListeNotifications);