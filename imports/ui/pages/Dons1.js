import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Sidebar, Segment, Button, Header, Divider} from 'semantic-ui-react'
import { Route, Redirect } from 'react-router';
 
//Component
import HeaderPage from '../component/HeaderPage.js';
import ContentMenuRight from '../component/ContentMenuRight.js';
import ButtonPusher from '../component/ButtonPusher.js';
import ContentMenuLeft from '../component/ContentMenuLeft.js';

//Stripe
import {StripeProvider} from 'react-stripe-elements';
import MyStoreCheckout from '../component/MyStoreCheckout.js';

class Dons extends Component {

    constructor(props) {
        super(props);
        this.state = {
        visible: false,
        stripe: null,
        username:''
        }
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

    toggleVisibility = () => this.setState({ visible: !this.state.visible })
    toggleHidden = () => this.setState({ visible: false })

    componentWillMount(){
      let id = this.props.match.params.id;
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
                      Faire un don à 
                        <div className={this.state.gender=="fille" ?
                        "filleMessageDon" : "garconMessageDon"
                        }>
                          {this.state.username}
                        </div>
                      </Header>

                      <Divider />

                      <div className="corpsText">                     
                        <StripeProvider apiKey="pk_live_Cq60qm92b2AkPUxpWFdr48ud">
                            <MyStoreCheckout
                             gender={this.state.gender}
                             username={this.state.username}
                             id={this.props.match.params.id}
                             isOnline={this.props.isOnline}
                             mail={this.props.mail}
                             />
                          </StripeProvider>
                      </div>
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



export default Dons =  withTracker(({match}) => {
  const id = match.params.id;
  const Handle = Meteor.subscribe('userDon', id);
  const loading = !Handle.ready();
  const user = Meteor.users.findOne({'_id':id});
  const reponseExists = !loading && !!user;
  return {
  isOnline:reponseExists ? user.status.online : '',
  mail:reponseExists ? user.profile.mail : '',
  };
})(Dons);
