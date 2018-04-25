import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Segment, Button, Form, Header, TextArea, Message, Divider, Rating, Input, Label} from 'semantic-ui-react'
import { Link, Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';
import FaPoint from 'react-icons/lib/fa/circle';
import FaHeart from 'react-icons/lib/fa/heart';
import { Conseilleres } from '../../api/Conseilleres.js';
import { Recommandations } from '../../api/Recommandations.js';

class ProfilContent extends Component {

	  state = {
		    username:'',
		    gender:'',
		    errorCommentaire: false,
		    errorRating: false,
		    rating:0,
		    Validation:false,
		    age:'',
		    note:0,
		    lastConnection:'',
		    nbrSeconde : 0,
		 	nbrMinutes : 0,
			nbrHeures : 0,
			nbrJours : 0,
			nbrMois : 0,
			online:'',
			onlinePoint:'none',
			myId: '',
			notMyId:'',
			conseillerExiste:'',
			IsConseiller:false,

			premierAmourReadOnly:'',
			premierAmourInput:'none',
			ValiderPremierAmour:'none',
			ModifierPremierAmour:'',

			trahisonReadOnly:'',
			trahisonInput:'none',
			Validertrahison:'none',
			Modifiertrahison:'',

			friendzoneReadOnly:'',
			friendzoneInput:'none',
			Validerfriendzone:'none',
			Modifierfriendzone:'',

			amourDistanceReadOnly:'',
			amourDistanceInput:'none',
			ValideramourDistance:'none',
			ModifieramourDistance:'',

			separationReadOnly:'',
			separationInput:'none',
			Validerseparation:'none',
			Modifierseparation:'',

			TimiditeReadOnly:'',
			TimiditeInput:'none',
			ValiderTimidite:'none',
			ModifierTimidite:'',

			depressionReadOnly:'',
			depressionInput:'none',
			Validerdepression:'none',
			Modifierdepression:'',

			suicideReadOnly:'',
			suicideInput:'none',
			Validersuicide:'none',
			Modifiersuicide:'',

			decesReadOnly:'',
			decesInput:'none',
			Validerdeces:'none',
			Modifierdeces:'',

			mutilationReadOnly:'',
			mutilationInput:'none',
			Validermutilation:'none',
			Modifiermutilation:'',

			premiereFoisReadOnly:'',
			premiereFoisInput:'none',
			ValiderpremiereFois:'none',
			ModifierpremiereFois:'',

			contracepionReadOnly:'',
			contracepionInput:'none',
			Validercontracepion:'none',
			Modifiercontracepion:'',

			mstReadOnly:'',
			mstInput:'none',
			Validermst:'none',
			Modifiermst:'',

			violReadOnly:'',
			violInput:'none',
			Validerviol:'none',
			Modifierviol:'',

			avortementReadOnly:'',
			avortementInput:'none',
			Valideravortement:'none',
			Modifieravortement:'',

			orientationSexReadOnly:'',
			orientationSexInput:'none',
			ValiderorientationSex:'none',
			ModifierorientationSex:'',

			anorexieReadOnly:'',
			anorexieInput:'none',
			Valideranorexie:'none',
			Modifieranorexie:'',

			obesiteReadOnly:'',
			obesiteInput:'none',
			Validerobesite:'none',
			Modifierobesite:'',

			drogueReadOnly:'',
			drogueInput:'none',
			Validerdrogue:'none',
			Modifierdrogue:'',

			alcoolReadOnly:'',
			alcoolInput:'none',
			Valideralcool:'none',
			Modifieralcool:'',

			complexeReadOnly:'',
			complexeInput:'none',
			Validercomplexe:'none',
			Modifiercomplexe:'',

			hospitalisationReadOnly:'',
			hospitalisationInput:'none',
			Validerhospitalisation:'none',
			Modifierhospitalisation:'',

			handicapReadOnly:'',
			handicapInput:'none',
			Validerhandicap:'none',
			Modifierhandicap:'',

			accidentReadOnly:'',
			accidentInput:'none',
			Valideraccident:'none',
			Modifieraccident:'',

			echecEcoleReadOnly:'',
			echecEcoleInput:'none',
			ValiderechecEcole:'none',
			ModifierechecEcole:'',

			harcelementReadOnly:'',
			harcelementInput:'none',
			Validerharcelement:'none',
			Modifierharcelement:'',

			discriminationReadOnly:'',
			discriminationInput:'none',
			Validerdiscrimination:'none',
			Modifierdiscrimination:'',

			violenceReadOnly:'',
			violenceInput:'none',
			Validerviolence:'none',
			Modifierviolence:'',

			presentationReadOnly:'',
			presentationInput:'none',
			Validerpresentation:'none',
			Modifierpresentation:'',

	  	  
	   }

	   handleRate = (e, { rating, maxRating }) => this.setState({ rating, maxRating })

	   nbrRecommandations(){
			const nbrRecommandations = this.props.Recommandations;
		    if(nbrRecommandations < 2){
		    	return 'Recommandation'
		    }else {
		    	return 'Recommandations'
		    }
		}

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

		              {response ?
		             this.setState({age: response.profile.naissance}) 
		             :
		             ''}
		              
		            },
		    })

		    Meteor.apply('IsConseillerHeader', [{
	          }], {
	          onResultReceived: (error, response) => {
	            if (error) console.warn(error.reason);
	            {response ?  
	             this.setState({conseillerExiste: 'cacher'}) :
	             this.setState({usernameExiste: 'visible'})}
		          },
	      	})

	      	 Meteor.apply('IsConseiller', [{
		    	id,
	          }], {
	          onResultReceived: (error, response) => {
	            if (error) console.warn(error.reason);
	            {response ?  
	             this.setState({IsConseiller:true}) : ''}
		          },
	      	})
		    //on verifie si id == myId
			{
				this.props.id == Meteor.userId() ?
				this.setState({myId: 'visible'}):
				this.setState({myId: 'none'}) 
			}

			{
				this.props.id !== Meteor.userId() ?
				this.setState({notMyId: 'visible'}):
				this.setState({notMyId: 'none'}) 			
			}

		}


		presentation(){
			this.setState({ presentationReadOnly: 'none'})
			this.setState({ presentationInput: 'visibleProfil'})
			this.setState({ Validerpresentation: 'visible'})
			this.setState({ Modifierpresentation: 'none'})

		}

		presentationValider(){
			const text = ReactDOM.findDOMNode(this.refs.presentation).value.trim();
			Meteor.call('DevenirConseiller',
		  	  text,
		  	  (err) => {
            	if(err){
              
           		 } else {
              	{
			        this.setState({ presentationReadOnly: 'visible'})
					this.setState({ presentationInput: 'none'})
					this.setState({ Validerpresentation: 'none'})
					this.setState({ Modifierpresentation: 'visible'})
	              	}     
            	}
          	})
		}


		premierAmour(){
			this.setState({ premierAmourReadOnly: 'none'})
			this.setState({ premierAmourInput: 'visibleProfil'})
			this.setState({ ValiderPremierAmour: 'visible'})
			this.setState({ ModifierPremierAmour: 'none'})

		}

		premierAmourValider(){
			const text = ReactDOM.findDOMNode(this.refs.premierAmour).value.trim();
			const theme = true;
			Meteor.call('premierAmour',
		  	  theme,
		  	  text,
		  	  (err) => {
            	if(err){
              
           		 } else {
              	{
			        this.setState({ premierAmourReadOnly: 'visible'})
					this.setState({ premierAmourInput: 'none'})
					this.setState({ ValiderPremierAmour: 'none'})
					this.setState({ ModifierPremierAmour: 'visible'})
	              	}     
            	}
          	})
		}

		trahison(){
			this.setState({ trahisonReadOnly: 'none'})
			this.setState({ trahisonInput: 'visibleProfil'})
			this.setState({ Validertrahison: 'visible'})
			this.setState({ Modifiertrahison: 'none'})

		}

		trahisonValider(){
			const text = ReactDOM.findDOMNode(this.refs.trahison).value.trim();
			const theme = true;
			Meteor.call('trahison',
		  	  theme,
		  	  text,
		  	  (err) => {
            	if(err){
              
           		 } else {
              	{
			        this.setState({ trahisonReadOnly: 'visible'})
					this.setState({ trahisonInput: 'none'})
					this.setState({ Validertrahison: 'none'})
					this.setState({ Modifiertrahison: 'visible'})
	              	}     
            	}
          	})
		}

		friendzone(){
			this.setState({ friendzoneReadOnly: 'none'})
			this.setState({ friendzoneInput: 'visibleProfil'})
			this.setState({ Validerfriendzone: 'visible'})
			this.setState({ Modifierfriendzone: 'none'})

		}

		friendzoneValider(){
			const text = ReactDOM.findDOMNode(this.refs.friendzone).value.trim();
			const theme = true;
			Meteor.call('Friendzone',
		  	  theme,
		  	  text,
		  	  (err) => {
            	if(err){
              
           		 } else {
              	{
			        this.setState({ friendzoneReadOnly: 'visible'})
					this.setState({ friendzoneInput: 'none'})
					this.setState({ Validerfriendzone: 'none'})
					this.setState({ Modifierfriendzone: 'visible'})
	              	}     
            	}
          	})
		}

		amourDistance(){
			this.setState({ amourDistanceReadOnly: 'none'})
			this.setState({ amourDistanceInput: 'visibleProfil'})
			this.setState({ ValideramourDistance: 'visible'})
			this.setState({ ModifieramourDistance: 'none'})

		}

		amourDistanceValider(){
			const text = ReactDOM.findDOMNode(this.refs.amourDistance).value.trim();
			const theme = true;
			Meteor.call('amourdistance',
		  	  theme,
		  	  text,
		  	  (err) => {
            	if(err){
              
           		 } else {
              	{
			        this.setState({ amourDistanceReadOnly: 'visible'})
					this.setState({ amourDistanceInput: 'none'})
					this.setState({ ValideramourDistance: 'none'})
					this.setState({ ModifieramourDistance: 'visible'})
	              	}     
            	}
          	})
		}

		separation(){
			this.setState({ separationReadOnly: 'none'})
			this.setState({ separationInput: 'visibleProfil'})
			this.setState({ Validerseparation: 'visible'})
			this.setState({ Modifierseparation: 'none'})

		}

		separationValider(){
			const text = ReactDOM.findDOMNode(this.refs.separation).value.trim();
			const theme = true;
			Meteor.call('separation',
		  	  theme,
		  	  text,
		  	  (err) => {
            	if(err){
              
           		 } else {
              	{
			        this.setState({ separationReadOnly: 'visible'})
					this.setState({ separationInput: 'none'})
					this.setState({ Validerseparation: 'none'})
					this.setState({ Modifierseparation: 'visible'})
	              	}     
            	}
          	})
		}

		timidite(){
			this.setState({ TimiditeReadOnly: 'none'})
			this.setState({ TimiditeInput: 'visibleProfil'})
			this.setState({ ValiderTimidite: 'visible'})
			this.setState({ ModifierTimidite: 'none'})

		}

		timiditeValider(){
			const text = ReactDOM.findDOMNode(this.refs.timidite).value.trim();
			const theme = true;
			Meteor.call('timidite',
		  	  theme,
		  	  text,
		  	  (err) => {
            	if(err){
              
           		 } else {
              	{
			        this.setState({ TimiditeReadOnly: 'visible'})
					this.setState({ TimiditeInput: 'none'})
					this.setState({ ValiderTimidite: 'none'})
					this.setState({ ModifierTimidite: 'visible'})
	              	}     
            	}
          	})
		}

		depression(){
			this.setState({ depressionReadOnly: 'none'})
			this.setState({ depressionInput: 'visibleProfil'})
			this.setState({ Validerdepression: 'visible'})
			this.setState({ Modifierdepression: 'none'})

		}

		depressionValider(){
			const text = ReactDOM.findDOMNode(this.refs.depression).value.trim();
			const theme = true;
			Meteor.call('depression',
		  	  theme,
		  	  text,
		  	  (err) => {
            	if(err){
              
           		 } else {
              	{
			        this.setState({ depressionReadOnly: 'visible'})
					this.setState({ depressionInput: 'none'})
					this.setState({ Validerdepression: 'none'})
					this.setState({ Modifierdepression: 'visible'})
	              	}     
            	}
          	})
		}

		suicide(){
			this.setState({ suicideReadOnly: 'none'})
			this.setState({ suicideInput: 'visibleProfil'})
			this.setState({ Validersuicide: 'visible'})
			this.setState({ Modifiersuicide: 'none'})

		}

		suicideValider(){
			const text = ReactDOM.findDOMNode(this.refs.suicide).value.trim();
			const theme = true;
			Meteor.call('suicide',
		  	  theme,
		  	  text,
		  	  (err) => {
            	if(err){
              
           		 } else {
              	{
			        this.setState({ suicideReadOnly: 'visible'})
					this.setState({ suicideInput: 'none'})
					this.setState({ Validersuicide: 'none'})
					this.setState({ Modifiersuicide: 'visible'})
	              	}     
            	}
          	})
		}

		deces(){
			this.setState({ decesReadOnly: 'none'})
			this.setState({ decesInput: 'visibleProfil'})
			this.setState({ Validerdeces: 'visible'})
			this.setState({ Modifierdeces: 'none'})

		}

		decesValider(){
			const text = ReactDOM.findDOMNode(this.refs.deces).value.trim();
			const theme = true;
			Meteor.call('deces',
		  	  theme,
		  	  text,
		  	  (err) => {
            	if(err){
              
           		 } else {
              	{
			        this.setState({ decesReadOnly: 'visible'})
					this.setState({ decesInput: 'none'})
					this.setState({ Validerdeces: 'none'})
					this.setState({ Modifierdeces: 'visible'})
	              	}     
            	}
          	})
		}

		mutilation(){
			this.setState({ mutilationReadOnly: 'none'})
			this.setState({ mutilationInput: 'visibleProfil'})
			this.setState({ Validermutilation: 'visible'})
			this.setState({ Modifiermutilation: 'none'})

		}

		mutilationValider(){
			const text = ReactDOM.findDOMNode(this.refs.mutilation).value.trim();
			const theme = true;
			Meteor.call('mutilation',
		  	  theme,
		  	  text,
		  	  (err) => {
            	if(err){
              
           		 } else {
              	{
			        this.setState({ mutilationReadOnly: 'visible'})
					this.setState({ mutilationInput: 'none'})
					this.setState({ Validermutilation: 'none'})
					this.setState({ Modifiermutilation: 'visible'})
	              	}     
            	}
          	})
		}

		premiereFois(){
			this.setState({ premiereFoisReadOnly: 'none'})
			this.setState({ premiereFoisInput: 'visibleProfil'})
			this.setState({ ValiderpremiereFois: 'visible'})
			this.setState({ ModifierpremiereFois: 'none'})

		}

		premiereFoisValider(){
			const text = ReactDOM.findDOMNode(this.refs.premierfois).value.trim();
			const theme = true;
			Meteor.call('premierfois',
		  	  theme,
		  	  text,
		  	  (err) => {
            	if(err){
              
           		 } else {
              	{
			        this.setState({ premiereFoisReadOnly: 'visible'})
					this.setState({ premiereFoisInput: 'none'})
					this.setState({ ValiderpremiereFois: 'none'})
					this.setState({ ModifierpremiereFois: 'visible'})
	              	}     
            	}
          	})
		}

		contraception(){
			this.setState({ contracepionReadOnly: 'none'})
			this.setState({ contracepionInput: 'visibleProfil'})
			this.setState({ Validercontracepion: 'visible'})
			this.setState({ Modifiercontracepion: 'none'})

		}

		contraceptionValider(){
			const text = ReactDOM.findDOMNode(this.refs.contraception).value.trim();
			const theme = true;
			Meteor.call('contraception',
		  	  theme,
		  	  text,
		  	  (err) => {
            	if(err){
              
           		 } else {
              	{
			        this.setState({ contracepionReadOnly: 'visible'})
					this.setState({ contracepionInput: 'none'})
					this.setState({ Validercontracepion: 'none'})
					this.setState({ Modifiercontracepion: 'visible'})
	              	}     
            	}
          	})
		}

		mst(){
			this.setState({ mstReadOnly: 'none'})
			this.setState({ mstInput: 'visibleProfil'})
			this.setState({ Validermst: 'visible'})
			this.setState({ Modifiermst: 'none'})

		}

		mstValider(){
			const text = ReactDOM.findDOMNode(this.refs.mst).value.trim();
			const theme = true;
			Meteor.call('mst',
		  	  theme,
		  	  text,
		  	  (err) => {
            	if(err){
              
           		 } else {
              	{
			        this.setState({ mstReadOnly: 'visible'})
					this.setState({ mstInput: 'none'})
					this.setState({ Validermst: 'none'})
					this.setState({ Modifiermst: 'visible'})
	              	}     
            	}
          	})
		}

		viol(){
			this.setState({ violReadOnly: 'none'})
			this.setState({ violInput: 'visibleProfil'})
			this.setState({ Validerviol: 'visible'})
			this.setState({ Modifierviol: 'none'})

		}

		violValider(){
			const text = ReactDOM.findDOMNode(this.refs.viol).value.trim();
			const theme = true;
			Meteor.call('viol',
		  	  theme,
		  	  text,
		  	  (err) => {
            	if(err){
              
           		 } else {
              	{
			        this.setState({ violReadOnly: 'visible'})
					this.setState({ violInput: 'none'})
					this.setState({ Validerviol: 'none'})
					this.setState({ Modifierviol: 'visible'})
	              	}     
            	}
          	})
		}

		avortement(){
			this.setState({ avortementReadOnly: 'none'})
			this.setState({ avortementInput: 'visibleProfil'})
			this.setState({ Valideravortement: 'visible'})
			this.setState({ Modifieravortement: 'none'})

		}

		avortementValider(){
			const text = ReactDOM.findDOMNode(this.refs.avortement).value.trim();
			const theme = true;
			Meteor.call('avortement',
		  	  theme,
		  	  text,
		  	  (err) => {
            	if(err){
              
           		 } else {
              	{
			        this.setState({ avortementReadOnly: 'visible'})
					this.setState({ avortementInput: 'none'})
					this.setState({ Valideravortement: 'none'})
					this.setState({ Modifieravortement: 'visible'})
	              	}     
            	}
          	})
		}

		orientationSex(){
			this.setState({ orientationSexReadOnly: 'none'})
			this.setState({ orientationSexInput: 'visibleProfil'})
			this.setState({ ValiderorientationSex: 'visible'})
			this.setState({ ModifierorientationSex: 'none'})

		}

		orientationSexValider(){
			const text = ReactDOM.findDOMNode(this.refs.orientationSex).value.trim();
			const theme = true;
			Meteor.call('orientationSex',
		  	  theme,
		  	  text,
		  	  (err) => {
            	if(err){
              
           		 } else {
              	{
			        this.setState({ orientationSexReadOnly: 'visible'})
					this.setState({ orientationSexInput: 'none'})
					this.setState({ ValiderorientationSex: 'none'})
					this.setState({ ModifierorientationSex: 'visible'})
	              	}     
            	}
          	})
		}

		anorexie(){
			this.setState({ anorexieReadOnly: 'none'})
			this.setState({ anorexieInput: 'visibleProfil'})
			this.setState({ Valideranorexie: 'visible'})
			this.setState({ Modifieranorexie: 'none'})

		}

		anorexieValider(){
			const text = ReactDOM.findDOMNode(this.refs.anorexie).value.trim();
			const theme = true;
			Meteor.call('Anorexie',
		  	  theme,
		  	  text,
		  	  (err) => {
            	if(err){
              
           		 } else {
              	{
			        this.setState({ anorexieReadOnly: 'visible'})
					this.setState({ anorexieInput: 'none'})
					this.setState({ Valideranorexie: 'none'})
					this.setState({ Modifieranorexie: 'visible'})
	              	}     
            	}
          	})
		}

		obesite(){
			this.setState({ obesiteReadOnly: 'none'})
			this.setState({ obesiteInput: 'visibleProfil'})
			this.setState({ Validerobesite: 'visible'})
			this.setState({ Modifierobesite: 'none'})

		}

		obesiteValider(){
			const text = ReactDOM.findDOMNode(this.refs.obesite).value.trim();
			const theme = true;
			Meteor.call('obesite',
		  	  theme,
		  	  text,
		  	  (err) => {
            	if(err){
              
           		 } else {
              	{
			        this.setState({ obesiteReadOnly: 'visible'})
					this.setState({ obesiteInput: 'none'})
					this.setState({ Validerobesite: 'none'})
					this.setState({ Modifierobesite: 'visible'})
	              	}     
            	}
          	})
		}

		drogue(){
			this.setState({ drogueReadOnly: 'none'})
			this.setState({ drogueInput: 'visibleProfil'})
			this.setState({ Validerdrogue: 'visible'})
			this.setState({ Modifierdrogue: 'none'})

		}

		drogueValider(){
			const text = ReactDOM.findDOMNode(this.refs.drogue).value.trim();
			const theme = true;
			Meteor.call('drogue',
		  	  theme,
		  	  text,
		  	  (err) => {
            	if(err){
              
           		 } else {
              	{
			        this.setState({ drogueReadOnly: 'visible'})
					this.setState({ drogueInput: 'none'})
					this.setState({ Validerdrogue: 'none'})
					this.setState({ Modifierdrogue: 'visible'})
	              	}     
            	}
          	})
		}

		alcool(){
			this.setState({ alcoolReadOnly: 'none'})
			this.setState({ alcoolInput: 'visibleProfil'})
			this.setState({ Valideralcool: 'visible'})
			this.setState({ Modifieralcool: 'none'})

		}

		alcoolValider(){
			const text = ReactDOM.findDOMNode(this.refs.alcool).value.trim();
			const theme = true;
			Meteor.call('alcool',
		  	  theme,
		  	  text,
		  	  (err) => {
            	if(err){
              
           		 } else {
              	{
			        this.setState({ alcoolReadOnly: 'visible'})
					this.setState({ alcoolInput: 'none'})
					this.setState({ Valideralcool: 'none'})
					this.setState({ Modifieralcool: 'visible'})
	              	}     
            	}
          	})
		}

		complexe(){
			this.setState({ complexeReadOnly: 'none'})
			this.setState({ complexeInput: 'visibleProfil'})
			this.setState({ Validercomplexe: 'visible'})
			this.setState({ Modifiercomplexe: 'none'})

		}

		complexeValider(){
			const text = ReactDOM.findDOMNode(this.refs.complexe).value.trim();
			const theme = true;
			Meteor.call('complexe',
		  	  theme,
		  	  text,
		  	  (err) => {
            	if(err){
              
           		 } else {
              	{
			        this.setState({ complexeReadOnly: 'visible'})
					this.setState({ complexeInput: 'none'})
					this.setState({ Validercomplexe: 'none'})
					this.setState({ Modifiercomplexe: 'visible'})
	              	}     
            	}
          	})
		}

		hopital(){
			this.setState({ hospitalisationReadOnly: 'none'})
			this.setState({ hospitalisationInput: 'visibleProfil'})
			this.setState({ Validerhospitalisation: 'visible'})
			this.setState({ Modifierhospitalisation: 'none'})

		}

		hopitalValider(){
			const text = ReactDOM.findDOMNode(this.refs.hopital).value.trim();
			const theme = true;
			Meteor.call('hopital',
		  	  theme,
		  	  text,
		  	  (err) => {
            	if(err){
              
           		 } else {
              	{
			        this.setState({ hospitalisationReadOnly: 'visible'})
					this.setState({ hospitalisationInput: 'none'})
					this.setState({ Validerhospitalisation: 'none'})
					this.setState({ Modifierhospitalisation: 'visible'})
	              	}     
            	}
          	})
		}

		handicap(){
			this.setState({ handicapReadOnly: 'none'})
			this.setState({ handicapInput: 'visibleProfil'})
			this.setState({ Validerhandicap: 'visible'})
			this.setState({ Modifierhandicap: 'none'})

		}

		handicapValider(){
			const text = ReactDOM.findDOMNode(this.refs.handicap).value.trim();
			const theme = true;
			Meteor.call('handicap',
		  	  theme,
		  	  text,
		  	  (err) => {
            	if(err){
              
           		 } else {
              	{
			        this.setState({ handicapReadOnly: 'visible'})
					this.setState({ handicapInput: 'none'})
					this.setState({ Validerhandicap: 'none'})
					this.setState({ Modifierhandicap: 'visible'})
	              	}     
            	}
          	})
		}

		accident(){
			this.setState({ accidentReadOnly: 'none'})
			this.setState({ accidentInput: 'visibleProfil'})
			this.setState({ Valideraccident: 'visible'})
			this.setState({ Modifieraccident: 'none'})

		}

		accidentValider(){
			const text = ReactDOM.findDOMNode(this.refs.accident).value.trim();
			const theme = true;
			Meteor.call('accident',
		  	  theme,
		  	  text,
		  	  (err) => {
            	if(err){
              
           		 } else {
              	{
			        this.setState({ accidentReadOnly: 'visible'})
					this.setState({ accidentInput: 'none'})
					this.setState({ Valideraccident: 'none'})
					this.setState({ Modifieraccident: 'visible'})
	              	}     
            	}
          	})
		}

		echecEcole(){
			this.setState({ echecEcoleReadOnly: 'none'})
			this.setState({ echecEcoleInput: 'visibleProfil'})
			this.setState({ ValiderechecEcole: 'visible'})
			this.setState({ ModifierechecEcole: 'none'})

		}

		echechEcoleValider(){
			const text = ReactDOM.findDOMNode(this.refs.echecEcole).value.trim();
			const theme = true;
			Meteor.call('echecEcole',
		  	  theme,
		  	  text,
		  	  (err) => {
            	if(err){
              
           		 } else {
              	{
			        this.setState({ echecEcoleReadOnly: 'visible'})
					this.setState({ echecEcoleInput: 'none'})
					this.setState({ ValiderechecEcole: 'none'})
					this.setState({ ModifierechecEcole: 'visible'})
	              	}     
            	}
          	})
		}

		Harcelement(){
			this.setState({ harcelementReadOnly: 'none'})
			this.setState({ harcelementInput: 'visibleProfil'})
			this.setState({ Validerharcelement: 'visible'})
			this.setState({ Modifierharcelement: 'none'})

		}

		HarcelementValider(){
			const text = ReactDOM.findDOMNode(this.refs.Harcelement).value.trim();
			const theme = true;
			Meteor.call('Harcelement',
		  	  theme,
		  	  text,
		  	  (err) => {
            	if(err){
              
           		 } else {
              	{
			        this.setState({ harcelementReadOnly: 'visible'})
					this.setState({ harcelementInput: 'none'})
					this.setState({ Validerharcelement: 'none'})
					this.setState({ Modifierharcelement: 'visible'})
	              	}     
            	}
          	})
		}

		discrimination(){
			this.setState({ discriminationReadOnly: 'none'})
			this.setState({ discriminationInput: 'visibleProfil'})
			this.setState({ Validerdiscrimination: 'visible'})
			this.setState({ Modifierdiscrimination: 'none'})

		}

		discriminationValider(){
			const text = ReactDOM.findDOMNode(this.refs.discrimination).value.trim();
			const theme = true;
			Meteor.call('discrimination',
		  	  theme,
		  	  text,
		  	  (err) => {
            	if(err){
              
           		 } else {
              	{
			        this.setState({ discriminationReadOnly: 'visible'})
					this.setState({ discriminationInput: 'none'})
					this.setState({ Validerdiscrimination: 'none'})
					this.setState({ Modifierdiscrimination: 'visible'})
	              	}     
            	}
          	})
		}

		violence(){
			this.setState({ violenceReadOnly: 'none'})
			this.setState({ violenceInput: 'visibleProfil'})
			this.setState({ Validerviolence: 'visible'})
			this.setState({ Modifierviolence: 'none'})

		}

		violenceValider(){
			const text = ReactDOM.findDOMNode(this.refs.violence).value.trim();
			const theme = true;
			Meteor.call('Violence',
		  	  theme,
		  	  text,
		  	  (err) => {
            	if(err){
              
           		 } else {
              	{
			        this.setState({ violenceReadOnly: 'visible'})
					this.setState({ violenceInput: 'none'})
					this.setState({ Validerviolence: 'none'})
					this.setState({ Modifierviolence: 'visible'})
	              	}     
            	}
          	})
		}

		connection(){
			
    		if(this.props.online.online == true){ 
				return "visible";
				}else{
				return  "none";
				}
		}

		connectionText(){	
			const today = new Date();
			const diffToday = Date.parse(today);
			let post_date = Date.parse(this.props.lastConnection);
			let nbrSeconde = ((diffToday-post_date)/1000) + 2;
			let nbrMinutes = Math.round(nbrSeconde/60);
			let nbrHeures = Math.round(nbrMinutes/60);
			let nbrJours = Math.round(nbrHeures/24);
			let nbrMois = Math.round(nbrJours/30);


			if(this.props.online.online == true){ return "Connecté" }
            if(this.props.online.online !== true && nbrSeconde<60){ return "Dernière connection il y a 30 secondes"} 
		    else if(this.props.online.online !== true && nbrMinutes<2){ return "Dernière connection il y a " + nbrMinutes +" minute"}
		    else if(this.props.online.online !== true && nbrMinutes<60){ return "Dernière connection il y a " + nbrMinutes +" minutes"}
		    else if(this.props.online.online !== true && nbrHeures<2){ return "Dernière connection il y a " + nbrHeures +" heure"} 
			else if(this.props.online.online !== true && nbrHeures<24){return "Dernière connection il y a " + nbrHeures +" heures"} 
			else if(this.props.online.online !== true && nbrJours<2 ){ return "Dernière connection il y a " + nbrJours  +" jour"}
			else if(this.props.online.online !== true && nbrJours<30 ){return "Dernière connection il y a " + nbrJours +" jours"} 
			else {return "Il y a " + nbrMois +" mois" }
		}


  render() {
			const { activeIndex } = this.state;
			const myId = Meteor.userId();
			let now = new Date();
			let diff = now - this.props.profile.naissance;
			let age = Math.round(diff / 31536000000);

			//on calcul la derniere connection
			const today = new Date();
			const diffToday = Date.parse(today);
			let post_date = Date.parse(this.props.lastConnection);
			let nbrSeconde = ((diffToday-post_date)/1000) + 2;
			let nbrMinutes = Math.round(nbrSeconde/60);
			let nbrHeures = Math.round(nbrMinutes/60);
			let nbrJours = Math.round(nbrHeures/24);
			let nbrMois = Math.round(nbrJours/30);

    		if(post_date){
    		let nbrSeconde = ((diffToday-post_date)/1000) + 2;
			let nbrMinutes = Math.round(nbrSeconde/60);
			let nbrHeures = Math.round(nbrMinutes/60);
			let nbrJours = Math.round(nbrHeures/24);
			let nbrMois = Math.round(nbrJours/30);
			}

			{this.props.conseiller.premierAmour !== true ? premierAmour = 'none' : premierAmour = 'n'}
			{this.props.conseiller.trahison !== true ? trahison = 'none' : trahison = 'n'}
			{this.props.conseiller.Friendzone !== true ? Friendzone = 'none' : Friendzone = 'n'}
			{this.props.conseiller.amourdistance !== true ? amourdistance = 'none' : amourdistance = 'n'}
			{this.props.conseiller.separation !== true ? separation = 'none' : separation = 'n'}
			{this.props.conseiller.timidite !== true ? timidite = 'none' : timidite = 'n'}
			{this.props.conseiller.depression !== true ? depression = 'none' : depression = 'n'}
			{this.props.conseiller.suicide !== true ? suicide = 'none' : suicide = 'n'}
			{this.props.conseiller.deces !== true ? deces = 'none' : deces = 'n'}
			{this.props.conseiller.mutilation !== true ? mutilation = 'none' : mutilation = 'n'}
			{this.props.conseiller.premierfois !== true ? premierfois = 'none' : premierfois = 'n'}
			{this.props.conseiller.contraception !== true ? contraception = 'none' : contraception = 'n'}
			{this.props.conseiller.mst !== true ? mst = 'none' : mst = 'n'}
			{this.props.conseiller.viol !== true ? viol = 'none' : viol = 'n'}
			{this.props.conseiller.avortement !== true ? avortement = 'none' : avortement = 'n'}
			{this.props.conseiller.orientationSex !== true ? orientationSex = 'none' : orientationSex = 'n'}
			{this.props.conseiller.Anorexie !== true ? Anorexie = 'none' : Anorexie = 'n'}
			{this.props.conseiller.obesite !== true ? obesite = 'none' : obesite = 'n'}
			{this.props.conseiller.drogue !== true ? drogue = 'none' : drogue = 'n'}
			{this.props.conseiller.alcool !== true ? alcool = 'none' : alcool = 'n'}
			{this.props.conseiller.complexe !== true ? complexe = 'none' : complexe = 'n'}
			{this.props.conseiller.hopital !== true ? hopital = 'none' : hopital = 'n'}
			{this.props.conseiller.handicap !== true ? handicap = 'none' : handicap = 'n'}
			{this.props.conseiller.accident !== true ? accident = 'none' : accident = 'n'}
			{this.props.conseiller.echecEcole !== true ? echecEcole = 'none' : echecEcole = 'n'}
			{this.props.conseiller.Harcelement !== true ? Harcelement = 'none' : Harcelement = 'n'}
			{this.props.conseiller.discrimination !== true ? discrimination = 'none' : discrimination = 'n'}
			{this.props.conseiller.Violence !== true ? Violence = 'none' : Violence = 'n'}
						

		    if (!Meteor.loggingIn() && !Meteor.userId()){
      		return <Redirect to="/" />;
    		}

		return (
			<div className="MainContent">
				
					<Segment >
						<Header>
						Profil <div className={this.props.profile.gender} >{this.props.user.username} </div>
						<div className="AgeProfil">{age} ans</div>

						<div className={this.props.profile.note<1 ? "visiblenote" : "none"}>
							<Rating icon='heart'
		              			defaultRating={0}
		              			maxRating={4}
		              			disabled
              	 			/>
              	 		</div>

	              	 	<div className={this.props.id == Meteor.userId() ? "UpdateNaissance" : 'none'}>
		              	 	<Link to={'/MiseAjourNaissance/'}>
		              	 		<Button>Date de naissance</Button>
		              	 	</Link>
	              	 	</div>

              	 		<div className={this.props.profile.note>=1 && this.props.profile.note<2 ? "visiblenote" : "none"}>
							<Rating icon='heart'
		              			defaultRating={1}
		              			maxRating={4}
		              			disabled
              	 			/>
              	 		</div>
              	 		<div className={this.props.profile.note>=2 && this.props.profile.note<3 ? "visiblenote" : "none"}>
							<Rating icon='heart'
		              			defaultRating={2}
		              			maxRating={4}
		              			disabled
              	 			/>
              	 		</div>
              	 		<div className={this.props.profile.note>=3 && this.props.profile.note<4 ? "visiblenote" : "none"}>
							<Rating icon='heart'
		              			defaultRating={3}
		              			maxRating={4}
		              			disabled
              	 			/>
              	 		</div>
              	 		<div className={this.props.profile.note>=4 && this.props.profile.note<5 ? "visiblenote" : "none"}>
							<Rating icon='heart'
		              			defaultRating={4}
		              			maxRating={4}
		              			disabled
              	 			/>
              	 		</div>
              	 		<div className="LastConnectionProfil">
	              	 		<div className={"PointOnline" + " " + this.connection()}>
								<FaPoint />
							</div>
              	 			{this.connectionText()}
              	 		</div>

              	 		<div className="recommandations">
	              	 		<Button
	              	 			 inverted
								 color='blue'>
									 <Link to={'/Recommandations/'+ this.props.id }>	
									 	{this.props.Recommandations + " "}
									 	 <p className="recommandationsInline">{this.nbrRecommandations()}</p>
									 </Link>
							</Button>
						</div>

						<div className={"ButtonProfil" +
										 " " +
										this.props.NotIdProfile
										}
						>
							<Button
							 inverted
							 color='brown'>
								 <Link to={'/Chat/'+ this.props.id }>	
								 	Contacter
								 </Link>
							 </Button>

							<Button
							 inverted 
							 color='green'>
								 <Link to={'/Recommander/'+ this.props.id }>	
								 	Recommander
								 </Link>
							 </Button>

							<Button
							 inverted
							 color='red'>
							 <Link to={'/Dons/'+ this.props.id }>
							 	Faire un don
							 </Link>
							</Button>

						</div>

						<div className={"ButtonProfil" + " " + this.state.conseillerExiste}>
							<div className={this.state.myId}>
							<Button
							 inverted
							 color='green'>
								 <Link to={'/DevenirConseiller/'+ Meteor.userId() }>	
								 	Devenir conseiller
								 </Link>
							 </Button>
							</div>
						</div>
						</Header>
					</Segment >
					<Divider />
				<div className={this.state.IsConseiller ? 'VisibleAjouter' : 'none'}>
					<Segment >
			  			<Label attached='top'  basic color='blue' className="headerProfil">
			  			<div className="titreProfil">Présentation</div>
						       <div className={"modifierFormProfil" + " "+this.props.IdProfile}>
						    		<div className={this.state.Modifierpresentation} >
							    		<Button color='red' size='mini' onClick={this.presentation.bind(this)}>
								    		<div className="modifierFormButton">
								    		 	modifier
								    		</div>
							    		</Button>
						    		</div>

						    		<div className={this.state.Validerpresentation} >
							    		<Button color='green' size='mini' onClick={this.presentationValider.bind(this)}>
								    		<div className="modifierFormButton" >
								    		 	Valider
								    		</div>
							    		</Button>
						    		</div>
						    	</div>
			  			 </Label>
						<div className={this.state.presentationReadOnly + " " + "textProfil" + " "+ "display-linebreak"}	>  			 
						{this.props.conseiller.presentation}
						</div>
						<div className={this.state.presentationInput + " " + "inputprofil"}>
							<Form >
							    <Form.Field >
										<Input as='TextArea'  ref="presentation">
											{this.props.conseiller.presentation}
										</Input>
									
							    </Form.Field>
							</Form>
						 </div>
					</Segment>
				</div>
				<div className={"visibleProfil" + " " +this.props.IdProfile}>
					<Button
					  color="green"
					  fluid
					  disabled={!this.state.IsConseiller} >
						 <Link to="/ModifierConseiller" >
						 	Ajouter une experience
						 </Link>
					</Button>
					<Message
				    	hidden={this.state.IsConseiller}
				      	header="Tu n'es pas conseiller"
				      	content='Seuls les conseillers peuvent ajouter des expériences'
				    />
				</div>

				<Segment className={premierAmour} >

		  			<Label attached='top'  basic color='red' className="headerProfil">
		  			<div className="titreProfil">Premier amour</div>
					       <div className={"modifierFormProfil" + " "+this.props.IdProfile}>
					    		<div className={this.state.ModifierPremierAmour} >
						    		<Button color='red' size='mini' onClick={this.premierAmour.bind(this)}>
							    		<div className="modifierFormButton">
							    		 	modifier
							    		</div>
						    		</Button>
					    		</div>

					    		<div className={this.state.ValiderPremierAmour} >
						    		<Button color='green' size='mini' onClick={this.premierAmourValider.bind(this)}>
							    		<div className="modifierFormButton" >
							    		 	Valider
							    		</div>
						    		</Button>
					    		</div>
					    	</div>
		  			 </Label>
					<div className={this.state.premierAmourReadOnly + " " + "textProfil" + " "+ "display-linebreak"}	>  			 
					{this.props.conseiller.premierAmourText}
					</div>
					<div className={this.state.premierAmourInput + " " + "inputprofil"}>
					<Form >
					    <Form.Field >
								<Input as='TextArea'  ref="premierAmour">
									{this.props.conseiller.premierAmourText}
								</Input>
							
					    </Form.Field>
					</Form>
					 </div>
				</Segment>

				<Segment className={trahison}>
		  			<Label attached='top'  basic color='red' className="headerProfil">
		  			<div className="titreProfil">Trahison amoureuse</div>
					       <div className={"modifierFormProfil" + " "+this.props.IdProfile}>
					    		<div className={this.state.Modifiertrahison} >
						    		<Button color='red' size='mini' onClick={this.trahison.bind(this)}>
							    		<div className="modifierFormButton">
							    		 	modifier
							    		</div>
						    		</Button>
					    		</div>

					    		<div className={this.state.Validertrahison} >
						    		<Button color='green' size='mini' onClick={this.trahisonValider.bind(this)}>
							    		<div className="modifierFormButton" >
							    		 	Valider
							    		</div>
						    		</Button>
					    		</div>
					    	</div>
		  			 </Label>
					<div className={this.state.trahisonReadOnly + " " + "textProfil" + " "+ "display-linebreak"}>  			 
					{this.props.conseiller.trahisonText}
					</div>
					<div className={this.state.trahisonInput + " " + "inputprofil"}>
					<Form >
					    <Form.Field >
								<Input as='TextArea'  ref="trahison">
									{this.props.conseiller.trahisonText}
								</Input>
							
					    </Form.Field>
					</Form>
					 </div>
				</Segment>

				<Segment className={Friendzone}>
		  			<Label attached='top'  basic color='red' className="headerProfil">
		  			<div className="titreProfil">Friendzone</div>
					       <div className={"modifierFormProfil" + " "+this.props.IdProfile}>
					    		<div className={this.state.Modifierfriendzone} >
						    		<Button color='red' size='mini' onClick={this.friendzone.bind(this)}>
							    		<div className="modifierFormButton">
							    		 	modifier
							    		</div>
						    		</Button>
					    		</div>

					    		<div className={this.state.Validerfriendzone} >
						    		<Button color='green' size='mini' onClick={this.friendzoneValider.bind(this)}>
							    		<div className="modifierFormButton" >
							    		 	Valider
							    		</div>
						    		</Button>
					    		</div>
					    	</div>
		  			 </Label>
					<div className={this.state.friendzoneReadOnly + " " + "textProfil" + " "+ "display-linebreak"}>  			 
					{this.props.conseiller.FriendzoneText}
					</div>
					<div className={this.state.friendzoneInput + " " + "inputprofil"}>
					<Form >
					    <Form.Field >
								<Input as='TextArea'  ref="friendzone">
									{this.props.conseiller.FriendzoneText}
								</Input>
							
					    </Form.Field>
					</Form>
					 </div>
				</Segment>


				<Segment className={amourdistance}>
		  			<Label attached='top'  basic color='red' className="headerProfil">
		  			<div className="titreProfil">Amour à distance</div>
					       <div className={"modifierFormProfil" + " "+this.props.IdProfile}>
					    		<div className={this.state.ModifieramourDistance} >
						    		<Button color='red' size='mini' onClick={this.amourDistance.bind(this)}>
							    		<div className="modifierFormButton">
							    		 	modifier
							    		</div>
						    		</Button>
					    		</div>

					    		<div className={this.state.ValideramourDistance} >
						    		<Button color='green' size='mini' onClick={this.amourDistanceValider.bind(this)}>
							    		<div className="modifierFormButton" >
							    		 	Valider
							    		</div>
						    		</Button>
					    		</div>
					    	</div>
		  			 </Label>
					<div className={this.state.amourDistanceReadOnly + " " + "textProfil" + " "+ "display-linebreak"}>  			 
					{this.props.conseiller.amourdistanceText}
					</div>
					<div className={this.state.amourDistanceInput + " " + "inputprofil"}>
					<Form >
					    <Form.Field >
								<Input as='TextArea'  ref="amourdistance">
									{this.props.conseiller.amourdistanceText}
								</Input>
							
					    </Form.Field>
					</Form>
					 </div>
				</Segment>

				<Segment className={separation}>
		  			<Label attached='top'  basic color='red' className="headerProfil">
		  			<div className="titreProfil">Séparation</div>
					       <div className={"modifierFormProfil" + " "+this.props.IdProfile}>
					    		<div className={this.state.Modifierseparation} >
						    		<Button color='red' size='mini' onClick={this.separation.bind(this)}>
							    		<div className="modifierFormButton">
							    		 	modifier
							    		</div>
						    		</Button>
					    		</div>

					    		<div className={this.state.Validerseparation} >
						    		<Button color='green' size='mini' onClick={this.separationValider.bind(this)}>
							    		<div className="modifierFormButton" >
							    		 	Valider
							    		</div>
						    		</Button>
					    		</div>
					    	</div>
		  			 </Label>
					<div className={this.state.separationReadOnly + " " + "textProfil" + " "+ "display-linebreak"}>  			 
					{this.props.conseiller.separationText}
					</div>
					<div className={this.state.separationInput + " " + "inputprofil"}>
					<Form >
					    <Form.Field >
								<Input as='TextArea'  ref="separation">
									{this.props.conseiller.separationText}
								</Input>
							
					    </Form.Field>
					</Form>
					 </div>
				</Segment>

				<Segment className={timidite}>
		  			<Label attached='top'  basic color='orange' className="headerProfil">
		  			<div className="titreProfil">Timidité</div>
					       <div className={"modifierFormProfil" + " "+this.props.IdProfile}>
					    		<div className={this.state.ModifierTimidite} >
						    		<Button color='red' size='mini' onClick={this.timidite.bind(this)}>
							    		<div className="modifierFormButton">
							    		 	modifier
							    		</div>
						    		</Button>
					    		</div>

					    		<div className={this.state.ValiderTimidite} >
						    		<Button color='green' size='mini' onClick={this.timiditeValider.bind(this)}>
							    		<div className="modifierFormButton" >
							    		 	Valider
							    		</div>
						    		</Button>
					    		</div>
					    	</div>
		  			 </Label>
					<div className={this.state.TimiditeReadOnly + " " + "textProfil" + " "+ "display-linebreak"}>  			 
					{this.props.conseiller.timiditeText}
					</div>
					<div className={this.state.TimiditeInput + " " + "inputprofil"}>
					<Form >
					    <Form.Field >
								<Input as='TextArea'  ref="timidite">
									{this.props.conseiller.timiditeText}
								</Input>
							
					    </Form.Field>
					</Form>
					 </div>
				</Segment>

				<Segment className={depression}>
		  			<Label attached='top'  basic color='orange' className="headerProfil">
		  			<div className="titreProfil">Dépression</div>
					       <div className={"modifierFormProfil" + " "+this.props.IdProfile}>
					    		<div className={this.state.Modifierdepression} >
						    		<Button color='red' size='mini' onClick={this.depression.bind(this)}>
							    		<div className="modifierFormButton">
							    		 	modifier
							    		</div>
						    		</Button>
					    		</div>

					    		<div className={this.state.Validerdepression} >
						    		<Button color='green' size='mini' onClick={this.depressionValider.bind(this)}>
							    		<div className="modifierFormButton" >
							    		 	Valider
							    		</div>
						    		</Button>
					    		</div>
					    	</div>
		  			 </Label>
					<div className={this.state.depressionReadOnly + " " + "textProfil" + " "+ "display-linebreak"}>  			 
					{this.props.conseiller.depressionText}
					</div>
					<div className={this.state.depressionInput + " " + "inputprofil"}>
					<Form >
					    <Form.Field >
								<Input as='TextArea'  ref="depression">
									{this.props.conseiller.depressionText}
								</Input>
							
					    </Form.Field>
					</Form>
					 </div>
				</Segment>

				<Segment className={suicide}>
		  			<Label attached='top'  basic color='orange' className="headerProfil">
		  			<div className="titreProfil">Suicide</div>
					       <div className={"modifierFormProfil" + " "+this.props.IdProfile}>
					    		<div className={this.state.Modifiersuicide} >
						    		<Button color='red' size='mini' onClick={this.suicide.bind(this)}>
							    		<div className="modifierFormButton">
							    		 	modifier
							    		</div>
						    		</Button>
					    		</div>

					    		<div className={this.state.Validersuicide} >
						    		<Button color='green' size='mini' onClick={this.suicideValider.bind(this)}>
							    		<div className="modifierFormButton" >
							    		 	Valider
							    		</div>
						    		</Button>
					    		</div>
					    	</div>
		  			 </Label>
					<div className={this.state.suicideReadOnly + " " + "textProfil" + " "+ "display-linebreak"}>  			 
					{this.props.conseiller.suicideText}
					</div>
					<div className={this.state.suicideInput + " " + "inputprofil"}>
					<Form >
					    <Form.Field >
								<Input as='TextArea'  ref="suicide">
									{this.props.conseiller.suicideText}
								</Input>
							
					    </Form.Field>
					</Form>
					 </div>
				</Segment>

				<Segment className={deces}>
		  			<Label attached='top'  basic color='orange' className="headerProfil">
		  			<div className="titreProfil">Décès</div>
					       <div className={"modifierFormProfil" + " "+this.props.IdProfile}>
					    		<div className={this.state.Modifierdeces} >
						    		<Button color='red' size='mini' onClick={this.deces.bind(this)}>
							    		<div className="modifierFormButton">
							    		 	modifier
							    		</div>
						    		</Button>
					    		</div>

					    		<div className={this.state.Validerdeces} >
						    		<Button color='green' size='mini' onClick={this.decesValider.bind(this)}>
							    		<div className="modifierFormButton" >
							    		 	Valider
							    		</div>
						    		</Button>
					    		</div>
					    	</div>
		  			 </Label>
					<div className={this.state.decesReadOnly + " " + "textProfil" + " "+ "display-linebreak"}>  			 
					{this.props.conseiller.decesText}
					</div>
					<div className={this.state.decesInput + " " + "inputprofil"}>
					<Form >
					    <Form.Field >
								<Input as='TextArea'  ref="deces">
									{this.props.conseiller.decesText}
								</Input>
							
					    </Form.Field>
					</Form>
					 </div>
				</Segment>

				<Segment className={mutilation}>
		  			<Label attached='top'  basic color='orange' className="headerProfil">
		  			<div className="titreProfil">Mutilation</div>
					       <div className={"modifierFormProfil" + " "+this.props.IdProfile}>
					    		<div className={this.state.Modifiermutilation} >
						    		<Button color='red' size='mini' onClick={this.mutilation.bind(this)}>
							    		<div className="modifierFormButton">
							    		 	modifier
							    		</div>
						    		</Button>
					    		</div>

					    		<div className={this.state.Validermutilation} >
						    		<Button color='green' size='mini' onClick={this.mutilationValider.bind(this)}>
							    		<div className="modifierFormButton" >
							    		 	Valider
							    		</div>
						    		</Button>
					    		</div>
					    	</div>
		  			 </Label>
					<div className={this.state.mutilationReadOnly + " " + "textProfil" + " "+ "display-linebreak"}>  			 
					{this.props.conseiller.mutilationText}
					</div>
					<div className={this.state.mutilationInput + " " + "inputprofil"}>
					<Form >
					    <Form.Field >
								<Input as='TextArea'  ref="mutilation">
									{this.props.conseiller.mutilationText}
								</Input>
							
					    </Form.Field>
					</Form>
					 </div>
				</Segment>

				<Segment className={premierfois}>
		  			<Label attached='top'  basic color='teal' className="headerProfil">
		  			<div className="titreProfil">Première fois</div>
					       <div className={"modifierFormProfil" + " "+this.props.IdProfile}>
					    		<div className={this.state.ModifierpremiereFois} >
						    		<Button color='red' size='mini' onClick={this.premiereFois.bind(this)}>
							    		<div className="modifierFormButton">
							    		 	modifier
							    		</div>
						    		</Button>
					    		</div>

					    		<div className={this.state.ValiderpremiereFois} >
						    		<Button color='green' size='mini' onClick={this.premiereFoisValider.bind(this)}>
							    		<div className="modifierFormButton" >
							    		 	Valider
							    		</div>
						    		</Button>
					    		</div>
					    	</div>
		  			 </Label>
					<div className={this.state.premiereFoisReadOnly + " " + "textProfil" + " "+ "display-linebreak"}>  			 
					{this.props.conseiller.premierfoisText}
					</div>
					<div className={this.state.premiereFoisInput + " " + "inputprofil"}>
					<Form >
					    <Form.Field >
								<Input as='TextArea'  ref="premierfois">
									{this.props.conseiller.premierfoisText}
								</Input>
							
					    </Form.Field>
					</Form>
					 </div>
				</Segment>

				<Segment className={contraception}>
		  			<Label attached='top'  basic color='teal' className="headerProfil">
		  			<div className="titreProfil">Contraception</div>
					       <div className={"modifierFormProfil" + " "+this.props.IdProfile}>
					    		<div className={this.state.Modifiercontracepion} >
						    		<Button color='red' size='mini' onClick={this.contraception.bind(this)}>
							    		<div className="modifierFormButton">
							    		 	modifier
							    		</div>
						    		</Button>
					    		</div>

					    		<div className={this.state.Validercontracepion} >
						    		<Button color='green' size='mini' onClick={this.contraceptionValider.bind(this)}>
							    		<div className="modifierFormButton" >
							    		 	Valider
							    		</div>
						    		</Button>
					    		</div>
					    	</div>
		  			 </Label>
					<div className={this.state.contracepionReadOnly + " " + "textProfil" + " "+ "display-linebreak"}>  			 
					{this.props.conseiller.contraceptionText}
					</div>
					<div className={this.state.contracepionInput + " " + "inputprofil"}>
					<Form >
					    <Form.Field >
								<Input as='TextArea'  ref="contraception">
									{this.props.conseiller.contraceptionText}
								</Input>
							
					    </Form.Field>
					</Form>
					 </div>
				</Segment>

				<Segment className={mst}>
		  			<Label attached='top'  basic color='teal' className="headerProfil">
		  			<div className="titreProfil">Maladie, MST</div>
					       <div className={"modifierFormProfil" + " "+this.props.IdProfile}>
					    		<div className={this.state.Modifiermst} >
						    		<Button color='red' size='mini' onClick={this.mst.bind(this)}>
							    		<div className="modifierFormButton">
							    		 	modifier
							    		</div>
						    		</Button>
					    		</div>

					    		<div className={this.state.Validermst} >
						    		<Button color='green' size='mini' onClick={this.mstValider.bind(this)}>
							    		<div className="modifierFormButton" >
							    		 	Valider
							    		</div>
						    		</Button>
					    		</div>
					    	</div>
		  			 </Label>
					<div className={this.state.mstReadOnly + " " + "textProfil" + " "+ "display-linebreak"}>  			 
					{this.props.conseiller.mstText}
					</div>
					<div className={this.state.mstInput + " " + "inputprofil"}>
					<Form >
					    <Form.Field >
								<Input as='TextArea'  ref="mst">
									{this.props.conseiller.mstText}
								</Input>
							
					    </Form.Field>
					</Form>
					 </div>
				</Segment>

				<Segment className={viol}>
		  			<Label attached='top'  basic color='teal' className="headerProfil">
		  			<div className="titreProfil">Viol</div>
					       <div className={"modifierFormProfil" + " "+this.props.IdProfile}>
					    		<div className={this.state.Modifierviol} >
						    		<Button color='red' size='mini' onClick={this.viol.bind(this)}>
							    		<div className="modifierFormButton">
							    		 	modifier
							    		</div>
						    		</Button>
					    		</div>

					    		<div className={this.state.Validerviol} >
						    		<Button color='green' size='mini' onClick={this.violValider.bind(this)}>
							    		<div className="modifierFormButton" >
							    		 	Valider
							    		</div>
						    		</Button>
					    		</div>
					    	</div>
		  			 </Label>
					<div className={this.state.violReadOnly + " " + "textProfil" + " "+ "display-linebreak"}>  			 
					{this.props.conseiller.violText}
					</div>
					<div className={this.state.violInput + " " + "inputprofil"}>
					<Form >
					    <Form.Field >
								<Input as='TextArea'  ref="viol">
									{this.props.conseiller.violText}
								</Input>
							
					    </Form.Field>
					</Form>
					 </div>
				</Segment>

				<Segment className={avortement}>
		  			<Label attached='top'  basic color='teal' className="headerProfil">
		  			<div className="titreProfil">Avortement</div>
					       <div className={"modifierFormProfil" + " "+this.props.IdProfile}>
					    		<div className={this.state.Modifieravortement} >
						    		<Button color='red' size='mini' onClick={this.avortement.bind(this)}>
							    		<div className="modifierFormButton">
							    		 	modifier
							    		</div>
						    		</Button>
					    		</div>

					    		<div className={this.state.Valideravortement} >
						    		<Button color='green' size='mini' onClick={this.avortementValider.bind(this)}>
							    		<div className="modifierFormButton" >
							    		 	Valider
							    		</div>
						    		</Button>
					    		</div>
					    	</div>
		  			 </Label>
					<div className={this.state.avortementReadOnly + " " + "textProfil" + " "+ "display-linebreak"}>  			 
					{this.props.conseiller.avortementText}
					</div>
					<div className={this.state.avortementInput + " " + "inputprofil"}>
					<Form >
					    <Form.Field >
								<Input as='TextArea'  ref="avortement">
									{this.props.conseiller.avortementText}
								</Input>
							
					    </Form.Field>
					</Form>
					 </div>
				</Segment>

				<Segment className={orientationSex}>
		  			<Label attached='top'  basic color='teal' className="headerProfil">
		  			<div className="titreProfil">Orientation sexuelle</div>
					       <div className={"modifierFormProfil" + " "+this.props.IdProfile}>
					    		<div className={this.state.ModifierorientationSex} >
						    		<Button color='red' size='mini' onClick={this.orientationSex.bind(this)}>
							    		<div className="modifierFormButton">
							    		 	modifier
							    		</div>
						    		</Button>
					    		</div>

					    		<div className={this.state.ValiderorientationSex} >
						    		<Button color='green' size='mini' onClick={this.orientationSexValider.bind(this)}>
							    		<div className="modifierFormButton" >
							    		 	Valider
							    		</div>
						    		</Button>
					    		</div>
					    	</div>
		  			 </Label>
					<div className={this.state.orientationSexReadOnly + " " + "textProfil" + " "+ "display-linebreak"}>  			 
					{this.props.conseiller.orientationSexText}
					</div>
					<div className={this.state.orientationSexInput + " " + "inputprofil"}>
					<Form >
					    <Form.Field >
								<Input as='TextArea'  ref="orientationSex">
									{this.props.conseiller.orientationSexText}
								</Input>
							
					    </Form.Field>
					</Form>
					 </div>
				</Segment>

				<Segment className={Anorexie}>
		  			<Label attached='top'  basic color='violet' className="headerProfil">
		  			<div className="titreProfil">Anorexie</div>
					       <div className={"modifierFormProfil" + " "+this.props.IdProfile}>
					    		<div className={this.state.Modifieranorexie} >
						    		<Button color='red' size='mini' onClick={this.anorexie.bind(this)}>
							    		<div className="modifierFormButton">
							    		 	modifier
							    		</div>
						    		</Button>
					    		</div>

					    		<div className={this.state.Valideranorexie} >
						    		<Button color='green' size='mini' onClick={this.anorexieValider.bind(this)}>
							    		<div className="modifierFormButton" >
							    		 	Valider
							    		</div>
						    		</Button>
					    		</div>
					    	</div>
		  			 </Label>
					<div className={this.state.anorexieReadOnly + " " + "textProfil" + " "+ "display-linebreak"}>  			 
					{this.props.conseiller.AnorexieText}
					</div>
					<div className={this.state.anorexieInput + " " + "inputprofil"}>
					<Form >
					    <Form.Field >
								<Input as='TextArea'  ref="anorexie">
									{this.props.conseiller.AnorexieText}
								</Input>
							
					    </Form.Field>
					</Form>
					 </div>
				</Segment>

				<Segment className={obesite}>
		  			<Label attached='top'  basic color='violet' className="headerProfil">
		  			<div className="titreProfil">Obésité</div>
					       <div className={"modifierFormProfil" + " "+this.props.IdProfile}>
					    		<div className={this.state.Modifierobesite} >
						    		<Button color='red' size='mini' onClick={this.obesite.bind(this)}>
							    		<div className="modifierFormButton">
							    		 	modifier
							    		</div>
						    		</Button>
					    		</div>

					    		<div className={this.state.Validerobesite} >
						    		<Button color='green' size='mini' onClick={this.obesiteValider.bind(this)}>
							    		<div className="modifierFormButton" >
							    		 	Valider
							    		</div>
						    		</Button>
					    		</div>
					    	</div>
		  			 </Label>
					<div className={this.state.obesiteReadOnly + " " + "textProfil" + " "+ "display-linebreak"}>  			 
					{this.props.conseiller.obesiteText}
					</div>
					<div className={this.state.obesiteInput + " " + "inputprofil"}>
					<Form >
					    <Form.Field >
								<Input as='TextArea'  ref="obesite">
									{this.props.conseiller.obesiteText}
								</Input>
							
					    </Form.Field>
					</Form>
					 </div>
				</Segment>



					<Segment className={drogue}>
		  			<Label attached='top'  basic color='violet' className="headerProfil">
		  			<div className="titreProfil">Drogue</div>
					       <div className={"modifierFormProfil" + " "+this.props.IdProfile}>
					    		<div className={this.state.Modifierdrogue} >
						    		<Button color='red' size='mini' onClick={this.drogue.bind(this)}>
							    		<div className="modifierFormButton">
							    		 	modifier
							    		</div>
						    		</Button>
					    		</div>

					    		<div className={this.state.Validerdrogue} >
						    		<Button color='green' size='mini' onClick={this.drogueValider.bind(this)}>
							    		<div className="modifierFormButton" >
							    		 	Valider
							    		</div>
						    		</Button>
					    		</div>
					    	</div>
		  			 </Label>
					<div className={this.state.drogueReadOnly + " " + "textProfil" + " "+ "display-linebreak"}>  			 
					{this.props.conseiller.drogueText}
					</div>
					<div className={this.state.drogueInput + " " + "inputprofil"}>
					<Form >
					    <Form.Field >
								<Input as='TextArea'  ref="drogue">
									{this.props.conseiller.drogueText}
								</Input>
							
					    </Form.Field>
					</Form>
					 </div>
				</Segment>

					<Segment className={alcool}>
		  			<Label attached='top'  basic color='violet' className="headerProfil">
		  			<div className="titreProfil">Alcool</div>
					       <div className={"modifierFormProfil" + " "+this.props.IdProfile}>
					    		<div className={this.state.Modifieralcool} >
						    		<Button color='red' size='mini' onClick={this.alcool.bind(this)}>
							    		<div className="modifierFormButton">
							    		 	modifier
							    		</div>
						    		</Button>
					    		</div>

					    		<div className={this.state.Valideralcool} >
						    		<Button color='green' size='mini' onClick={this.alcoolValider.bind(this)}>
							    		<div className="modifierFormButton" >
							    		 	Valider
							    		</div>
						    		</Button>
					    		</div>
					    	</div>
		  			 </Label>
					<div className={this.state.alcoolReadOnly + " " + "textProfil" + " "+ "display-linebreak"}>  			 
					{this.props.conseiller.alcoolText}
					</div>
					<div className={this.state.alcoolInput + " " + "inputprofil"}>
					<Form >
					    <Form.Field >
								<Input as='TextArea'  ref="orientationSex">
									{this.props.conseiller.alcoolText}
								</Input>
							
					    </Form.Field>
					</Form>
					 </div>
				</Segment>

					<Segment className={complexe}>
		  			<Label attached='top'  basic color='violet' className="headerProfil">
		  			<div className="titreProfil">Complexe</div>
					       <div className={"modifierFormProfil" + " "+this.props.IdProfile}>
					    		<div className={this.state.Modifiercomplexe} >
						    		<Button color='red' size='mini' onClick={this.complexe.bind(this)}>
							    		<div className="modifierFormButton">
							    		 	modifier
							    		</div>
						    		</Button>
					    		</div>

					    		<div className={this.state.Validercomplexe} >
						    		<Button color='green' size='mini' onClick={this.complexeValider.bind(this)}>
							    		<div className="modifierFormButton" >
							    		 	Valider
							    		</div>
						    		</Button>
					    		</div>
					    	</div>
		  			 </Label>
					<div className={this.state.complexeReadOnly + " " + "textProfil" + " "+ "display-linebreak"}>  			 
					{this.props.conseiller.complexeText}
					</div>
					<div className={this.state.complexeInput + " " + "inputprofil"}>
					<Form >
					    <Form.Field >
								<Input as='TextArea'  ref="complexe">
									{this.props.conseiller.complexeText}
								</Input>
							
					    </Form.Field>
					</Form>
					 </div>
				</Segment>

					<Segment className={hopital}>
		  			<Label attached='top'  basic color='violet' className="headerProfil">
		  			<div className="titreProfil">Hospitalisation</div>
					       <div className={"modifierFormProfil" + " "+this.props.IdProfile}>
					    		<div className={this.state.Modifierhospitalisation} >
						    		<Button color='red' size='mini' onClick={this.hopital.bind(this)}>
							    		<div className="modifierFormButton">
							    		 	modifier
							    		</div>
						    		</Button>
					    		</div>

					    		<div className={this.state.Validerhospitalisation} >
						    		<Button color='green' size='mini' onClick={this.hopitalValider.bind(this)}>
							    		<div className="modifierFormButton" >
							    		 	Valider
							    		</div>
						    		</Button>
					    		</div>
					    	</div>
		  			 </Label>
					<div className={this.state.handicapReadOnly + " " + "textProfil" + " "+ "display-linebreak"}>  			 
					{this.props.conseiller.hopitalText}
					</div>
					<div className={this.state.hospitalisationInput + " " + "inputprofil"}>
					<Form >
					    <Form.Field >
								<Input as='TextArea'  ref="hopital">
									{this.props.conseiller.hopitalText}
								</Input>
							
					    </Form.Field>
					</Form>
					 </div>
				</Segment>

					<Segment className={handicap}>
		  			<Label attached='top'  basic color='violet' className="headerProfil">
		  			<div className="titreProfil">Handicap</div>
					       <div className={"modifierFormProfil" + " "+this.props.IdProfile}>
					    		<div className={this.state.Modifierhandicap} >
						    		<Button color='red' size='mini' onClick={this.handicap.bind(this)}>
							    		<div className="modifierFormButton">
							    		 	modifier
							    		</div>
						    		</Button>
					    		</div>

					    		<div className={this.state.ValiderorientationSex} >
						    		<Button color='green' size='mini' onClick={this.handicapValider.bind(this)}>
							    		<div className="modifierFormButton" >
							    		 	Valider
							    		</div>
						    		</Button>
					    		</div>
					    	</div>
		  			 </Label>
					<div className={this.state.handicapReadOnly + " " + "textProfil" + " "+ "display-linebreak"}>  			 
					{this.props.conseiller.handicapText}
					</div>
					<div className={this.state.handicapInput + " " + "inputprofil"}>
					<Form >
					    <Form.Field >
								<Input as='TextArea'  ref="handicap">
									{this.props.conseiller.handicapText}
								</Input>
							
					    </Form.Field>
					</Form>
					 </div>
				</Segment>

				<Segment className={accident}>
		  			<Label attached='top'  basic color='violet' className="headerProfil">
		  			<div className="titreProfil">Accident</div>
					       <div className={"modifierFormProfil" + " "+this.props.IdProfile}>
					    		<div className={this.state.Modifieraccident} >
						    		<Button color='red' size='mini' onClick={this.accident.bind(this)}>
							    		<div className="modifierFormButton">
							    		 	modifier
							    		</div>
						    		</Button>
					    		</div>

					    		<div className={this.state.Valideraccident} >
						    		<Button color='green' size='mini' onClick={this.accidentValider.bind(this)}>
							    		<div className="modifierFormButton" >
							    		 	Valider
							    		</div>
						    		</Button>
					    		</div>
					    	</div>
		  			 </Label>
					<div className={this.state.accidentReadOnly + " " + "textProfil" + " "+ "display-linebreak"}>  			 
					{this.props.conseiller.accidentText}
					</div>
					<div className={this.state.accidentInput + " " + "inputprofil"}>
					<Form >
					    <Form.Field >
								<Input as='TextArea'  ref="accident">
									{this.props.conseiller.accidentText}
								</Input>
							
					    </Form.Field>
					</Form>
					 </div>
				</Segment>

					<Segment className={echecEcole}>
		  			<Label attached='top'  basic color='brown' className="headerProfil">
		  			<div className="titreProfil">Echec scolaire</div>
					       <div className={"modifierFormProfil" + " "+this.props.IdProfile}>
					    		<div className={this.state.ModifierechecEcole} >
						    		<Button color='red' size='mini' onClick={this.echecEcole.bind(this)}>
							    		<div className="modifierFormButton">
							    		 	modifier
							    		</div>
						    		</Button>
					    		</div>

					    		<div className={this.state.ValiderechecEcole} >
						    		<Button color='green' size='mini' onClick={this.echechEcoleValider.bind(this)}>
							    		<div className="modifierFormButton" >
							    		 	Valider
							    		</div>
						    		</Button>
					    		</div>
					    	</div>
		  			 </Label>
					<div className={this.state.echecEcoleReadOnly + " " + "textProfil" + " "+ "display-linebreak"}>  			 
					{this.props.conseiller.echecEcoleText}
					</div>
					<div className={this.state.echecEcoleInput + " " + "inputprofil"}>
					<Form >
					    <Form.Field >
								<Input as='TextArea'  ref="echecEcole">
									{this.props.conseiller.echecEcoleText}
								</Input>
							
					    </Form.Field>
					</Form>
					 </div>
				</Segment>

					<Segment className={Harcelement}>
		  			<Label attached='top'  basic color='brown' className="headerProfil">
		  			<div className="titreProfil">Harcèlement</div>
					       <div className={"modifierFormProfil" + " "+this.props.IdProfile}>
					    		<div className={this.state.Modifierharcelement} >
						    		<Button color='red' size='mini' onClick={this.Harcelement.bind(this)}>
							    		<div className="modifierFormButton">
							    		 	modifier
							    		</div>
						    		</Button>
					    		</div>

					    		<div className={this.state.Validerharcelement} >
						    		<Button color='green' size='mini' onClick={this.HarcelementValider.bind(this)}>
							    		<div className="modifierFormButton" >
							    		 	Valider
							    		</div>
						    		</Button>
					    		</div>
					    	</div>
		  			 </Label>
					<div className={this.state.harcelementReadOnly + " " + "textProfil" + " "+ "display-linebreak"}>  			 
					{this.props.conseiller.HarcelementText}
					</div>
					<div className={this.state.harcelementInput + " " + "inputprofil"}>
					<Form >
					    <Form.Field >
								<Input as='TextArea'  ref="Harcelement">
									{this.props.conseiller.HarcelementText}
								</Input>
							
					    </Form.Field>
					</Form>
					 </div>
				</Segment>

					<Segment className={discrimination}>
		  			<Label attached='top'  basic color='brown' className="headerProfil">
		  			<div className="titreProfil">Discrimination</div>
					       <div className={"modifierFormProfil" + " "+this.props.IdProfile}>
					    		<div className={this.state.Modifierdiscrimination} >
						    		<Button color='red' size='mini' onClick={this.discrimination.bind(this)}>
							    		<div className="modifierFormButton">
							    		 	modifier
							    		</div>
						    		</Button>
					    		</div>

					    		<div className={this.state.Validerdiscrimination} >
						    		<Button color='green' size='mini' onClick={this.amourDistanceValider.bind(this)}>
							    		<div className="modifierFormButton" >
							    		 	Valider
							    		</div>
						    		</Button>
					    		</div>
					    	</div>
		  			 </Label>
					<div className={this.state.amourDistanceReadOnly + " " + "textProfil" + " "+ "display-linebreak"}>  			 
					{this.props.conseiller.discriminationText}
					</div>
					<div className={this.state.amourDistanceInput + " " + "inputprofil"}>
					<Form >
					    <Form.Field >
								<Input as='TextArea'  ref="discrimination">
									{this.props.conseiller.discriminationText}
								</Input>
							
					    </Form.Field>
					</Form>
					 </div>
				</Segment>

					<Segment className={Violence}>
		  			<Label attached='top'  basic color='brown' className="headerProfil">
		  			<div className="titreProfil">Violence</div>
					       <div className={"modifierFormProfil" + " "+this.props.IdProfile}>
					    		<div className={this.state.Modifierviolence} >
						    		<Button color='red' size='mini' onClick={this.violence.bind(this)}>
							    		<div className="modifierFormButton">
							    		 	modifier
							    		</div>
						    		</Button>
					    		</div>

					    		<div className={this.state.Validerviolence} >
						    		<Button color='green' size='mini' onClick={this.violenceValider.bind(this)}>
							    		<div className="modifierFormButton" >
							    		 	Valider
							    		</div>
						    		</Button>
					    		</div>
					    	</div>
		  			 </Label>
					<div className={this.state.violenceReadOnly + " " + "textProfil" + " "+ "display-linebreak"}>  			 
					{this.props.conseiller.ViolenceText}
					</div>
					<div className={this.state.violenceInput + " " + "inputprofil"}>
					<Form >
					    <Form.Field >
								<Input as='TextArea'  ref="violence">
									{this.props.conseiller.ViolenceText}
								</Input>
							
					    </Form.Field>
					</Form>
					 </div>
				

					 <p></p>
				
				</Segment>
			</div>

		);
  	}
}

export default ProfilContent =  withTracker(({id}) => {
	const Handle = Meteor.subscribe('IsConseiller', id);
	const Handle2 = Meteor.subscribe('user', id);
	const Handle1 = Meteor.subscribe('Recommandations', id);
	const loading = !Handle.ready();
	const loading1 = !Handle1.ready();
	const loading2 = !Handle2.ready();
 	let Conseiller = Conseilleres.findOne({'user_id':id});
 	let user = Meteor.users.findOne({'_id':id});
 	let Recommandation = Recommandations.find({'to_id':id});
 	const reponseExists = !loading && !!Conseiller;
 	const reponseExists1 = !loading1 && !!Recommandations;
 	const reponseExists2 = !loading2 && !!user;

  return {
  	lastConnection:reponseExists2 ? user.status.lastLogin.date : '',
  	conseiller:reponseExists ? Conseiller : '',
  	Recommandations:reponseExists1 ? Recommandation.count() : '',
  	user:reponseExists2 ? user : '',
  	profile:reponseExists2 ? user.profile : '',
  	online:reponseExists2 ? user.status : '',
  	IdProfile:id==Meteor.userId() ? "visiblenote" : "none",
  	NotIdProfile:id!==Meteor.userId() ? "visiblenote" : "none",
  	isConseiller:reponseExists ? "active" : "disabled",
  };
})(ProfilContent);