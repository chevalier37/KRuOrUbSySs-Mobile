import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import Img from 'react-image'
import { Dropdown, Menu, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';

import { Conseilleres } from '../../api/Conseilleres.js';

import Conseillers from 'react-icons/lib/fa/user-plus';

class HeaderPage extends Component {
 	state = {
 			
	   }
	
  	render() {
	
	return (
		<div className="">
			
				<div className="DevenirConseiller">
					<p>
					<Link to="/DevenirConseiller" >
						<Conseillers />
					</Link>
					</p>
				</div>
			</div>
	);
  }
}

export default HeaderPage =  withTracker(() => {
  const userId = Meteor.userId()
  const Handle = Meteor.subscribe('IsConseiller', userId);
  const loading = !Handle.ready();
  const allreponses = Conseilleres.find({'user_id':userId});
  const reponseExists = !loading && !!allreponses;
  return {
    user: reponseExists ? allreponses.count() : [],
  };
})(HeaderPage);
