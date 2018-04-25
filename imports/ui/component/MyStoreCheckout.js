import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Segment, Button, Checkbox, Form, Header, Divider, Label, Comment, Rating } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import Vote from 'react-icons/lib/fa/thumbs-up'; 

import InjectedCheckoutForm from './CheckoutForm';
import {Elements} from 'react-stripe-elements';

class MyStoreCheckout extends Component {
	
	constructor(props) {
		    super(props);
		}

  render() {
   
		return (
			<div className="ListeMessages">
		  			<Elements>
				        <InjectedCheckoutForm
				         username={this.props.username}
				         id={this.props.id}
				         gender={this.props.gender}
				         isOnline={this.props.isOnline}
                         mail={this.props.mail}
				         />
				    </Elements>
			</div>
		);
  	}
}

export default MyStoreCheckout =  withTracker(() => {
  return {
  };
})(MyStoreCheckout);
