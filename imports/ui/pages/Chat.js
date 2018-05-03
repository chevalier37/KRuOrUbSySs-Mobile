import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Checkbox, Form,  Message } from 'semantic-ui-react'
import { Route, Redirect } from 'react-router';

//Component
import HeaderPage from '../component/HeaderPage.js';
import ContentMenuRight from '../component/ContentMenuRight.js';
import ButtonPusher from '../component/ButtonPusher.js';
import ContactChat from '../component/ContactChat.js';
import ChatContent from '../component/ChatContent.js';
import FormChat from '../component/FormChat.js';

import ContentMenuMobile from '../component/ContentMenuMobile.js';
import FooterPage from '../component/FooterPage.js';
import FaList from 'react-icons/lib/fa/list'; 

import { Chat } from '../../api/Chat.js';

class chat extends Component {

    constructor(props) {
        super(props);
     
        this.state = {
          username:'',
          naissance:'',
          update:false,
          gender:'',
          visibleLeft:false,
        };
    }

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

    renderAllChat() {
          let AllChat = this.props.allChat;
          let name = this.props.username
          return AllChat.map((message) => {
           let date = Date.parse(message.post_date);
            return (
              <ChatContent
                key={message._id}
                message={message}
                date={date}
                to_id = {this.props.match.params.id} 
              />
            );
          });
    }

    componentWillReceiveProps(){
         this.setState({update: false})
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

      const to_id = this.props.match.params.id;
       
      if(this.state.update==false && to_id != Meteor.userId()){

        //on cherche le username, l'age et on met tous les message en 'read'
        Meteor.apply('updateContact', [{
          to_id,
          }], {
          onResultReceived: (error, response) => {
            if (error) console.warn(error.reason);
            let now = new Date();
            let diff = now - response.profile.naissance;
            let age = Math.round(diff / 31536000000);
            
            {response ?
             this.setState({naissance: age})
            
             :
             ''}

             {response ?
             this.setState({update: true})
             
             :
             ''}
             
             {response ?
             this.setState({username: response.username}) 
             
             :
             ''}

              {response ?
             this.setState({gender: response.profile.gender}) 
             
             :
             ''}

            },
        });
      }

    return (
      <div className="container">
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
                      <div className="containerContactChat"  >
                      <div ref={el => { this.el = el; }} ></div>
                        <ContactChat to_id = {this.props.match.params.id}  />
                      </div>
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


export default chat =  withTracker(({ match }) => {
  const to_id = match.params.id;
  const from_id = Meteor.userId();
  const Handle = Meteor.subscribe('Chat', to_id, from_id);
  const loading = !Handle.ready();
  const allreponses = Chat.find({$or : [{from_id: from_id, to_id:to_id}, {from_id: to_id, to_id:from_id}]});
  const reponseExists = !loading && !!allreponses;
  let username = '';

  return {
    allChat: reponseExists ? allreponses.fetch() : [],
  };
})(chat);