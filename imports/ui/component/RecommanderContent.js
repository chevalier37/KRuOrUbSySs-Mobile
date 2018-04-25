import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Segment, Button, Form, Header, TextArea, Message, Divider, Rating} from 'semantic-ui-react'
import { Link, Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';

class RecommanderContent extends Component {

	  state = {
	      username:'',
	      gender:'',
	      errorCommentaire: false,
	      errorRating: false,
	      rating:0,
	      Validation:false,
	  	  
	   }

	   handleRate = (e, { rating, maxRating }) => this.setState({ rating, maxRating })

	   componentWillMount(){
	   	let id = this.props.id;
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
			    });
		}

	  Submit(event){
        event.preventDefault();
        this.setState({ errorCommentaire: false})
        this.setState({ errorRating: false})
        let id = this.props.id;
        const presentation = ReactDOM.findDOMNode(this.refs.presentation).value.trim();
        let note = this.state.rating;
        const user = Meteor.user();
	  	const from_name = user.username;
	  	const mail = this.props.mail;
	  	const titre = this.props.titreMessage;

        {presentation == ''
         ?
        this.setState({ errorCommentaire: true})
         : 

         this.state.rating == 0
         ?
        this.setState({ errorRating: true})

		:
         	this.state.errorRating==false &&
         	this.state.errorCommentaire==false
         	?
         	Meteor.call('Recommander',
         		id,
			  	presentation,
			  	note,
			  	  (err) => {
	            	if(err){console.log(err)
	           		 } else {
	              	{
				        this.setState({
					      Validation: true
					    })
					  
		              	}     
	            	}
	          	})
         	: ''

         }

         {
          		!this.props.isOnline &&
          		this.state.errorRating==false &&
         		this.state.errorCommentaire==false  ?

		          Meteor.call(
		          'NouvelleRecommandation',
		          mail,
		          'Kurbys <kurbys@mail.kurbys.com>',
		          'Nouvelle recommandation de ',
		          from_name,
		          presentation,
		          )  

		          : ''

          	}

         {
          		!this.props.isOnline &&
          		this.state.errorRating==false &&
         		this.state.errorCommentaire==false  ?

		          Meteor.call(
		          'NotifRecommandation',
		          	id,
			  		presentation,
			  		note,
		          )  

		          : ''

        }
   
		}

  	render() {
		const { activeIndex } = this.state;
		const myId = Meteor.userId();
		    if (!Meteor.loggingIn() && !Meteor.userId()){
      		return <Redirect to="/" />;
    		}
    		if (this.state.Validation){
      		return <Redirect to={'/ValiderRecommandation/'}/>;
    		}

		return (
			<div className="MainContent">
				<Segment className="MainContent">
					
						<Header>
						Recommander <div className={this.state.gender}>{this.state.username}</div>
						</Header>
					
					<Divider />

					<p className="consigne">Les conseils de {this.state.username} ont-ils été utiles ? Dans quel(s) domaine(s) recommanderais-tu {this.state.username} ?</p>
					<p className="consigne">
					Donne une note et explique pourquoi les conseils de {this.state.username} t'on aidés.
					</p>
					<div className="consigne2">
					<strong> Note : </strong>
						<Rating maxRating={4} icon='heart' onRate={this.handleRate} />
					</div>

					<Form error onSubmit={this.Submit.bind(this)}>
					    <Form.Field >
					      <label ><p className="consigne1">Commentaire</p></label>
					      <TextArea autoHeight ref="presentation" rows={5}  />
					       <Message
						            hidden={!this.state.errorCommentaire}
						            error={this.state.errorCommentaire}
						            header='Le commentaire est obligatoire'
						    />
						    <Message
						            hidden={!this.state.errorRating}
						            error={this.state.errorRating}
						            header='La note est obligatoire'
						    />
					    </Form.Field>
					    <Button type='submit' color="green">Valider</Button>
					</Form>
					 <p></p>
				</Segment>
			</div>

		);
  	}
}

export default RecommanderContent =  withTracker(({id}) => {
	const Handle = Meteor.subscribe('user', id);
  	const loading = !Handle.ready();
  	const user = Meteor.users.findOne({'_id':id});
  	const reponseExists = !loading && !!user;

  return {
  	isOnline:reponseExists ? user.status.online : '',
 	mail:reponseExists ? user.profile.mail : '',	

  };
})(RecommanderContent);