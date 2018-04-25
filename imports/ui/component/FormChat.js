import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Segment, Button, Checkbox, Form, Header, TextArea, Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';

//Icons
import Send from 'react-icons/lib/fa/paper-plane-o';

class FormChat extends Component {

	constructor(props) {
	    super(props);
	 
	    this.state = {
	      
	      placeholderMessage:'Message',
	      
	    };
	}

	focusMessage() {
	     this.setState({
	      placeholderMessage: '',
	    });
	}

	focusMessageOut() {
	     this.setState({
	      placeholderMessage:'Message',
	    });
	}

	Submit() {
	  	
	  	const message = ReactDOM.findDOMNode(this.refs.message).value.trim();
	  	const to_id = this.props.to_id;
	  	const user = Meteor.user();
	  	const from_name = user.username;
	  	const mail = this.props.mail;
		  	Meteor.call('addMessageChat',
		  	  message,
		  	  to_id,
		  	  (err) => {
            	if(err){
              
           		 } else {
              	{
	               
			        ReactDOM.findDOMNode(this.refs.message).value = '';
	              	}     
            	}
          	})
          	{
          		!this.props.isOnline ?

		          Meteor.call(
		          'NouveauMessage',
		          mail,
		          'Kurbys <kurbys@mail.kurbys.com>',
		          'Nouveau message de ',
		          from_name,
		          message,
		          )
		          : ''
          	}

          	{
          		!this.props.isOnline ?

		          Meteor.call(
		          'ChatNotif',
		           message,
		  	  	   to_id,
		          )
		          : ''
          	}

	}

  render() {
 		
  		const { placeholderMessage } = this.state
		
		return (
			<div className="valideChatForm">
			    <Form onSubmit={this.Submit.bind(this)}>
			      <Button fluid color="green"  >
				    	Envoyer 
				    </Button>
			    						    
				   
				     <div className="valideChatArea">
				      <TextArea
				       ref="message"
				       onFocus={this.focusMessage.bind(this)}
				       onBlur={this.focusMessageOut.bind(this)}
				       placeholder={placeholderMessage}
				       rows={8}
				       />
					</div>
		  		</Form>
			</div>
		);
  	}
}


export default FormChat =  withTracker(({ to_id }) => {
  const Handle = Meteor.subscribe('user', to_id);
  const loading = !Handle.ready();
  const user = Meteor.users.findOne({'_id':to_id});
  const reponseExists = !loading && !!user;

  return {
  isOnline:reponseExists ? user.status.online : '',
  mail:reponseExists ? user.profile.mail : '',
  };
})(FormChat);
