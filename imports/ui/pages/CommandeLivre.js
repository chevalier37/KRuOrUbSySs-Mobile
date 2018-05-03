import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Sidebar, Segment, Button, Icon, Header, Divider } from 'semantic-ui-react'
import { Route, Redirect } from 'react-router';
import Img from 'react-image'
 import FaList from 'react-icons/lib/fa/list'; 

//Component
import HeaderPage from '../component/HeaderPage.js';
import ContentMenuMobile from '../component/ContentMenuMobile.js';
import ButtonPusher from '../component/ButtonPusher.js';
import ContentMenuLeft from '../component/ContentMenuLeft.js';
import FooterPage from '../component/FooterPage.js';
import ContentMenuRight from '../component/ContentMenuRight.js';
//Stripe
import {StripeProvider} from 'react-stripe-elements';
import MyStoreCheckoutLivre from '../component/MyStoreCheckoutLivre.js';

class Livre extends Component {

    state = { visible: false }

    toggleVisibility(){
      this.scrollToTop();
      this.setState({ visible: !this.state.visible  })
    } 

    VisibilityLeft(){
      this.scrollToTop();
      this.setState({ visibleLeft: !this.state.visibleLeft  })
    } 

    toggleHidden = () => this.setState({ visible: false })

    componentDidMount() {
        this.scrollToTop();
    }

    scrollToTop() {
        this.el.scrollIntoView();
    }

    Submit(event) {
        event.preventDefault();
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
                    <ContentMenuLeft />
                    <div className="MainContent">
                      <Segment className="MainContentPage">
                        <Header>
                        Commander Le Secret de Cendrillon
                        </Header>

                        <Divider />

                        <div className="imgLivreCommande">
                          <Img className="imgLivre" src="/livre.png"/>
                        </div>

                        <div className="prix">
                          <b>Format :</b> 21cm x 14cm<br />
                          <b>Nombre de pages :</b> 250 pages<br />
                          <b>Auteur :</b> Jean-Benoit ROUSSAT<br />
                          <b>Editions :</b> Seconde Vie Editions<br />
                          <b>Prix :</b> 22€<br />
                        </div>

                        <StripeProvider apiKey="pk_live_Cq60qm92b2AkPUxpWFdr48ud">
                          <MyStoreCheckoutLivre />
                        </StripeProvider>

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
})(Livre);
