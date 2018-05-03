import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Dropdown, Menu, Icon, Header, List, Button, Checkbox, Form, Select, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { Route, Redirect } from 'react-router';

import FaUser from 'react-icons/lib/fa/user';
import FaComments from 'react-icons/lib/fa/comments';
import FaStar from 'react-icons/lib/fa/star';
import FaEnvelope from 'react-icons/lib/fa/envelope-o';
import FaEur from 'react-icons/lib/fa/eur';
import FaBook from 'react-icons/lib/fa/book';
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

export default class ContentMenuRight extends Component {

  constructor(props) {
    super(props);
 
    this.state = {
      body: '',
      logout:false,
      username:'d',
      chat:'',
      activeItem: 'account'
    };
  }

    logout(){
  	 this.setState({
      logout: true,
    });
  	Meteor.logout()
  }

  	handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
  	render() {
  		const { activeItem } = this.state
		const logout = this.state.logout;
  		if (logout) {
      	return <Redirect to="/" />;
    	}
		return (
			<div className="ListeSideBar">
				<List relaxed>
				    
				    <Link to={'/Favoris/' }>
					    <List.Item className="ListItem">
						    <List.Header>
                     		<p className="colorIconBlack"><FaStar /></p>
    				        <p className="menuIcon"> Favoris</p>
						    </List.Header>
					    </List.Item>
					</Link>

				    <Divider />

				      <Link to={'/MessagesPostes/' }>
					    <List.Item className="ListItem">
					    	<List.Content>
                   			 <p className="colorIconBlack"><FaEnvelope /></p>
    				         <p className="menuIcon"> Messages postés</p>
					      </List.Content>
					    </List.Item>
				    </Link> 

  					 <Divider />

  					 <Link to={'/ListeDons/' + Meteor.userId() }>
					    <List.Item className="ListItem">
					    	<List.Content>
                    		<p className="colorIconBlack"><FaEur /> </p>
    				        <p className="menuIcon"> Dons</p>
					      </List.Content>
					    </List.Item>
				    </Link> 
				    
  					 <Divider />

  					  <Link to={'/Livre/'}>  
					    <List.Item className="ListItem">
					    	<List.Content>
					        	<p className="colorIconBlack"><Book /></p>
    			         		<p className="menuIcon">Livre</p>
					      </List.Content>
					    </List.Item>
				    </Link> 
				    
  					 <Divider />
  					 <Divider />

				     <Link to={'/AmeliorerSite/'}> 
					    <List.Item className="ListItem">
					    	<List.Content>
					        	<p className="colorIconVert"><ThumbsUp /></p>
    				        	<p className="menuIcon"> Améliorer le site </p>
					      </List.Content>
					    </List.Item>
				    </Link> 

				    <Divider />

				    <Link to={'/SignalerBug/'}> 
					    <List.Item className="ListItem">
					    	<List.Content>
					        	<p className="colorIcon"><Warning /></p>
    				       		<p className="menuIcon"> Signaler un bug </p>
					      </List.Content>
					    </List.Item>
				    </Link>

				      <Divider />

				     
				    <Link to={'/ContactConnecte/'}>
					    <List.Item className="ListItem">
					    	<List.Content>
					        	<p className="colorIconBlack"><Envelope /></p>
    				        	<p className="menuIcon"> Contact</p>
					      </List.Content>
					    </List.Item>
				    </Link>

				      <Divider />
				    
				    <Link to={'/NumerosUtiles/'}> 
					    <List.Item className="ListItem">
					    	<List.Content>
					        <p className="colorIconVert"><Phone /></p>
    				        <p className="menuIcon"> Numéros utiles</p>
					      </List.Content>
					    </List.Item>
				    </Link>

				      <Divider />
				      <Divider />

				    <Link to={'/SupprimerCompte/'}> 
					    <List.Item className="ListItem">
					    	<List.Content>
					        	<p className="colorIcon"><Trash /></p>
    				        	<p className="menuIcon"> Supprimer mon compte</p>
					      </List.Content>
					    </List.Item>
				    </Link>

				      <Divider />
				      <Divider />
				   
				   
					    <List.Item className="ListItem" onClick={this.logout.bind(this)}>
					    	<List.Content>
					        	<p className="colorIconBlack"><SignOut /></p>
    			        		<p className="menuIcon"> Se déconnecter</p>
					      </List.Content>
					    </List.Item>
				   
				      <Divider />

				</List>
			 </div>

		);
  	}
}
