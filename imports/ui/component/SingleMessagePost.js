import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Segment, Button, Checkbox, Form, Header, Divider, Label, Comment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import { Posts } from '../../api/Messages.js';
import { Comments } from '../../api/Reponses.js';

class ListeMessagePost extends Component {
	
	constructor(props) {
		    super(props);
		 
		    this.state = {
		      	sexe: '',
				nbrSeconde : 0,
			 	nbrMinutes : 0,
				nbrHeures : 0,
				nbrJours : 0,
				nbrMois : 0,

			    disabled:false,
		    };
		}

	signaler() {
	    Meteor.call('signaler', this.props.message._id);
       	this.setState({disabled: true});
	 }

	componentWillMount(){
		{
		Meteor.userId() && _.include(this.props.message.upvoters, Meteor.userId()) ?
       	this.setState({disabled: true}) :
       	this.setState({disabled: false})
   		}

		
	}

	sexe(){
		const sexe = this.props.message.gender;
	    if(sexe == 'fille'){
	    	return 'pink'
	    }else {
	    	return 'blue'
	    }
	    
	}

	reponse(){
		const reponse = this.props.nbrreponse;
	    if(reponse < 2){
	    	return 'réponse'
	    }else {
	    	return 'réponses'
	    }
	}


  render() {

	const colorSexe = this.state.sexe;

   
		return (
			<div className="ListeMessagesSingle">
	  			
    					<div className={this.sexe()=="pink" ?
    				  			"filleMessageBackground" : "garconMessageBackground"}>
		        				<div className={this.sexe()=="pink" ?
	        				  	"titreMessageFille" : "titreMessageGarcon"}>
					  				{this.props.message.post_title}
					  			</div>
    					</div>
	        	
	  			<Segment color={this.sexe()=="pink" ?
	        				  "pink" : "blue" }>
		  			<p className={"ContentQuestion" + " " + "display-linebreak"}>
		  				{this.props.message.post_content}
		  			</p>
		  			
		  			<Divider />
		  	
		  			<Comment>
	      				<Comment.Content>
	        				<div className="NameAuthorMessage"><span className={this.sexe()=="pink" ?
	        				  			"filleMessage" : "garconMessage"
	        					}>
	        				 <Link to={'/profil/' + this.props.message.post_author_id}>
	        				{this.props.message.post_author}
	        				</Link>
	        				</span>
	        				</div>
	         				<div className="dateMessage">{this.props.nbrreponse} {this.reponse()} </div>
	      				</Comment.Content>
	    			</Comment>

	  			</Segment>

			</div>

		);
  	}
}

export default ListeMessagePost =  withTracker(({ id }) => {
  const Handle = Meteor.subscribe('Message', id);
  const loading = !Handle.ready();
  const allposts = Posts.findOne({_id:id});
  const postExists = !loading && !!allposts;
  const HandleReponse = Meteor.subscribe('reponsesSingleMessage', id);

  return {
   message: postExists ? allposts : [],
   nbrreponse: Comments.find({postId:id}).count()

  };
})(ListeMessagePost);