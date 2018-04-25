import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Segment, Button, Checkbox, Form, Header, Divider, Label, Comment, Rating } from 'semantic-ui-react'
import { Link, Redirect } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import Vote from 'react-icons/lib/fa/thumbs-up'; 

import FaEur from 'react-icons/lib/fa/eur';

class DonsNotif extends Component {
	
	constructor(props) {
		    super(props);
		 
		    this.state = {
		      	sexe: '',
			    disabled:false,
			    disabledVote:false,
			    Chatredirect:false,
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

	reponse(event){
		event.preventDefault();
		const message_id = this.props.message._id
		Meteor.call('DonsNotif',
		  	  message_id,
		  	  (err) => {
            	if(err){
              
           		 } else {
              	{	
              		this.setState({Chatredirect: true})	        
	             }     
            	}
        })
	}

	breaklines(){
			  let text = this.props.message.message
			  let message = text.substring(0, 150);
			  return message + "..."
			}

  	render() {
    
	const colorSexe = this.state.sexe;

	 const Chatredirect = this.state.Chatredirect;
     if (Chatredirect==true){
      return <Redirect to={'/ListeDons/' + Meteor.userId()} />;
      } 

   
		return (
			<div className={this.props.message.read==false ? "NotifUnread" : "ListeChat"}>
			  		<div onClick={this.reponse.bind(this)}>	
			  			<div className="NotifChatContent">
				  			
				  			
					  			<div className={this.props.message.from_gender == "fille" ? "FilleNotif" : "GarconNotif"}>
					  			<FaEur />	Nouveau don de 
					  			 </div>
					  			<div className={this.props.message.from_gender == "fille" ? "FilleNotif" : "GarconNotif"}>
					  				 {this.props.message.from_name} 
					  			</div>
				  			
			  			</div>
		  			
		  			<div className="ItemChatNotif">
		  				{this.breaklines()}
		  			</div>

     				<div className={this.props.message.from_gender == "fille" ? "FilledateNotifChat" : "GarcondateNotifChat"}>
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
					<div className={this.props.message.from_gender == "fille" ? "FilledateNotifReponse" : "GarcondateNotifReponse"}>

					</div>
     			</div>
			<Divider />
			</div>

		);
  	}
}

export default DonsNotif =  withTracker(({ id }) => {
  return {
  };
})(DonsNotif);