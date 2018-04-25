import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Sidebar, Segment, Button, Icon, Header, Divider } from 'semantic-ui-react'
import { Route, Redirect } from 'react-router';
import Img from 'react-image'
 
//Component
import HeaderPage from '../component/HeaderPage.js';
import ContentMenuRight from '../component/ContentMenuRight.js';
import ButtonPusher from '../component/ButtonPusher.js';
import ContentMenuLeft from '../component/ContentMenuLeft.js';

//Stripe
import {StripeProvider} from 'react-stripe-elements';
import MyStoreCheckoutLivre from '../component/MyStoreCheckoutLivre.js';

class Livre extends Component {

    state = { visible: false }

    toggleVisibility = () => this.setState({ visible: !this.state.visible })
    toggleHidden = () => this.setState({ visible: false })

    componentDidMount() {
        this.scrollToTop();
    }

    componentDidUpdate() {
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
      
      </div>
    );
  }
}



export default withTracker(() => {
  return {
  };
})(Livre);
