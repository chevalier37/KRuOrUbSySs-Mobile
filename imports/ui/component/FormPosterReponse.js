import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Segment, Button, Checkbox, Form, Header, TextArea, Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';

import { Posts } from '../../api/Messages.js';

class FormPosterReponse extends Component {

	constructor(props) {
	    super(props);
	 
	    this.state = {
	      visible: false,
	      placeholderMessage:'Ajouter une réponse',
	      messageVide:false,
	    };
	}

	focusMessage() {
	     this.setState({
	      placeholderMessage: '',
	    });
	}

	focusMessageOut() {
	     this.setState({
	      placeholderMessage:'Ajouter une réponse',
	    });
	}

	Submit(event) {
        event.preventDefault();

	  	
	  	const message = ReactDOM.findDOMNode(this.refs.message).value.trim();
	  	const user = Meteor.user();
	  	const from_name = user.username;
	  	const mail = this.props.mail;
	  	const titre = this.props.titreMessage;

	    {message == '' ?
	  	 this.setState({messageVide: true}):
	  	 this.setState({messageVide: false})
	    }

	  	{ //on verifie qu'il n'y à pas d'erreur avant d'envoyer le formulaire
		    
			this.state.messageVide == false 
			?
		  	Meteor.call('addReponse',
		  	  message,
		  	  this.props.id,
		  	  (err) => {
            	if(err){
           		 } else {
              	{
			  	// Clear form
		        ReactDOM.findDOMNode(this.refs.message).value = '';
              	}     
            	}
          	})
	        : ''
	    }

          	{
          		!this.props.isOnline && this.state.messageVide == false  ?

		          Meteor.call(
		          'NouvelleReponse',
		          mail,
		          'Kurbys <kurbys@mail.kurbys.com>',
		          'Nouvelle réponse au message : ',
		          from_name,
		          message,
		          titre,
		          )  

		          : ''
          	}

          	//{
          		//!this.props.isOnline ?

		          Meteor.call(
		          'ReponseNotif',
		           message,
		  	  	   this.props.id,
		          )
		          //: ''
          	//}

	}

  render() {

  		const { visible } = this.state
  		const { placeholderMessage } = this.state
		
		return (
			<div className="AjouterReponse">
				<Segment>
				    <Form error onSubmit={this.Submit.bind(this)}>
				    	<Header
				    	 as='h2'>
				    	 Ajouter une réponse
				    	 </Header>
					    <Form.Field>
					      <TextArea
					       ref="message"
					       onFocus={this.focusMessage.bind(this)}
					       onBlur={this.focusMessageOut.bind(this)}
					       autoHeight
					       placeholder={placeholderMessage}
					       rows={6}
					       />
					       <Message
				            hidden={!this.state.messageVide}
				            error={this.state.messageVide}
				            content='Le message est vide'
				          />
					    </Form.Field>
					    <Button type='submit' color="green">Valider</Button>
			  		</Form>
	  			</Segment>

			</div>

		);
  	}
}

export default FormPosterReponse =  withTracker(({ authorId }) => {
  const Handle = Meteor.subscribe('user', authorId);
  const loading = !Handle.ready();
  const user = Meteor.users.findOne({'_id':authorId});
  const reponseExists = !loading && !!user;
  return {
  isOnline:reponseExists ? user.status.online : '',
  mail:reponseExists ? user.profile.mail : '',

   
  };
})(FormPosterReponse);
