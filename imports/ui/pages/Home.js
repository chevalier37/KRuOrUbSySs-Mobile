import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Checkbox, Form,  Message } from 'semantic-ui-react'
import Img from 'react-image'
import { Route, Redirect } from 'react-router';

import FaList from 'react-icons/lib/fa/list'; 

//Component
import HeaderPage from '../component/HeaderPage.js';
import ContentMenuRight from '../component/ContentMenuRight.js';
import ButtonPusher from '../component/ButtonPusher.js';
import ContentMenuMobile from '../component/ContentMenuMobile.js';
import MainContent from '../component/MainContent.js';
import FooterPage from '../component/FooterPage.js';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      visibleLeft:false,    
    };   
  }

    toggleVisibility = () => this.setState({ visible: !this.state.visible })
    VisibilityLeft = () => this.setState({ visibleLeft: !this.state.visibleLeft })
    
    toggleHidden() {
      this.setState({ visible: false });
      this.setState({ visibleLeft: false });
    } 

    render() {
    const { visible } = this.state  
    if (!Meteor.loggingIn() && !Meteor.userId()){
      return <Redirect to="/" />;
    }
    const naissance = this.props.naissance;
    const typeNaissance = typeof naissance;
     if (typeNaissance == 'string'){
     }else if (typeNaissance !== 'object'){
      return <Redirect to="/MiseAjourNaissance" />;
    }
    
    return (
      <div className="container">
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
       
          <Sidebar.Pushable  >
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
                
                <Sidebar.Pusher >
          
                  <div className="containerSite" onClick={this.toggleHidden.bind(this)}>
                    <div className="containerIMG">
                      <MainContent  />  
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
  const id = Meteor.userId();
  const Handle = Meteor.subscribe('user', id);
  const loading = !Handle.ready();
  const allreponses = Meteor.users.find({_id:id});
  const reponseExists = !loading && !!allreponses;

  return {
    naissance: reponseExists ? allreponses.fetch() : '',
  };
})(Home);
