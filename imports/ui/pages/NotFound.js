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

class NotFound extends Component {

    constructor(props) {
        super(props);
        this.state = {
          visible: false,
          username:'',
          gender:'',
        }
    }

    toggleVisibility = () => this.setState({ visible: !this.state.visible })
    toggleHidden = () => this.setState({ visible: false })

    render() {
    const { visible } = this.state  

    if (!Meteor.loggingIn() && !Meteor.userId()){
      return <Redirect to="/" />;
    }
    
    return (
      <div className="container">
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
                      <Segment>
                        <Header>
                          <div className="titreRecomandation"> Page non trouvée </div>
                        </Header>
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

export default NotFound =  withTracker(({ match }) => {
  return {
  };
})(NotFound);
