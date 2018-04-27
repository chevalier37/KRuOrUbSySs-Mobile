import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Sidebar, Segment, Button, Header, } from 'semantic-ui-react'
import { Route, Redirect } from 'react-router';
 
//Component
import HeaderPage from '../component/HeaderPage.js';
import ContentMenuRight from '../component/ContentMenuRight.js';
import ButtonPusher from '../component/ButtonPusher.js';
import ContentMenuLeft from '../component/ContentMenuLeft.js';
import ListeDonsContent from '../component/ListeDonsContent.js';

import ContentMenuMobile from '../component/ContentMenuMobile.js';
import FooterPage from '../component/FooterPage.js';
import FaList from 'react-icons/lib/fa/list'; 

class ListeDons extends Component {

    constructor(props) {
        super(props);
        this.state = {
          visible: false,
          visibleLeft:false, 
        }
    }

    toggleVisibility = () => this.setState({ visible: !this.state.visible })
    VisibilityLeft = () => this.setState({ visibleLeft: !this.state.visibleLeft })
    
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
                  <ListeDonsContent theme={this.props.match.params.theme}/> 
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
})(ListeDons);
