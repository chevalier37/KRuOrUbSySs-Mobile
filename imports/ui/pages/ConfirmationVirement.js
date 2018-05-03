import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Sidebar, Segment, Button, Icon, Header, Divider } from 'semantic-ui-react'
import { Route, Redirect } from 'react-router';
 
//Component
import HeaderPage from '../component/HeaderPage.js';
import ContentMenuRight from '../component/ContentMenuRight.js';
import ButtonPusher from '../component/ButtonPusher.js';
import ContentMenuMobile from '../component/ContentMenuMobile.js';
import MainContent from '../component/MainContent.js';
import FooterPage from '../component/FooterPage.js';

import FaList from 'react-icons/lib/fa/list'; 


class ConfirmationVirement extends Component {

    state = { visible: false }

    toggleVisibility(){
      this.scrollToTop();
      this.setState({ visible: !this.state.visible  })
    } 

    VisibilityLeft(){
      this.scrollToTop();
      this.setState({ visibleLeft: !this.state.visibleLeft  })
    } 

    toggleHidden() {
      this.setState({ visible: false });
      this.setState({ visibleLeft: false });
    } 

    componentDidMount() {
        this.scrollToTop();
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
                          Virement confirmé
                        </Header>
                      
                        <Divider />

                        <p className="consigne">
                        Votre demande de paiement à bien été enregistré.<br />
                        Il apparaitra sur votre compte bancaire dans 7 jours. 
                        </p>

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
})(ConfirmationVirement);
