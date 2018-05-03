import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import { Button, Checkbox, Form, Select, Dropdown, Menu, Label, Container } from 'semantic-ui-react'
import { Meteor } from 'meteor/meteor';
import BodyClassName from 'react-body-classname';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
import { withRouter } from 'react-router'
import PropTypes from 'prop-types';

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
import Arrow from 'react-icons/lib/fa/arrow-left';


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
  static contextTypes = {
    router: PropTypes.object // replace with PropTypes.object if you use them
  }

  constructor(props) {
    super(props);
 
    this.state = {
      body: '',
      logout:false,
      username:'d',
      chat:'',
      pathname:" ",
      home:true,
      visible:' '
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
    let first = $(location).attr('pathname');
    first.indexOf(1);
    first.toLowerCase();
    pathname = first.split("/")[1];


  	{this.props.chat == 'true' ?
  	this.setState({chat:'chat'}) : ''}

    if(pathname == "Home" || pathname == "home"){
      this.setState({
      home: true,
    });
      
    }else{
      this.setState({
      home: false,
    });
    }

    if(pathname == "Favoris"){
      this.setState({
      pathname: "Mes favoris",
    });
    }

    if(pathname == "MessagesPostes"){
      this.setState({
      pathname: "Mes messages",
    });
    }

    if(pathname == "ListeDons"){
      this.setState({
      pathname: "Mes dons",
    });
    }

    if(pathname == "Livre"){
      this.setState({
      pathname: "Le Secret de Cendrillon",
    });
    }

    if(pathname == "AmeliorerSite"){
      this.setState({
      pathname: "Améliorer le site",
    });
    }

    if(pathname == "SignalerBug"){
      this.setState({
      pathname: "Signaler un Bug",
    });
    }

    if(pathname == "ContactConnecte"){
      this.setState({
      pathname: "Contact",
    });
    }

    if(pathname == "NumerosUtiles"){
      this.setState({
      pathname: "Numéros utiles",
    });
    }

    if(pathname == "SupprimerCompte"){
      this.setState({
      pathname: "Supprimer mon compte",
    });
    }

    if(pathname == "DevenirConseiller"){
      this.setState({
      pathname: "Devenir conseiller",
    });
    }

    if(pathname == "ResultatsConseiller"){
      this.setState({
      pathname: "Les conseillers",
    });
    }

    if(pathname == "Profil"){
      this.setState({
      pathname: "Profil",
    });
    }

    if(pathname == "ModifierConseiller"){
      this.setState({
      pathname: "Expériences",
    });
    }

    if(pathname == "Recommandations"){
      this.setState({
      pathname: "Recommandations",
    });
    }

    if(pathname == "Notifications"){
      this.setState({
      pathname: "Notifications",
    });
    }

    if(pathname == "Recommander"){
      this.setState({
      pathname: "Recommander",
    });
    }

    if(pathname == "Dons"){
      this.setState({
      pathname: "Faire un don",
    });
    }

     if(pathname == "ValidationDon"){
      this.setState({
      pathname: "Validation",
    });
    }

    if(pathname == "singleMessage"){
      this.setState({
      pathname: "Message",
    });
    }

    if(pathname == "Chat"){
      this.setState({
      pathname: "Messagerie",
    });
    }

    if(pathname == "ChatMobile"){
      this.setState({
      pathname: "Discussion",
    });
      this.setState({
      visible: 'none',
    });
    }

  }


  	render() {
  		let ChatCount = this.props.ChatCount;
  		let reponsesCount = this.props.reponsesCount;
  		let recommandationsCount = this.props.recommandationsCount;
  		let DonsCount = this.props.DonsCount;
      let Name = this.props.name;



		return (
			<div>
          <div className={this.state.home ? "nameMobile" : "none"}>
              {Name}
          </div>

          <div className={this.state.home ? "none" : "nameMobile"}>
              <div className="goBack"
                onClick={this.context.router.history.goBack}>
                  <Arrow />
              </div>
              {this.state.pathname}
          </div>
    			
  			    <div className={this.state.visible + " "+ "pusher"}>
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