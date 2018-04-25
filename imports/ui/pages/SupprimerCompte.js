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


class SupprimerCompte extends Component {

    state = { 
      visible: false,
      open:false,
      delete:false,
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
                        Supprimer mon compte
                        </Header>
                       
                        <Divider />
                     
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
      
      </div>
    );
  }
}

export default withTracker(() => {
  return {
  };
})(SupprimerCompte);
