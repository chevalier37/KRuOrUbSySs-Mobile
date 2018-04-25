import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Segment, Button, Checkbox, Form, Header, Divider, Label, Comment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { Comments } from '../../api/Reponses.js';
import { withTracker } from 'meteor/react-meteor-data';

class ListeMessages extends Component {
	
	constructor(props) {
		    super(props);
		 
		    this.state = {
		      	sexe: '',
				nbrSeconde : 0,
			 	nbrMinutes : 0,
				nbrHeures : 0,
				nbrJours : 0,
				nbrMois : 0,
				premierAmour:" ",
			    trahison:'',
			    Friendzone:'',
			    amourdistance:'',
			    separation:'',
			    timidite:'',
			    depression:'',
			    suicide:'',
			    deces:'',
			    mutilation:'',
			    premierfois:'',
			    Contraception:'',
			    mst:'',
			    viol:'',
			    avortement:'',
			    orientationSex:'',
			    Anorexie:'',
			    obesite:'',
			    drogue:'',
			    alcool:'',
			    complexe:'',
			    hopital:'',
			    handicap:'',
			    Accident:'',
			    echecEcole:'',
			    Harcelement:'',
			    Discrimination:'',
			    Violence:'',
			    autre:'',
			    disabled:false,
		    };
		}

	signaler() {
	    Meteor.call('signaler', this.props.message._id);
       	this.setState({disabled: true});
	 }

	componentWillMount(){
		const sexe = this.props.message.gender;
	    
	    {sexe == 'fille' ? 
	         this.setState({sexe: 'pink'}):
		  	 this.setState({sexe: 'blue'})
		}

		//on calcul la date du post
		const today = new Date();
		const diffToday = Date.parse(today);
		const post_date = this.props.date;
		const nbrSeconde = ((diffToday-post_date)/1000) + 2;
		this.setState({nbrSeconde: nbrSeconde})

		const nbrMinutes = Math.round(nbrSeconde/60);
		this.setState({nbrMinutes: nbrMinutes})
		
		const nbrHeures = Math.round(nbrMinutes/60);
		this.setState({nbrHeures: nbrHeures})

		const nbrJours = Math.round(nbrHeures/24);
		this.setState({nbrJours: nbrJours})

		const nbrMois = Math.round(nbrJours/30);
		this.setState({nbrMois: nbrMois})

		//On affiche les catégories
		const premierAmour = this.props.message.premierAmour;
		{ premierAmour ? 
		  this.setState({premierAmour: "Premier amour  "}) : ''
		}

		const trahison = this.props.message.trahison;
		{ trahison ? 
		  this.setState({trahison: '  Trahison '}) : ''
		}

		const Friendzone = this.props.message.Friendzone;
		{ Friendzone ? 
		  this.setState({Friendzone: 'Friendzone '}) : ''
		}

		const amourdistance = this.props.message.amourdistance;
		{ amourdistance ? 
		  this.setState({amourdistance: 'Amour à distance '}) : ''
		}

		const separation = this.props.message.separation;
		{ separation ? 
		  this.setState({separation: 'Séparation '}) : ''
		}

		const timidite = this.props.message.timidite;
		{ timidite ? 
		  this.setState({timidite: 'Timidité '}) : ''
		}

		const depression = this.props.message.depression;
		{ depression ? 
		  this.setState({depression: 'Dépression '}) : ''
		}

		const suicide = this.props.message.suicide;
		{ suicide ? 
		  this.setState({suicide: 'Suicide '}) : ''
		}

		const deces = this.props.message.deces;
		{ deces ? 
		  this.setState({deces: 'Décès '}) : ''
		}

		const mutilation = this.props.message.mutilation;
		{ mutilation ? 
		  this.setState({mutilation: 'Mutilation '}) : ''
		}

		const premierfois = this.props.message.premierfois;
		{ premierfois ? 
		  this.setState({premierfois: 'Premiere fois '}) : ''
		}

		const Contraception = this.props.message.Contraception;
		{ Contraception ? 
		  this.setState({Contraception: 'Contraception '}) : ''
		}

		const mst = this.props.message.mst;
		{ mst ? 
		  this.setState({mst: 'Maladie, MST '}) : ''
		}

		const viol = this.props.message.viol;
		{ viol ? 
		  this.setState({viol: 'Viol '}) : ''
		}

		const avortement = this.props.message.avortement;
		{ avortement ? 
		  this.setState({avortement: 'Avortement '}) : ''
		}

		const orientationSex = this.props.message.orientationSex;
		{ orientationSex ? 
		  this.setState({orientationSex: 'Orientation sexuelle '}) : ''
		}

		const Anorexie = this.props.message.Anorexie;
		{ Anorexie ? 
		  this.setState({Anorexie: 'Anorexie '}) : ''
		}

		const obesite = this.props.message.obesite;
		{ obesite ? 
		  this.setState({obesite: 'Obésite '}) : ''
		}

		const drogue = this.props.message.drogue;
		{ drogue ? 
		  this.setState({drogue: 'Drogue '}) : ''
		}

		const alcool = this.props.message.alcool;
		{ alcool ? 
		  this.setState({alcool: 'Alcool '}) : ''
		}

		const complexe = this.props.message.complexe;
		{ complexe ? 
		  this.setState({complexe: 'Complexe '}) : ''
		}

		const hopital = this.props.message.hopital;
		{ hopital ? 
		  this.setState({hopital: 'Hospitalisation '}) : ''
		}

		const handicap = this.props.message.handicap;
		{ handicap ? 
		  this.setState({handicap: 'Handicap '}) : ''
		}

		const Accident = this.props.message.Accident;
		{ Accident ? 
		  this.setState({Accident: 'Accident '}) : ''
		}

		const echecEcole = this.props.message.echecEcole;
		{ echecEcole ? 
		  this.setState({echecEcole: 'Echec scolaire '}) : ''
		}

		const Harcelement = this.props.message.Harcelement;
		{ Harcelement ? 
		  this.setState({Harcelement: 'Harcèlement '}) : ''
		}

		const Discrimination = this.props.message.Discrimination;
		{ Discrimination ? 
		  this.setState({Discrimination: 'Discrimination '}) : ''
		}

		const Violence = this.props.message.Violence;
		{ Violence ? 
		  this.setState({Violence: 'Violence '}) : ''
		}

		const autre = this.props.message.autre;
		{ autre ? 
		  this.setState({autre: 'Autre '}) : ''
		}

		{
		Meteor.userId() && _.include(this.props.message.upvoters, Meteor.userId()) ?
       	this.setState({disabled: true}) :
       	this.setState({disabled: false})
   		}

		
	}

	reponse(){
		const reponse = this.props.nbrreponse;
	    if(reponse < 2){
	    	return 'réponse'
	    }else {
	    	return 'réponses'
	    }
	}

  render() {
    
	const colorSexe = this.state.sexe;
	let now = new Date();
	let diff = now - this.props.message.naissance;
	let age = Math.round(diff / 31536000000);

		return (
			<div className="ListeMessages">
				<div className={colorSexe=="pink" ?
	        				  "filleMessageBackground" : "garconMessageBackground"
	        				}>
			  			<div className={colorSexe=="pink" ?
	        				  "titreMessageFille" : "titreMessageGarcon"
	        				}>
			  			{this.props.message.post_title}
			  			</div>
		  		</div>
	  			<Segment color={colorSexe=="pink" ?
	        				  "pink" : "blue" }>
	  			
		  			<p className={"ContentQuestion" + " " + "display-linebreak"}>
		  				{this.props.message.post_content}
		  			</p>
		  			
		  			<Divider />
		  	
		  			<Comment>
	      				<Comment.Content>
	        				<div className="nameAuthor">
	        					<span className={colorSexe=="pink" ?
	        				  			"filleMessage" : "garconMessage"
	        					}>
			        				 <Link to={'/profil/' + this.props.message.post_author_id}>
			        				{this.props.message.post_author}
			        				</Link>

	        					</span>
	        				</div>
	        				<div className="ageAuthor">
	        				{age} ans
	        				</div>
	         				<div className="dateMessage">
		         			{	this.state.nbrSeconde<60 ? "Il y a 30 secondes": 
		         				this.state.nbrMinutes<2 ? "Il y a " + this.state.nbrMinutes +" minute": 
		         				this.state.nbrMinutes<60 ? "Il y a " + this.state.nbrMinutes +" minutes":
		         				this.state.nbrHeures<2 ? "Il y a " + this.state.nbrHeures  +" heure": 
								this.state.nbrHeures<24 ? "Il y a " + this.state.nbrHeures  +" heures": 
								this.state.nbrJours<2 ? "Il y a " + this.state.nbrJours  +" jour":
								this.state.nbrJours<30 ? "Il y a " + this.state.nbrJours  +" jours":  
								"Il y a " + this.state.nbrMois +" mois" 
	         				}
	         				</div>
	         				<div className="dateMessage">{this.props.nbrreponse} {this.reponse()} </div>
	          				<div className="repondreMessage">
	          					<Link to={'/singleMessage/' + this.props.message._id} >
	          						<Button  size="tiny" color="green">
	          							Aider
	          						</Button>
	          					</Link>
	          				</div>
							<div className="Signaler" >
								<Button basic size="tiny" disabled={this.state.disabled} color='red' onClick={this.signaler.bind(this)}>
									Signaler
								</Button>
							</div>
							<p className="categorie">
							
							{ this.state.premierAmour ? 
							<span className="espace">{this.state.premierAmour} </span>
							 : "" }
							
							{ this.state.trahison ? 
							<span className="espace">{this.state.trahison} </span>
							 : "" } 

							{ this.state.Friendzone ? 
							<span className="espace">{this.state.Friendzone} </span>
							 : "" }

							{ this.state.amourdistance ? 
							<span className="espace">{this.state.amourdistance} </span>
							 : "" }

							{ this.state.separation ? 
							<span className="espace">{this.state.separation} </span>
							 : "" }

							{ this.state.timidite ? 
							<span className="espace">{this.state.timidite} </span>
							 : "" }

							{ this.state.depression ? 
							<span className="espace">{this.state.depression} </span>
							 : "" }

							{ this.state.suicide ? 
							<span className="espace">{this.state.suicide} </span>
							 : "" }

							{ this.state.deces ? 
							<span className="espace">{this.state.deces} </span>
							 : "" }

							{ this.state.mutilation ? 
							<span className="espace">{this.state.mutilation} </span>
							 : "" }

							{ this.state.premierAmour ? 
							<span className="espace">{this.state.premierfois} </span>
							 : "" }

							{ this.state.Contraception ? 
							<span className="espace">{this.state.Contraception} </span>
							 : "" }

							{ this.state.mst ? 
							<span className="espace">{this.state.mst} </span>
							 : "" }

							{ this.state.viol ? 
							<span className="espace">{this.state.viol} </span>
							 : "" }

							{ this.state.premierAmour ? 
							<span className="espace">{this.state.avortement}</span>
							 : "" }

							{ this.state.orientationSex ? 
							<span className="espace">{this.state.orientationSex} </span>
							 : "" }

							{ this.state.Anorexie ? 
							<span className="espace">{this.state.Anorexie} </span>
							 : "" }

							{ this.state.obesite ? 
							<span className="espace">{this.state.obesite} </span>
							 : "" }

							{ this.state.drogue ? 
							<span className="espace">{this.state.drogue} </span>
							 : "" }

							{ this.state.alcool ? 
							<span className="espace">{this.state.alcool} </span>
							 : "" }

							{ this.state.complexe ? 
							<span className="espace">{this.state.complexe} </span>
							 : "" }

							{ this.state.hopital ? 
							<span className="espace">{this.state.hopital} </span>
							 : "" }

							{ this.state.handicap ? 
							<span className="espace">{this.state.handicap}</span>
							 : "" }

							{ this.state.Accident ? 
							<span className="espace">{this.state.Accident}</span>
							 : "" }

							{ this.state.echecEcole ? 
							<span className="espace">{this.state.echecEcole} </span>
							 : "" }

							{ this.state.Harcelement ? 
							<span className="espace">{this.state.Harcelement} </span>
							 : "" }

							{ this.state.Discrimination ? 
							<span className="espace">{this.state.Discrimination} </span>
							 : "" }

							{ this.state.Violence ? 
							<span className="espace">{this.state.Violence} </span>
							 : "" }

							{ this.state.autre ? 
							<span className="espace">{this.state.autre} </span>
 							: "" }				
							</p>
	      				</Comment.Content>
	    			</Comment>
	  			</Segment>
			</div>
		);
  	}
}

export default ListeMessages =  withTracker(({ id }) => {
  const HandleReponse = Meteor.subscribe('reponsesSingleMessage', id);
  return {
   nbrreponse: Comments.find({postId:id}).count()
  };
})(ListeMessages);
