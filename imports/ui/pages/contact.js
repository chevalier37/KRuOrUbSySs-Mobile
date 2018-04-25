import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import {Segment, Header} from 'semantic-ui-react'
import { Route, Redirect } from 'react-router';
 
//Component
import Header1 from '../component/Header.js';
import Footer from '../component/Footer.js';

class contactHorsConnexion extends Component {

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom() {
        this.el.scrollIntoView();
    }
   
  render() {
   
    return (
      <div className="container">
      <div ref={el => { this.el = el; }} ></div>
        <header>
          <div className="containerSupHeader">
            <div className="containerHeader">
              <Header1 />
            </div>
          </div>
        </header>

        <div className="containerSupIMG">
          <div className="containerIMG">
            <div className="contactMargin">
              <Segment>
                <div className="contactHeader">
                  <Header>
                    Contact
                  </Header>
                      Pour tout renseignement, vous pouvez nous contacter à cette adresse : editions@seconde-vie.fr
                </div> 
              </Segment>
            </div>
          </div>
        </div>   
        <div className="containerFooter">    
            <Footer />
        </div>
                  
      </div>
    );
  }
}

export default withTracker(() => {
  return {
  };
})(contactHorsConnexion);
