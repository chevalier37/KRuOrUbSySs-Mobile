import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import { Button, Checkbox, Form, Select, Dropdown, Menu, Label, Container } from 'semantic-ui-react'
import { Meteor } from 'meteor/meteor';
import BodyClassName from 'react-body-classname';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";

//Icons
import Book from 'react-icons/lib/fa/book';
import ThumbsUp from 'react-icons/lib/fa/thumbs-up';
import Warning from 'react-icons/lib/fa/exclamation-triangle';
import Envelope from 'react-icons/lib/fa/envelope';
import Phone from 'react-icons/lib/fa/phone';
import Trash from 'react-icons/lib/fa/trash';
import SignOut from 'react-icons/lib/fa/sign-out';
import Bell from 'react-icons/lib/fa/bell';
import Edit from 'react-icons/lib/fa/edit';
import Search from 'react-icons/lib/fa/search';


import ChatItemNotif from './ChatItemNotif.js';
import ReponsesNotif from './ReponsesNotif.js';
import RecommandationsNotif from './RecommandationsNotif.js';
import DonsNotif from './DonsNotif.js';

//Collections
import { Chat } from '../../api/Chat.js';
import { Comments } from '../../api/Reponses.js';
import { Recommandations } from '../../api/Recommandations.js';
import { Dons } from '../../api/Stripe.js';

class ButtonPusher extends Component {
  
  constructor(props) {
    super(props);
 
    this.state = {
      body: '',
      logout:false,
      username:'d',
      chat:''
    };
  }

  body() {
    this.setState({
      body: 'StopScrollBody',
    });
  }

   Outbody() {
    this.setState({
      body: '',
    });
  }

  logout(){
  	 this.setState({
      logout: true,
    });
  	Meteor.logout()
  }

  componentWillMount(){
  	{this.props.chat == 'true' ?
  	this.setState({chat:'chat'}) : ''}
  }


  	render() {
  		let ChatCount = this.props.ChatCount;
  		let reponsesCount = this.props.reponsesCount;
  		let recommandationsCount = this.props.recommandationsCount;
  		let DonsCount = this.props.DonsCount;
      
      {
       	this.props.chat == "true" ?  ChatCount = 0 : ChatCount
      }     

		let Name = this.props.name;

		return (
			<div>
           <div className="nameMobile">
            {Name}
            </div>
    			
  			    <div className={this.state.chat + " "+ "pusher"}>
              <div className="buttonSearch">
                <Search />
              </div>         
      		  </div>
          
      </div>
		);
  	}
}

export default withTracker(() => {
  const MyId = Meteor.userId();
  let id = Meteor.user();
  let search = Meteor.users.findOne(id);
  {id ? name = search.username : name =''}
  

  return {
  	name:name,
    
  };
})(ButtonPusher);