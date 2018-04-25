import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Divider } from 'semantic-ui-react'
import { Route, Redirect } from 'react-router';
 
//Component
import HeaderPage from '../component/HeaderPage.js';
import ContentMenuRight from '../component/ContentMenuRight.js';
import ButtonPusher from '../component/ButtonPusher.js';
import ContentMenuLeft from '../component/ContentMenuLeft.js';

//Stripe
import {StripeProvider} from 'react-stripe-elements';
import MyStoreCheckout from '../component/MyStoreCheckout.js';

class Dons extends Component {

    constructor(props) {

        super(props);
      this.state = {
        visible: false,
        stripe: null,

      }

    } 

    toggleVisibility = () => this.setState({ visible: !this.state.visible })
    toggleHidden = () => this.setState({ visible: false })
/*
     componentDidMount() {
    if (window.Stripe) {
      this.setState({stripe: window.Stripe('pk_test_FYPy2HMQEUB5q9EwN27MAWyo')});
    } else {
      document.querySelector('#stripe-js').addEventListener('load', () => {
        // Create Stripe instance once Stripe.js loads
        this.setState({stripe: window.Stripe('pk_test_FYPy2HMQEUB5q9EwN27MAWyo')});
      });
    }
  }
*/
    render() {
    const { visible } = this.state
    if (!Meteor.loggingIn() && !Meteor.userId()){
      return <Redirect to="/" />;
    }  

    return (
      <div className="container">
        <header>
          <div className="containerSupHeader">
            <div className="containerHeader">
            <div className="headerPage">
              <HeaderPage />
              <span
               className="buttonPush"
               onClick={this.toggleVisibility}>

               <ButtonPusher />
               </span>
            </div>
            </div>
          </div>
        </header>

       
        <Sidebar.Pushable >
              <Sidebar
                animation='overlay'
                className="ListRight"
                direction='right'
                visible={visible}
                icon='labeled'
                vertical
                className="SidebarUI"
              >
                <ContentMenuRight />
              </Sidebar>
              
              <Sidebar.Pusher>
        
                <div className="containerSite" onClick={this.toggleHidden}>
                  <div className="containerIMG">
                  <ContentMenuLeft />

                  <div className="MainContent">
                    <Segment className="MainContentPage">
                      <Header>
                      Contact
                      </Header>
                      <Divider />
                      <div className="corpsText">
                        
                        <StripeProvider apiKey="pk_test_12345">
                            <MyStoreCheckout />
                          </StripeProvider>
                      </div>
                    </Segment>
                  </div>
                      
                      
                  </div> 
                </div>

              </Sidebar.Pusher>

        </Sidebar.Pushable>
      
      </div>
    );
  }
}



export default Dons =  withTracker(() => {
  //Meteor.subscribe('tasks');
  return {
    /*tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
    incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
    currentUser: Meteor.user(),*/
  };
})(Dons);
