import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import Flag from 'react-world-flags'
import { Popup } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

//Component

export default class Footer extends Component {
  
  	render() {

	return (
		<div className="footer">
			<div className="footerSlogan"><Link to="/contact" >Contact ©Kurbys, 2018</Link> </div>

		</div>
	);
  }
}
