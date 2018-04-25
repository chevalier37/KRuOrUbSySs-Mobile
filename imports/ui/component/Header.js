import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import Img from 'react-image'
import { Link } from 'react-router-dom';

//Component
import FormLogin from '../component/FormLogin.js';

export default class Header extends Component {
  static contextTypes = {
    router: () => true, 
  }

  	render() {

	return (
		<div className="headerSite"  onClick={this.context.router.goBack}>
			<Link to="/" ><Img className="logo" src="/logo_site.png"/></Link>
			<Link to="/" ><div className="titreKURBYS">KURBYS</div></Link>
		</div>
	);
  }
}
