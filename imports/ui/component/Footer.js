import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import { Button, Checkbox, Form, Select, Dropdown, Menu, Label, Container } from 'semantic-ui-react'
import { Meteor } from 'meteor/meteor';
import BodyClassName from 'react-body-classname';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';


import Bell from 'react-icons/lib/fa/bell';

import ChatItemNotif from './ChatItemNotif.js';
import ReponsesNotif from './ReponsesNotif.js';
import RecommandationsNotif from './RecommandationsNotif.js';
import DonsNotif from './DonsNotif.js';

//Collections
import { Chat } from '../../api/Chat.js';
import { Comments } from '../../api/Reponses.js';
import { Recommandations } from '../../api/Recommandations.js';
import { Dons } from '../../api/Stripe.js';


class Footer extends Component {  

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


	return (
		<div className="footer">
			<Edit />

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
})(Footer);