import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Sidebar, Segment, Button, Header, Divider, Modal } from 'semantic-ui-react'
import { Route, Redirect } from 'react-router';
 
//Component
import HeaderPage from '../component/HeaderPage.js';
import ContentMenuRight from '../component/ContentMenuRight.js';
import ButtonPusher from '../component/ButtonPusher.js';
import ContentMenuLeft from '../component/ContentMenuLeft.js';

import ContentMenuMobile from '../component/ContentMenuMobile.js';
import FooterPage from '../component/FooterPage.js';
import FaList from 'react-icons/lib/fa/list'; 

class SupprimerCompte extends Component {

    state = { 
      visible: false,
      open:false,
      delete:false,
      visibleLeft:false, 
       }

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

    toggleVisibility = () => this.setState({ visible: !this.state.visible })
    VisibilityLeft = () => this.setState({ visibleLeft: !this.state.visibleLeft })
    
    toggleHidden() {
      this.setState({ visible: false });
      this.setState({ visibleLeft: false });
    } 

    supprimer(){
      Meteor.call('supprimerCompte')
      this.setState({delete: true})
    }

    non(){
      this.setState({open: false})
    }

    open(){
      this.setState({open: true})
    }

    render() {
    const { visible } = this.state
    if (!Meteor.loggingIn() && !Meteor.userId()){
      return <Redirect to="/" />;
    } 
    if (this.state.delete==true){
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
               onClick={this.toggleVisibility}>
               <ButtonPusher />
               </span>
              
              <span
               className="buttonPushMobile"
               onClick={this.VisibilityLeft}>
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
               <ContentMenuMobile />
              </Sidebar>
              
              <Sidebar.Pusher>
        
                <div className="containerSite" onClick={this.toggleHidden.bind(this)}>
                  <div className="containerIMG">
                  <div className="MainContent">
                    <Segment className="MainContentPage">                   
                      <Modal trigger={<Button color='red' onClick={this.open.bind(this)}>
                          Supprimer mon compte
                          </Button>} basic size='small' open={this.state.open}>
                        <Header content='Supprimer mon compte' />
                        <Modal.Content>
                         <p className="deleteCount">Toutes vos données seront définitivement supprimées</p>
                          <p className="deleteCount">Confirmez-vous la suppression de votre compte ?</p>
                        </Modal.Content>
                        <Modal.Actions>
                          <Button
                           basic 
                           color='red'
                           inverted
                           onClick={this.non.bind(this)}
                           >
                            Non
                          </Button>
                          <Button
                           color='green'
                           inverted
                           onClick={this.supprimer.bind(this)}
                           >
                            Oui
                          </Button>
                        </Modal.Actions>
                      </Modal>
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
})(SupprimerCompte);
