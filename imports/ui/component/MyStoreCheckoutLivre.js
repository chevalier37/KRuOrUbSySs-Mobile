import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Segment, Button, Checkbox, Form, Header, Divider, Label, Comment, Rating } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import Vote from 'react-icons/lib/fa/thumbs-up'; 

import InjectedCheckoutFormLivre from './CheckoutFormLivre';
import {Elements} from 'react-stripe-elements';

class MyStoreCheckoutLivre extends Component {
	
	constructor(props) {
		    super(props);
		}

  	render() {
  
		return (
			<div className="ListeMessages">  			
		  			<Elements>
				        <InjectedCheckoutFormLivre/>
				    </Elements>
			</div>

		);
  	}
}

export default MyStoreCheckoutLivre =  withTracker(() => {
  return {
  };
})(MyStoreCheckoutLivre);
