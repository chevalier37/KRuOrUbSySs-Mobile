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
import ContentMenuLeft from '../component/ContentMenuLeft.js';



class commandeEffectuer extends Component {

    state = { visible: false }

    toggleVisibility = () => this.setState({ visible: !this.state.visible })
    toggleHidden = () => this.setState({ visible: false })

    componentDidMount() {
        this.scrollToTop();
    }

    componentDidUpdate() {
        
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
                  <ContentMenuLeft />                     
                  </div> 
                </div>
              </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
  };
})(commandeEffectuer);
