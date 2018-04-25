import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Header, Menu, Divider} from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';

import FaCircle from 'react-icons/lib/fa/circle';
import FaClose from 'react-icons/lib/fa/close';

class ContactChatContent extends Component {

	constructor(props) {
	    super(props);
	 
	    this.state = {
	      
	      message:'',
	      toName:'',
	      toId:'',
	      currentContact:'',
	      
	    };
	}

  handleContextRef = contextRef => this.setState({ contextRef })

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
	
		componentWillMount(){
			const user = Meteor.user();
			const username = user.username;	 
			{this.props.contact.to_name == username ?
			 this.setState({toName: this.props.contact.from_name}) :
			 this.setState({toName: this.props.contact.to_name})
			}

			{this.props.contact.to_id == Meteor.userId() ?
			 this.setState({toId: this.props.contact.from_id}) :
			 this.setState({toId: this.props.contact.to_id})
			}
	   
		}

		breaklines(){
		  let message = this.props.contact.last_message
		  let shortMessage = message.substring(0, 100);
		  return shortMessage
		}

		delete(){
			const id = this.props.contact._id;
		  	Meteor.call('deleteContact',
		  	  id,
		  	  (err) => {
            	if(err){
           		 } else {
              	{
	              	}     
            	}
          	})
		}

  render() {
    
    const { contextRef } = this.state

	    return (
				<div className={"AffficheContact" + " "+this.state.message}  >
					
					<Link to={'/Chat/' + this.state.toId}>	
					<div className={this.props.currentContact + " " + this.props.read} >
						<Menu.Item
				         onClick={this.handleItemClick}
				         as='div'
				         >
				          <Menu.Header>
					          <div className="deleteContact" onClick={this.delete.bind(this)} >
						<FaClose />
					</div>
					          <div className={this.props.currentContact + " " + this.props.read}>
					          {this.state.toName}
						          <div className={this.props.isOnline == true ? "onlineChat" : "none"} >
						         	<FaCircle />
						          </div>
					          </div>
				          </Menu.Header>
					          <div className={this.props.currentContact + " " + this.props.read + " " +"display-linebreak"}>
					          	{this.breaklines()}
					          </div>
				        </Menu.Item>
				       
				       </div>
				    </Link>
	    		</div>
	    )
	}
	
}

export default ContactChatContent =  withTracker(({to_id, contact}) => {
read ='';
let currentContact='';
let id='';
{to_id == Meteor.userId() ? '' :
to_id == contact.from_id ?
currentContact = 'current' :
to_id == contact.to_id ?
currentContact = 'current' :
currentContact =  'notCurrent'
}

{contact.from_id == Meteor.userId() ? id = contact.to_id  :
id = contact.from_id 
}

authorLastMessage = contact.authorLastMessage;

{contact.read == false && currentContact != 'current' && authorLastMessage !=Meteor.userId() ?
read = 'notRead' : ''
}

  const Handle = Meteor.subscribe('user', id);
  const loading = !Handle.ready();
  const user = Meteor.users.findOne({'_id':id});
  const reponseExists = !loading && !!user;
  return {
  	currentContact:currentContact,
    read:read,
    isOnline:reponseExists ? user.status.online : '',

  };
})(ContactChatContent);
