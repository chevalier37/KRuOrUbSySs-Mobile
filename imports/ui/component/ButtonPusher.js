import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import { Button, Checkbox, Form, Select, Dropdown, Menu, Label, Container } from 'semantic-ui-react'
import { Meteor } from 'meteor/meteor';
import BodyClassName from 'react-body-classname';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";

//Icons
import Book from 'react-icons/lib/fa/book';
import ThumbsUp from 'react-icons/lib/fa/thumbs-up';
import Warning from 'react-icons/lib/fa/exclamation-triangle';
import Envelope from 'react-icons/lib/fa/envelope';
import Phone from 'react-icons/lib/fa/phone';
import Trash from 'react-icons/lib/fa/trash';
import SignOut from 'react-icons/lib/fa/sign-out';
import Bell from 'react-icons/lib/fa/bell';
import Edit from 'react-icons/lib/fa/edit';
import Search from 'react-icons/lib/fa/search';


import ChatItemNotif from './ChatItemNotif.js';
import ReponsesNotif from './ReponsesNotif.js';
import RecommandationsNotif from './RecommandationsNotif.js';
import DonsNotif from './DonsNotif.js';

//Collections
import { Chat } from '../../api/Chat.js';
import { Comments } from '../../api/Reponses.js';
import { Recommandations } from '../../api/Recommandations.js';
import { Dons } from '../../api/Stripe.js';

class ButtonPusher extends Component {
  
  constructor(props) {
    super(props);
 
    this.state = {
      body: '',
      logout:false,
      username:'d',
      chat:''
    };
  }

  body() {
    this.setState({
      body: 'StopScrollBody',
    });
  }

   Outbody() {
    this.setState({
      body: '',
    });
  }

  logout(){
  	 this.setState({
      logout: true,
    });
  	Meteor.logout()
  }

  componentWillMount(){
  	{this.props.chat == 'true' ?
  	this.setState({chat:'chat'}) : ''}
  }

  	renderChatUnread() {
          let Allreponses = this.props.allChat;

          return Allreponses.map((message) => {
           let date = Date.parse(message.post_date);
             
            return (
              <ChatItemNotif
                key={message._id}
                message={message}
                date={date}         
              />
            );
          });
    }

    renderReponsesUnread() {
          let Allreponses = this.props.allreponses;

          return Allreponses.map((message) => {
           let date = Date.parse(message.submitted);
             
            return (
              <ReponsesNotif
                key={message._id}
                message={message}
                date={date}         
              />
            );
          });
      }

    renderRecommandationsUnread() {
          let Allreponses = this.props.allrecommandations;

          return Allreponses.map((message) => {
           let date = Date.parse(message.date);
             
            return (

              <RecommandationsNotif
                key={message._id}
                message={message}
                date={date}         
              />
            );
          });
      }

      renderDons() {
          let Allreponses = this.props.allDons;

          return Allreponses.map((message) => {
           let date = Date.parse(message.date);
             
            return (
              <DonsNotif
                key={message._id}
                message={message}
                date={date}         
              />
            );
          });
    }

  	render() {
  		let ChatCount = this.props.ChatCount;
  		let reponsesCount = this.props.reponsesCount;
  		let recommandationsCount = this.props.recommandationsCount;
  		let DonsCount = this.props.DonsCount;
      
      {
       	this.props.chat == "true" ?  ChatCount = 0 : ChatCount
      }     

  		let totalNotif = ChatCount + reponsesCount + recommandationsCount + DonsCount ;
  		let stringTotalNotif =totalNotif.toString() 
  		const trigger = (
					  <span>
					     <Bell />
					    <div className={totalNotif>0 ? "visible" : "none"}>
						     <div className="ContainerNotifCircle">
								<div className="NotifCircle">
									{stringTotalNotif}
								</div>
							</div>
						</div>
					  </span>
				)

  		const logout = this.state.logout;
  		if (logout) {
      	return <Redirect to="/" />;
    	}

		let Name = this.props.name;

		return (
			<div>
		      <Helmet>
              <meta charSet="utf-8" />
              <title>({stringTotalNotif}) Kurbys</title>
          </Helmet>
				<BodyClassName className={this.state.body}>
				</BodyClassName>

  				<Dropdown
  				  trigger={trigger}
  				   className='link item notif DropdownMenuNotif'
  				   onClick={this.body.bind(this)}
  				   onClose={this.Outbody.bind(this)}>
  			    
    			    <Dropdown.Menu className='DropdownNotif'>
    			   		<Dropdown.Item className='AllNotif'>
    			   		 <Edit />
    			   		 <div className="ToutesNotif">
    			   		  <Link to={'/Notifications/'}>  
    			   		 Voir toutes les notifications
    			   		 </Link>
    			   		 </div>
    			   		</Dropdown.Item>
    			       
    			        <div className={this.props.chat=='true' ? "none" : ""}>
    			          {this.renderChatUnread()}
    			        </div>	       

    			        <div >
    			          {this.renderReponsesUnread()}
    			        </div>

    			        <div >
    			          {this.renderRecommandationsUnread()}
    			        </div>		        

    			        <div >
    			          {this.renderDons()}
    			        </div>
      
    			    </Dropdown.Menu>
  		    </Dropdown>

    			<Dropdown text={Name}  className='link item pseudo DropdownMenu'>
    			    <Dropdown.Menu>
    			        <Dropdown.Item>
    			         <Link to={'/Livre/'}>  
    			        	<p className="colorIconBlue"><Book /></p>
    			         	<p className="menuIcon">Le Secret de Cendrillon</p>
    			        </Link>
    			         </Dropdown.Item>
    			        <Dropdown.Divider />
    			        <Dropdown.Item>
    			        <Link to={'/AmeliorerSite/'}> 
    				        <p className="colorIconVert"><ThumbsUp /></p>
    				        <p className="menuIcon"> Améliorer le site </p>
    				    </Link>
    			        </Dropdown.Item>
    			        <Dropdown.Item>
    			        <Link to={'/SignalerBug/'}> 
    				        <p className="colorIcon"><Warning /></p>
    				        <p className="menuIcon"> Signaler un bug </p>
    				    </Link>
    			        </Dropdown.Item>
    			        <Dropdown.Item>
    			        <Link to={'/ContactConnecte/'}> 
    				        <p className="colorIconBlack"><Envelope /></p>
    				        <p className="menuIcon"> Contact</p>
    				    </Link>
    			        </Dropdown.Item>
    			        <Dropdown.Divider />
    			        <Dropdown.Item>
    			        <Link to={'/NumerosUtiles/'}> 
    				        <p className="colorIconVert"><Phone /></p>
    				        <p className="menuIcon"> Numéros utiles</p>
    				    </Link>
    			        </Dropdown.Item>
    			        <Dropdown.Divider />
    			        <Dropdown.Item>
    			        <Link to={'/SupprimerCompte/'}> 
    				        <p className="colorIcon"><Trash /></p>
    				        <p className="menuIcon"> Supprimer mon compte</p>
    			        </Link>
    			        </Dropdown.Item>
    			        <Dropdown.Divider />
    			        <Dropdown.Item onClick={this.logout.bind(this)} >
    			        <p className="colorIconBlack"><SignOut /></p>
    			        <p className="menuIcon"> Se déconnecter</p>
    			        </Dropdown.Item>
    			    </Dropdown.Menu>
    			</Dropdown>

			    <div className={this.state.chat + " "+ "pusher"}>
            <div className="buttonSearch">
              <Search />
            </div>         
    		  </div>
          
      </div>
		);
  	}
}

export default withTracker(() => {
  const MyId = Meteor.userId();
  let id = Meteor.user();
  let search = Meteor.users.findOne(id);
  {id ? name = search.username : name =''}

  //Chat
  const Handle = Meteor.subscribe('ChatCount', MyId );
  const loading = !Handle.ready();
  const allreponses = Chat.find({to_id:MyId, read:false}, { sort: {post_date: -1 } });
  const reponseExists = !loading && !!allreponses;

  //réponses 
  const Handle1 = Meteor.subscribe('reponsesNotif', MyId);
  const loading1 = !Handle1.ready();
  const allreponses1 = Comments.find({post_author_id:MyId, read:false}, { sort: {submitted: -1 } });
  const reponseExists1 = !loading1 && !!allreponses1;

  //Recommandations
  const Handle2 = Meteor.subscribe('Recommandations', MyId);
  const loading2 = !Handle2.ready();
  const allreponses2 = Recommandations.find({to_id:MyId, read:false}, { sort: {date: -1 } });
  const reponseExists2 = !loading2 && !!allreponses2;

  //Dons
  const Handle3 = Meteor.subscribe('Dons', MyId);
  const loading3 = !Handle3.ready();
  const allreponses3 = Dons.find({to_id:MyId, read:false}, { sort: {date: -1 } });
  const reponseExists3 = !loading3 && !!allreponses3;

  return {
  	name:name,
    allChat: reponseExists ? allreponses.fetch() : [],
    ChatCount: reponseExists ? allreponses.count() : '',
    allreponses: reponseExists1 ? allreponses1.fetch() : [],
    reponsesCount: reponseExists1 ? allreponses1.count() : '',
    allrecommandations: reponseExists2 ? allreponses2.fetch() : [],
    recommandationsCount: reponseExists2 ? allreponses2.count() : '',
    allDons: reponseExists3 ? allreponses3.fetch() : [],
    DonsCount: reponseExists3 ? allreponses3.count() : '',
  };
})(ButtonPusher);