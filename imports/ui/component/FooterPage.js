import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import Img from 'react-image'
import { Dropdown, Menu, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';

import { Conseilleres } from '../../api/Conseilleres.js';

import Bell from 'react-icons/lib/fa/bell';
import User from 'react-icons/lib/fa/user';
import Messsage from 'react-icons/lib/fa/comments';
import Home from 'react-icons/lib/fa/home';

import Conseillers from 'react-icons/lib/fa/user-plus';
import ChatItemNotif from './ChatItemNotif.js';
import ReponsesNotif from './ReponsesNotif.js';
import RecommandationsNotif from './RecommandationsNotif.js';
import DonsNotif from './DonsNotif.js';

//Collections
import { Chat } from '../../api/Chat.js';
import { Comments } from '../../api/Reponses.js';
import { Recommandations } from '../../api/Recommandations.js';
import { Dons } from '../../api/Stripe.js';


class FooterPage extends Component {
 	state = {
 			
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

	
	return (
		<div className="FooterPage">
			
				<div className="DevenirConseiller">
					<Link to="/Home" >
						  <Home />
					</Link>
				</div>

				<div className="DevenirConseiller">
					<Link to={'/Profil/' + Meteor.userId() }>
						  <User />
					</Link>
				</div>

				<div className="DevenirConseiller">
					<Link to={'/Chat/' + Meteor.userId() }>
						   <Messsage />
					</Link>
				</div>

				<div className="DevenirConseiller">
					<Link to="/Notifications" >
						  <Bell />
					    <div className={totalNotif>0 ? "visible" : "none"}>
						     <div className="ContainerNotifCircle">
								<div className="NotifCircle">
									{stringTotalNotif}
								</div>
							</div>
						</div>
					</Link>
				</div>
		</div>
	);
  }
}

export default FooterPage =  withTracker(() => {
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
  const userId = Meteor.userId()
  const Handle5 = Meteor.subscribe('IsConseiller', userId);
  const loading5 = !Handle5.ready();
  const allreponses5 = Conseilleres.find({'user_id':userId});
  const reponseExists5 = !loading5 && !!allreponses5;

  return {
    user: reponseExists5 ? allreponses5.count() : [],
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
})(FooterPage);

