import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Sidebar, Segment, Button, Header } from 'semantic-ui-react'
import Img from 'react-image'
import { Route, Redirect } from 'react-router';

//Component
import HeaderPage from '../component/HeaderPage.js';
import ContentMenuRight from '../component/ContentMenuRight.js';
import ButtonPusher from '../component/ButtonPusher.js';
import ContentMenuLeft from '../component/ContentMenuLeft.js';
import FormPosterReponse from '../component/FormPosterReponse.js';
import SingleMessagePost from '../component/SingleMessagePost.js';
import ListeNotification from '../component/ListeNotification.js';

import { Notifications } from '../../api/Notifications.js';

import ContentMenuMobile from '../component/ContentMenuMobile.js';
import FooterPage from '../component/FooterPage.js';
import FaList from 'react-icons/lib/fa/list'; 

class allNotifications extends Component {

    constructor(props) {
        super(props);
        this.state = {
          visible: false,
          username:'',
          gender:'',
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

    componentDidUpdate() {
        this.scrollToTop();
    }

    scrollToTop() {
        this.el.scrollIntoView();
    }

    componentWillMount(){
      let id = this.props.match.params.id
      Meteor.apply('usernameRecommander', [{
              id,
              }], {
              onResultReceived: (error, response) => {
                if (error) console.warn(error.reason);
                                 
                 {response ?
                 this.setState({username: response.username}) 
                 :
                 ''}

                  {response ?
                 this.setState({gender: response.profile.gender}) 
                 :
                 ''}

                },
        })   
      }

    renderAllreponses() {
          let Allreponses = this.props.allreponses;

          return Allreponses.map((message) => {
           let date = Date.parse(message.date);
             
            return (
              <ListeNotification
                key={message._id}
                message={message}
                date={date}         
              />
            );
          });
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
                <div className="containerSite" onClick={this.toggleHidden}>
                    <div className="containerIMG">
                      <div className="MainContent">
                        <Segment>
                        </Segment>
                         {this.renderAllreponses()}
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

export default allNotifications =  withTracker(() => {
  const myId = Meteor.userId();
  const Handle = Meteor.subscribe('Notifications', myId);
  const loading = !Handle.ready();
  const allreponses = Notifications.find({'to_id':myId}, { sort: {date: -1 } });
  const reponseExists = !loading && !!allreponses;

  return {
    allreponses: reponseExists ? allreponses.fetch() : [],
  };
})(allNotifications);
