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

class chatMobile extends Component {

    constructor(props) {
        super(props);
        this.state = {
          username:'',
          naissance:'',
          update:false,
          gender:'',
          visibleLeft:false,
          visible: false, 
        };
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

    toggleVisibility = () => this.setState({ visible: !this.state.visible })
    VisibilityLeft = () => this.setState({ visibleLeft: !this.state.visibleLeft })
    
    toggleHidden() {
      this.setState({ visible: false });
      this.setState({ visibleLeft: false });
    } 

    componentWillReceiveProps(){
         this.setState({update: false})
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
               onClick={this.toggleVisibility}>
               <ButtonPusher />
               </span>
              <HeaderPage />
            </div>
            </div>
          </div>
        </header>        
            <div className="containerSiteChat" onClick={this.toggleHidden.bind(this)}>
              <div className="containerChat">
                <div className="containerDiscussion">
                  <div className="MainContentChat">
                    <div className="headerChat">
                      <div className={"ChatUsername" + " " + this.state.gender}>
                          <Link to={'/Profil/' + this.props.match.params.id}>
                          {this.state.username}
                          </Link>
                      </div>
                      <div className="ChatAge">  
                          {this.state.naissance} ans
                      </div>
                      <br/>
                      <div className="recommmander">
                          <Link to={'/Recommander/' + this.props.match.params.id}>    
                            <Button
                             size='mini'
                             inverted
                             color='green' >
                              Recommander
                            </Button>
                          </Link>
                      </div>
                      <div className="FaireDon">
                        <Link to={'/Dons/' + this.props.match.params.id}>  
                            <Button
                             size='mini'
                             inverted
                             color='red' >
                             Faire un don
                            </Button>
                        </Link>
                      </div>
                    </div>
                    <div className="ContentDiscussion">
                       {this.renderAllChat()}
                      <FormChat to_id = {this.props.match.params.id} />
                    </div>
                  </div>
                </div>
              </div> 
            </div> 
        <FooterPage />
      </div>
    );
  }
}


export default chatMobile =  withTracker(({ match }) => {
  const to_id = match.params.id;
  const from_id = Meteor.userId();
  const Handle = Meteor.subscribe('Chat', to_id, from_id);
  const loading = !Handle.ready();
  const allreponses = Chat.find({$or : [{from_id: from_id, to_id:to_id}, {from_id: to_id, to_id:from_id}]}, { sort: {post_date: 1 } });
  const reponseExists = !loading && !!allreponses;
  let username = '';

  return {
    allChat: reponseExists ? allreponses.fetch() : [],
  };
})(chatMobile);