import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Button, Checkbox, Form,  Message } from 'semantic-ui-react'
import Img from 'react-image'
import { Route, Redirect } from 'react-router';

//Component
import FormSubscribe from '../component/FormSubscribe.js';
import Header from '../component/Header.js';
import Footer from '../component/Footer.js';
import FaComments from 'react-icons/lib/fa/comments';
import FormLogin from '../component/FormLogin.js';

import FaTrashO from 'react-icons/lib/fa/trash-o';

class Connexion extends Component {

  render() {
    if (Meteor.loggingIn() && Meteor.userId()){
      return <Redirect to="/home" />;
    }
    return (
      <div className="container">
        <header>
          <div className="containerSupHeader">
            <div className="containerHeader">
              <Header />
            </div>
          </div>
        </header>

        <div className="containerSupIMG">
          <div className="containerIMG">

            <div className="FormSubscribe">
              <FormLogin />
              <FormSubscribe />
            </div>
          </div> 
        </div>

      </div>
    );
  }
}

export default withTracker(() => {
  return {
  };
})(Connexion);
