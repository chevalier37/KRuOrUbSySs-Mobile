import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Button, Checkbox, Form,  Message, Segment, Header} from 'semantic-ui-react'
import { check } from 'meteor/check';
import { Route, Redirect } from 'react-router';
 
//Component
import Header1 from '../component/Header.js';
import Footer from '../component/Footer.js';

import FaArrow from 'react-icons/lib/fa/arrow-circle-left';

class forgotPassword extends Component {

    constructor(props) {
    super(props);
    this.state = {
      errorLogin:false,
      pseudo:false,
      mail:false,
      password:false,
      connection:false,
      errorPassword:false,     
    };   
  }

  Submit(event) {
      event.preventDefault();

      this.setState({errorLogin: false, })
      this.setState({pseudo: false, })
      this.setState({mail: false, })

      const pseudo = ReactDOM.findDOMNode(this.refs.pseudo).value.trim();
      const email = ReactDOM.findDOMNode(this.refs.email).value.trim();
      //const password1 = ReactDOM.findDOMNode(this.refs.password1).value.trim();
      const password = ReactDOM.findDOMNode(this.refs.password2).value.trim();

      //On verifie que le pseudo n'est pas vide
      {!pseudo ?
       this.setState({pseudo: true,}) :
       this.setState({pseudo: false,
      })}

      //On verifie que le mail n'est pas vide
      {!email ?
       this.setState({mail: true,}) :
       this.setState({mail: false,
      })}

       //On verifie que les mots de passe correspondent
      /*{password1 !== password ?
       this.setState({errorLogin: true,}) :
       ''
      }*/

       //Les password ne doivent pas être vide
       {password == '' ?
       this.setState({errorPassword: true,}) :
       ''
      }

      /*check(pseudo, String);
      check(email, String);
      check(password, String);*/

     //on vérifie que le pseudo et le mail existe
      Meteor.apply('UserExiste', [{
          pseudo:pseudo,
          email:email,
          }], {
          onResultReceived: (error, response) => {
            if (error) console.warn(error.reason);
            {response ?
             this.setState({errorLogin: false, }) :
             this.setState({errorLogin: true, })}
          },
      });

      {
        this.state.errorLogin==false
        ?
        Meteor.apply('ResetPassword', [{
        pseudo:pseudo,
        password:password,
        }], {
        onResultReceived: (error, response) => {
          if (error) console.warn(error.reason);
          {response ?
          this.setState({errorLogin: false,})
           :
           this.setState({errorLogin: true,})}

          },
        })
        :
        ''
      }
        
      const errorLogin = this.state.errorLogin;
      const errorPassword = this.state.errorPassword;

      if (errorLogin == false && errorPassword == false) {
          Meteor.loginWithPassword(pseudo, password, (err) => {
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
  }

  render() {

    const connection = this.state.connection;
  
    if (connection) {
      return <Redirect to="/home" />;
    }

    return (
      <div className="container">
        <header>
          <div className="containerSupHeader">
            <div className="containerHeader">
              <Header1 />
            </div>
          </div>
        </header>

        <div className="containerSupIMG">
          <div className="containerIMG">
              <div className="ResetPassword">
                <Segment>
                <Header>
                Mot de passe oublié
                </Header>
                Créer un nouveau mot de passe <p></p>

                    <Form error onSubmit={this.Submit.bind(this)}>

                        <Message
                          hidden={!this.state.errorLogin}
                          error={this.state.errorLogin}
                          header='Erreur'
                          content='Erreur identifiant'
                        />
                        <Form.Field required error={this.state.pseudo}>
                          <input
                           ref="pseudo"
                           placeholder='Pseudo'
                           />
                          
                        <Message
                          hidden={!this.state.pseudo}
                          error={this.state.pseudo}
                          header='Erreur pseudo'
                          content='Le pseudo est obligatoire'
                        />
                        </Form.Field>


                        <Form.Field required error={this.state.mail}>
                          <input
                           ref="email"
                           type='email'
                           placeholder='Email'
                           />
                         <Message
                          error={this.state.mail}
                          hidden={!this.state.mail}
                          header='Erreur email'
                          content="L'adresse mail est obligatoire"
                         />
                        </Form.Field>

                        
                        <Form.Field required error={this.state.password}>
                          <input
                           ref="password2"
                           type='password'
                           placeholder='Mot de passe'
                          />
                         <Message
                          error={this.state.password}
                          hidden={!this.state.password}
                          header='Erreur mot de passe'
                          content="Les mots de passe ne correspondent pas"
                        />
                        </Form.Field>

                        <Button type='submit' color='green'>Valider</Button>

                    </Form>
                  </Segment>
                </div>
            </div> 
        </div>
                
        <div className="containerFooter">    
            <Footer />
        </div>
                  
      </div>
    );
  }
}

export default withTracker(() => {
  return { 
  };
})(forgotPassword);
