import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import {Segment, Header} from 'semantic-ui-react'
import { Route, Redirect } from 'react-router';
 
//Component
import Header1 from '../component/Header.js';
import Footer from '../component/Footer.js';

import ContentMenuMobile from '../component/ContentMenuMobile.js';
import FooterPage from '../component/FooterPage.js';
import FaList from 'react-icons/lib/fa/list'; 

class contactHorsConnexion extends Component {

      constructor(props) {
        super(props);
        this.state = {
          visible: false,
          username:'',
          gender:'',
          visibleLeft:false, 
        }
      }

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom() {
        this.el.scrollIntoView();
    }

    toggleVisibility = () => this.setState({ visible: !this.state.visible })
    VisibilityLeft = () => this.setState({ visibleLeft: !this.state.visibleLeft })
    
    toggleHidden() {
      this.setState({ visible: false });
      this.setState({ visibleLeft: false });
    } 
   
  render() {
   const { visible } = this.state  
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
                      <div className="contactMargin">
                        <Segment>
                          <div className="contactHeader">
                            <Header>
                              Contact
                            </Header>
                                Pour tout renseignement, vous pouvez nous contacter à cette adresse : editions@seconde-vie.fr
                          </div> 
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
})(contactHorsConnexion);
