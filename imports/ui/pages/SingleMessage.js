import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Checkbox, Form,  Message, Label } from 'semantic-ui-react'
import Img from 'react-image'
import { Route, Redirect } from 'react-router';


//Component
import HeaderPage from '../component/HeaderPage.js';
import ContentMenuRight from '../component/ContentMenuRight.js';
import ButtonPusher from '../component/ButtonPusher.js';
import ContentMenuLeft from '../component/ContentMenuLeft.js';
import FormPosterReponse from '../component/FormPosterReponse.js';
import SingleMessagePost from '../component/SingleMessagePost.js';
import ListeReponses from '../component/ListeReponses.js';

import { Comments } from '../../api/Reponses.js';
import { Posts } from '../../api/Messages.js';

import ContentMenuMobile from '../component/ContentMenuMobile.js';
import FooterPage from '../component/FooterPage.js';
import FaList from 'react-icons/lib/fa/list'; 

class SingleMessage extends Component {

    constructor(props) {
        super(props);
        this.state = {
          visible: false,
          visibleLeft:false, 
        }
    }

    componentDidMount() {
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


renderAllreponses() {
      let Allreponses = this.props.allreponses;

      return Allreponses.map((message) => {
       let date = Date.parse(message.submitted);
         
        return (
          <ListeReponses
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
        
                <div className="containerSite" onClick={this.toggleHidden.bind(this)}>
                  <div className="containerIMG">
                  <div className="MainContent">

                  <SingleMessagePost id={this.props.match.params.id}/>

                   <FormPosterReponse
                    id={this.props.match.params.id}
                    authorId={this.props.authorId}
                    titreMessage={this.props.titreMessage}
                    />
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

export default SingleMessage =  withTracker(({ match }) => {
  const reponse = match.params.id;
  const Handle = Meteor.subscribe('reponsesSingleMessage',reponse );
  const loading = !Handle.ready();
  const allreponses = Comments.find({postId:reponse}, { sort: {submitted: -1 } });
  const reponseExists = !loading && !!allreponses;

  const Handle1 = Meteor.subscribe('SingleMessages', reponse);
  const loading1 = !Handle1.ready();
  const authorId = Posts.findOne({_id:reponse});
  const reponseExists1 = !loading1 && !!authorId;

  return {
    allreponses: reponseExists ? allreponses.fetch() : [],
    authorId:reponseExists1 ? authorId.post_author_id : '',
    titreMessage:reponseExists1 ? authorId.post_title : '',

  };
})(SingleMessage);
