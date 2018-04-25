import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import { Button, Checkbox, Form, Select, Message } from 'semantic-ui-react'
import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { check } from 'meteor/check';
import { Link } from 'react-router-dom';

export default class FormLogin extends Component {

	constructor(props) {
    super(props);
    this.state = {
        connnection: false,
        erreurLogin:false,
    	};
	}

	Submit(event) {
    	event.preventDefault();

	    const username= ReactDOM.findDOMNode(this.refs.username).value.trim();
	    const password = ReactDOM.findDOMNode(this.refs.password).value.trim();

		Meteor.loginWithPassword(username, password, (err) => {
      	if(err){
          this.setState({erreurLogin: true,})
      	} else {
        	{
          Meteor.userId() ? 
       	  this.setState({connection: true,}): ''     
        	}
      	}
    	});
  	}
  
  	render() {

        const connection = this.state.connection;
  		if (connection) {
      	return <Redirect to="/home" />;
    	}

		return (
			<div className="ContainerFormSubcribe">
			    <div className="slogan">
                	Vous ne marcherez jamais seul
            	</div>
            	<div className="loginText">Se connecter</div>		
				 <Form error onSubmit={this.Submit.bind(this)}>
				 	<Form.Field >
			      		<input
				       ref="username"
				       type='text'
				       placeholder='Pseudo'
			     		 />
			     	</Form.Field>
			      	
			      	<Form.Field >
			      		<input
				       ref="password"
				       type='password'
				       placeholder='Mot de passe'
				     	 />
					</Form.Field>

				    <Button type='submit' color='blue'>Connexion</Button>
				</Form>

			 <div className="forgetPassword">
			 	<Link to="/forgotPassword" >Mot de passe oublié</Link>
			 </div>
	 	     	<Message
			    hidden={!this.state.erreurLogin}
			    error={this.state.erreurLogin}
			    header='Connexion'
			    content='Erreur identifiant'
			    className="errorConnexion"
		    	/>
	 		</div>

		);
  	}
}
