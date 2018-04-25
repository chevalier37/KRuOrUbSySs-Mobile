import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Segment, Button, Checkbox, Form, Header, Divider, Label, Comment } from 'semantic-ui-react'
import { withTracker } from 'meteor/react-meteor-data';

import {CardNumberElement} from 'react-stripe-elements';
import {CardExpiryElement} from 'react-stripe-elements';
import {CardCVCElement} from 'react-stripe-elements';

class CardSection extends React.Component {
  render() {
  	const style = {
  base: {
    color: '#424770',
    letterSpacing: '0.025em',
    fontFamily: 'Source Code Pro, Menlo, monospace',
    fontSmoothing: 'antialiased',
    backgroundColor:'red',
    fontSize: '16px',
    '::placeholder': {
      color: '#aab7c4'
    }
  },
  invalid: {
    color: '#fa755a',
    iconColor: '#fa755a'
  }
};
    return (
      <div className="cardSection">
              Carte bancaire :
          <div className="cardblock">
              Numéro de carte :<br />
              <Segment>
              	<CardNumberElement style={style}  />
              </Segment> 
      		</div>
         
    		<div className="cardblock">
    			Date d'expiration :<br />
          <Segment>
            	<CardExpiryElement style={style} />
          </Segment> 
        </div>

    		<div className="cardblock">
    			Code CVC :<br />
          <Segment>
            	<CardCVCElement style={style} />
          </Segment> 
        </div>
      </div>
    );
  }
};

export default CardSection;