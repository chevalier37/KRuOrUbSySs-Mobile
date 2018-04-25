import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import {  Input, Label, Menu, Grid, Header, Image, Rail, Segment, Sticky, Icon  } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import ContactChatContent from '../component/ContactChatContent.js';

//Icons
import FaUser from 'react-icons/lib/fa/user';
import FaComments from 'react-icons/lib/fa/comments';
import FaStar from 'react-icons/lib/fa/star';
import FaEnvelope from 'react-icons/lib/fa/envelope-o';
import FaEur from 'react-icons/lib/fa/eur';

import { ContactChat } from '../../api/ContactChat.js';

class contactChat extends Component {

	componentWillMount(){
		const to_id = this.props.to_id;
		const myId = Meteor.userId();
		Meteor.call('addContactChat',
		  	  to_id,
		  	  (err) => {
            	if(err){
              
           		 } else {
              	{
	               
			        
	              	}     
            	}
          	})
	}

	renderAllContactChat() {
          let AllChat = this.props.allContactChat;

          return AllChat.map((message) => {
           let date = Date.parse(message.post_date);
             
            return (
              <ContactChatContent
                key={message._id}
                contact={message}
                date={date}
                to_id={this.props.to_id}
                      
              />
            );
          });
  }
  
  

  render() {
		
		return (
			
		      	<div className="ChatContactLeft">
  					 <Menu vertical>
      					<div
      					 className="HeaderLastConseiller"
      					 >
      					 Mes contacts
      					 </div>
                 <div className="espaceContact">
                 </div>
  				        {this.renderAllContactChat()}
  			      </Menu>
				    </div>
		);
  }
}

export default contactChat =  withTracker(() => {
  const from_id = Meteor.userId();
  const Handle = Meteor.subscribe('ContactChat', from_id);
  const loading = !Handle.ready();
  const allreponses = ContactChat.find({$or : [{from_id: from_id}, {to_id:from_id}]}, { sort: { date: -1 } });
  const reponseExists = !loading && !!allreponses;

  return {
    allContactChat: reponseExists ? allreponses.fetch() : [],

  };
})(contactChat);
