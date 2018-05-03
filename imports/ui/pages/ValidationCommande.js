import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header,  Message, Divider } from 'semantic-ui-react'
import { Route, Redirect } from 'react-router';
 
//Component
import HeaderPage from '../component/HeaderPage.js';
import ContentMenuRight from '../component/ContentMenuRight.js';
import ButtonPusher from '../component/ButtonPusher.js';
import ContentMenuMobile from '../component/ContentMenuMobile.js';
import MainContent from '../component/MainContent.js';
import FooterPage from '../component/FooterPage.js';

import FaList from 'react-icons/lib/fa/list'; 

class commandeEffectuer extends Component {

    state = { visible: false }

    toggleVisibility(){
      this.scrollToTop();
      this.setState({ visible: !this.state.visible  })
    } 

    VisibilityLeft(){
      this.scrollToTop();
      this.setState({ visibleLeft: !this.state.visibleLeft  })
    } 

    componentDidMount() {
        this.scrollToTop();
    }

    toggleHidden() {
      this.setState({ visible: false });
      this.setState({ visibleLeft: false });
    } 

    scrollToTop() {
        this.el.scrollIntoView();
    }

    render() {
    const { visible } = this.state
    if (!Meteor.loggingIn() && !Meteor.userId()){
      return <Redirect to="/" />;
    }  

    return (
      <div className="container">
      <div ref={el => { this.el = el; }} ></div>
       <header>
          <div className="containerSupHeader">
            <div className="containerHeader">
            <div className="headerPage">
              <span
               className="buttonPush"
               onClick={this.toggleVisibility.bind(this)}>
               <ButtonPusher />
               </span>
              
              <span
               className="buttonPushMobile"
               onClick={this.VisibilityLeft.bind(this)}>
               <FaList />
               </span>
              <HeaderPage />
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
                <div ref={el => { this.el = el; }} ></div>
                  <ContentMenuRight />
                </Sidebar>

                 <Sidebar
                  animation='overlay'
                  className="ListRight"
                  direction='left'
                  visible={this.state.visibleLeft}
                  icon='labeled'
                  vertical
                  className="SidebarUI"
                >
                <div ref={el => { this.el = el; }} ></div>
                 <ContentMenuMobile />
                </Sidebar>
              
              <Sidebar.Pusher>
        
                <div className="containerSite" onClick={this.toggleHidden.bind(this)}>
                  <div className="containerIMG">
                  <div className="MainContent">
                    <Segment className="MainContent">
                        <Header>
                        Commande enregistrée
                        </Header>
                      
                      <Divider />

                      <p className="consigne">
                      Votre commande a bien été enregistrée. Vous serez livré sous 3 jours.
                      </p>
                       <p></p>
                    </Segment>
                  </div>             
                  </div> 
                </div>
              </Sidebar.Pusher>
        </Sidebar.Pushable>
        <FooterPage />
      </div>
    );
  }
}

export default withTracker(() => {
  return {
  };
})(commandeEffectuer);
