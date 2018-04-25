import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Segment, Button, Checkbox, Form, Header, Divider, TextArea, Message,  Dimmer, Loader } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import Vote from 'react-icons/lib/fa/thumbs-up'; 
import ReactDOM from 'react-dom';
import { Route, Redirect } from 'react-router';
import {injectStripe} from 'react-stripe-elements';
import CardSection from './CardSection';


class CheckoutForm extends React.Component {
	
	constructor(props) {
 			super(props);
 			this.handleSubmit = this.handleSubmit.bind(this)
 			this.state = {
		        errorMontant: false,
		        errorText:false,
		        button1:"blue",
		        button2:"blue",
		        button3:"blue",
		        button4:"blue",
		        button5:"blue",
		        button6:"blue",
		        button7:"blue",
		        button8:"blue",
		        button9:"blue",
		        button10:"blue",
		        montant: 0,
		        ValidationFom:false,
		        errorToken:false,
		        loader:false,
	        }
		}


	montant1(){
		this.setState({
			button1: "red1",
			button2:"blue",
	        button3:"blue",
	        button4:"blue",
	        button5:"blue",
	        button6:"blue",
	        button7:"blue",
	        button8:"blue",
	        button9:"blue",
	        button10:"blue",
	        montant: 10,
		}) 
	}

	montant2(){
		this.setState({
			button1: "blue",
			button2:"red1",
	        button3:"blue",
	        button4:"blue",
	        button5:"blue",
	        button6:"blue",
	        button7:"blue",
	        button8:"blue",
	        button9:"blue",
	        button10:"blue",
	        montant: 20,
		}) 
	}

	montant3(){
		this.setState({
			button1: "blue",
			button2:"blue",
	        button3:"red1",
	        button4:"blue",
	        button5:"blue",
	        button6:"blue",
	        button7:"blue",
	        button8:"blue",
	        button9:"blue",
	        button10:"blue",
	        montant: 30,
		}) 
	}

	montant4(){
		this.setState({
			button1: "blue",
			button2:"blue",
	        button3:"blue",
	        button4:"red1",
	        button5:"blue",
	        button6:"blue",
	        button7:"blue",
	        button8:"blue",
	        button9:"blue",
	        button10:"blue",
	        montant: 40,
		}) 
	}

	montant5(){
		this.setState({
			button1: "blue",
			button2:"blue",
	        button3:"blue",
	        button4:"blue",
	        button5:"red1",
	        button6:"blue",
	        button7:"blue",
	        button8:"blue",
	        button9:"blue",
	        button10:"blue",
	        montant: 50,
		}) 
	}

	montant6(){
		this.setState({
			button1: "blue",
			button2:"blue",
	        button3:"blue",
	        button4:"blue",
	        button5:"blue",
	        button6:"red1",
	        button7:"blue",
	        button8:"blue",
	        button9:"blue",
	        button10:"blue",
	        montant: 60,
		}) 
	}

	montant7(){
		this.setState({
			button1: "blue",
			button2:"blue",
	        button3:"blue",
	        button4:"blue",
	        button5:"blue",
	        button6:"blue",
	        button7:"red1",
	        button8:"blue",
	        button9:"blue",
	        button10:"blue",
	        montant: 70,
		}) 
	}

	montant8(){
		this.setState({
			button1: "blue",
			button2:"blue",
	        button3:"blue",
	        button4:"blue",
	        button5:"blue",
	        button6:"blue",
	        button7:"blue",
	        button8:"red1",
	        button9:"blue",
	        button10:"blue",
	        montant: 80,
		}) 
	}

	montant9(){
		this.setState({
			button1: "blue",
			button2:"blue",
	        button3:"blue",
	        button4:"blue",
	        button5:"blue",
	        button6:"blue",
	        button7:"blue",
	        button8:"blue",
	        button9:"red1",
	        button10:"blue",
	        montant: 90,
		}) 
	}

	montant10(){
		this.setState({
			button1: "blue",
			button2:"blue",
	        button3:"blue",
	        button4:"blue",
	        button5:"blue",
	        button6:"blue",
	        button7:"blue",
	        button8:"blue",
	        button9:"blue",
	        button10:"red1",
	        montant: 100,
		}) 
	}

	handleSubmit = (ev) => {
    ev.preventDefault();
    this.setState({errorText: false})
    this.setState({errorMontant: false})
    this.setState({errorToken: false})
    this.setState({loader: true})
    

    const message = ReactDOM.findDOMNode(this.refs.message).value.trim(); 
    let montant = this.state.montant ;
    const montantNet = montant * 0.8;
    const to_id = this.props.id;
    const to_name = this.props.username;
    const to_gender=this.props.gender;
    const user = Meteor.user();
    const from_name = user.username;
	const isOnline = this.props.isOnline;
	const mail = this.props.mail;

    if(!message){
    	this.setState({errorText: true});
    	this.setState({loader: false})
    }
    else if(montant == 0){
    	this.setState({errorMontant: true});
    	this.setState({loader: false})
	}
    else{
    	this.props.stripe.createToken({type: 'card'}).then(({token}) => {
	     if(!token){this.setState({errorToken: true});
	 		/*this.setState({loader: false})*/}else{
	     	
	      Meteor.call('Paiement',
			  	token,
			    message,
			    montant,
			    to_id,
			    to_name,
			    to_gender,
			  	  (err) => {
	            	if(err){
	           		 } else {
	              	{              		
				        this.setState({
					      ValidationFom: true,
					    })
					  
		              	}     
	            	}
	          	})

		      	if(!isOnline){
			          Meteor.call(
			          'NouveauDons',
			          mail,
			          'Kurbys <kurbys@mail.kurbys.com>',
			          'Nouveau don de ',
			          from_name,
			          message,
			          montantNet, 
			          )

			          Meteor.call(
			          'NotifDons',
			          	message,
					    to_id,
					    to_name,
			          	montantNet, 
			          )
			        }  
	  		}
	    });
	}
  }

  render() {

  		if (this.state.ValidationFom){
      		return <Redirect to={'/ValidationDon/'}/>;
    		}
		return (
			<div className="ListeMessages">
			  		<Form error onSubmit={this.handleSubmit}>
                        <Form.Field>
                        <div className="textDons">Pour remercier {this.props.username} de son aide,
                        tu peux lui faire un petit don et lui laisser un message de remerciement.
                         </div>
                    </Form.Field>

                  	<Form.Field>
                        <div className="textDons">
                         	<b>Message :</b>
                         </div>
                        <TextArea ref="message" autoHeight  rows={8} />
                  	</Form.Field>

                    <Message
                            hidden={!this.state.errorText}
                            error={this.state.errorText}
                            header='Le message est vide'
                    />

                     <div className="textDons">
                         	<b>Montant :</b>
                    </div>

                   	<div className={"buttonMontant" + " " + this.state.button1}
                   		onClick={this.montant1.bind(this)}
                   	>
                        10€
                    </div>

                    <div className={"buttonMontant" + " " + this.state.button2}
                     	onClick={this.montant2.bind(this)}
                        color={this.state.button2}
                        size='tiny'>
                        20€
                    </div>

                    <div className={"buttonMontant" + " " + this.state.button3}
                    	onClick={this.montant3.bind(this)}
                        color={this.state.button3}
                        size='tiny'>
                        30€
                    </div>

                    <div className={"buttonMontant" + " " + this.state.button4}
                    	onClick={this.montant4.bind(this)}
                        color={this.state.button4}
                        size='tiny'>
                        40€
                    </div>

                    <div className={"buttonMontant" + " " + this.state.button5}
                    	onClick={this.montant5.bind(this)}
                        color={this.state.button5}
                        size='tiny'>
                        50€
                    </div>

                    <div className={"buttonMontant" + " " + this.state.button6}
                    	onClick={this.montant6.bind(this)}
                        color={this.state.button6}
                        size='tiny'>
                        60€
                    </div>

                    <div className={"buttonMontant" + " " + this.state.button7}
                    	onClick={this.montant7.bind(this)}
                        color={this.state.button7}
                        size='tiny'>
                        70€
                    </div>

                    <div className={"buttonMontant" + " " + this.state.button8}
                    	onClick={this.montant8.bind(this)}
                        color={this.state.button8}
                        size='tiny'>
                        80€
                    </div>

                    <div className={"buttonMontant" + " " + this.state.button9}
                    	onClick={this.montant9.bind(this)}
                        color={this.state.button9}
                        size='tiny'>
                        90€
                    </div>

                    <div className={"buttonMontant" + " " + this.state.button10}
                    	onClick={this.montant10.bind(this)}
                        color={this.state.button10}
                        size='tiny'>
                        100€
                    </div>

                    <Message
                            hidden={!this.state.errorMontant}
                            error={this.state.errorMontant}
                            header='Choissisez un montant'
                    />

                    <Message
                            hidden={!this.state.errorToken}
                            error={this.state.errorToken}
                            header='Erreur carte bancaire'
                    />

                    <div></div>

			       	<CardSection />

			        <Button
                        color="green"
                    >
                        Valider
                    </Button>
			      	</Form>

			      	
			</div>

		);
  	}
}

export default injectStripe(CheckoutForm);
