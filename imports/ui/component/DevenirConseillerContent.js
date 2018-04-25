import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Segment, Button, Checkbox, Form, Header, TextArea, Divider, Message, Accordion, Icon, Radio } from 'semantic-ui-react'
import { Link, Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';

export default class DevenirConseillerContent extends Component {

	  state = {
	      activeIndex: 0,
	  	  CheckPremierAmour:false,
	      trahison:false,
	      Friendzone:false,
	      amourdistance:false,
	      separation:false,
	      timidite:false,
	      depression:false,
	      suicide:false,
	      deces:false,
	      mutilation:false,
	      premierfois:false,
	      Contraception:false,
	      mst:false,
	      viol:false,
	      avortement:false,
	      orientationSex:false,
	      Anorexie:false,
	      obesite:false,
	      drogue:false,
	      alcool:false,
	      complexe:false,
	      hopital:false,
	      handicap:false,
	      Accident:false,
	      echecEcole:false,
	      Harcelement:false,
	      Discrimination:false,
	      Violence:false,
	      ValidationConseiller:false,
	      errorConseiller:false,
	      IsConseiller:false,
	      continuer:false,

	      ValidePremierAmour: false,
	      Validetrahison:false,
	      ValideFriendzone:false,
	      Valideamourdistance:false,
	      Valideseparation:false,
	      Validetimidite:false,
	      Validedepression:false,
	      Validesuicide:false,
	      Validedeces:false,
	      Validemutilation:false,
	      Validepremierfois:false,
	      ValideContraception:false,
	      Validemst:false,
	      Valideviol:false,
	      Valideavortement:false,
	      ValideorientationSex:false,
	      ValideAnorexie:false,
	      Valideobesite:false,
	      Validedrogue:false,
	      Validealcool:false,
	      Validecomplexe:false,
	      Validehopital:false,
	      Validehandicap:false,
	      ValideAccident:false,
	      ValideechecEcole:false,
	      ValideHarcelement:false,
	      ValideDiscrimination:false,
	      ValideViolence:false,

	      erreurAmour:false,
	      erreurtrahison:false,
	      erreurFriendzone:false,
	      erreuramourdistance:false,
	      erreurseparation:false,
	      erreurtimidite:false,
	      erreurdepression:false,
	      erreursuicide:false,
	      erreurdeces:false,
	      erreurmutilation:false,
	      erreurpremierfois:false,
	      erreurContraception:false,
	      erreurmst:false,
	      erreurviol:false,
	      erreuravortement:false,
	      erreurorientationSex:false,
	      erreurAnorexie:false,
	      erreurobesite:false,
	      erreurdrogue:false,
	      erreuralcool:false,
	      erreurcomplexe:false,
	      erreurhopital:false,
	      erreurhandicap:false,
	      erreurAccident:false,
	      erreurechecEcole:false,
	      erreurHarcelement:false,
	      erreurDiscrimination:false,
	      erreurViolence:false,
	   }

	   componentWillMount(){
	   	Meteor.apply('IsConseillerHeader', [{
	          }], {
	          onResultReceived: (error, response) => {
	            if (error) console.warn(error.reason);
	            {response ?  
	             this.setState({IsConseiller:true}) :
	             this.setState({usernameExiste: 'visible'})}
		          },
	      	})
	    }

	  handleChange = (e, { value }) => this.setState({ value })

	  handleClick = (e, titleProps) => {
	    const { index } = titleProps
	    const { activeIndex } = this.state
	    const newIndex = activeIndex === index ? -1 : index

	    this.setState({ activeIndex: newIndex })
	  }

	premierAmour(value) {
	    this.setState({
	      CheckPremierAmour: !this.state.CheckPremierAmour,
	    });
	    
  	}

  	trahison(value) {
	    this.setState({
	      trahison: !this.state.trahison,
	    });
	    
  	}

  	Friendzone(value) {
	    this.setState({
	      Friendzone: !this.state.Friendzone,
	    });
	    
  	}

  	amourdistance(value) {
	    this.setState({
	      amourdistance: !this.state.amourdistance,
	    });
	    
  	}

  	separation(value) {
	    this.setState({
	      separation: !this.state.separation,
	    });
  	}

  	timidite(value) {
	    this.setState({
	      timidite: !this.state.timidite,
	    });
	    
  	}

  	depression(value) {
	    this.setState({
	      depression: !this.state.depression,
	    });
	    
  	}

  	suicide(value) {
	    this.setState({
	      suicide: !this.state.suicide,
	    });
	    
  	}

  	deces(value) {
	    this.setState({
	      deces: !this.state.deces,
	    });
	    
  	}

  	mutilation(value) {
	    this.setState({
	      mutilation: !this.state.mutilation,
	    });
	    
  	}

  	premierfois(value) {
	    this.setState({
	      premierfois: !this.state.premierfois,
	    });
	    
  	}

  	contraception(value) {
	    this.setState({
	      contraception: !this.state.contraception,
	    });
	    
  	}

  	mst(value) {
	    this.setState({
	      mst: !this.state.mst,
	    });
	    
  	}

  	viol(value) {
	    this.setState({
	      viol: !this.state.viol,
	    });
	    
  	}

  	avortement(value) {
	    this.setState({
	      avortement: !this.state.avortement,
	    });
	    
  	}

  	orientationSex(value) {
	    this.setState({
	      orientationSex: !this.state.orientationSex,
	    });
	    
  	}

  	Anorexie(value) {
	    this.setState({
	      Anorexie: !this.state.Anorexie,
	    });
	    
  	}

  	obesite(value) {
	    this.setState({
	      obesite: !this.state.obesite,
	    });
	    
  	}

  	drogue(value) {
	    this.setState({
	      drogue: !this.state.drogue,
	    });
	    
  	}

  	alcool(value) {
	    this.setState({
	      alcool: !this.state.alcool,
	    });
	    
  	}

  	complexe(value) {
	    this.setState({
	      complexe: !this.state.complexe,
	    });
	    
  	}

  	hopital(value) {
	    this.setState({
	      hopital: !this.state.hopital,
	    });
	    
  	}

  	handicap(value) {
	    this.setState({
	      handicap: !this.state.handicap,
	    });
	    
  	}

  	accident(value) {
	    this.setState({
	      accident: !this.state.accident,
	    });
	    
  	}

  	echecEcole(value) {
	    this.setState({
	      echecEcole: !this.state.echecEcole,
	    });
	    
  	}

  	Harcelement(value) {
	    this.setState({
	      Harcelement: !this.state.Harcelement,
	    });
	    
  	}

  	discrimination(value) {
	    this.setState({
	      discrimination: !this.state.discrimination,
	    });
	    
  	}

  	violence(value) {
	    this.setState({
	      violence: !this.state.Violence,
	    });
	    
  	}



  	submitPremierAmour(){
        const text = ReactDOM.findDOMNode(this.refs.textPremierAmour).value.trim();
        this.setState({erreurAmour:false})
        {
        !text ? this.setState({erreurAmour:true}):

  		Meteor.call('premierAmour',
		  	  this.state.CheckPremierAmour,
		  	  text,
		  	  (err) => {
            	if(err){
           		 } else {
              	{
			        this.setState({
				      ValidePremierAmour: true
				    })
				  
	              	}     
            	}
          	})
		}
  	}

  	submitTrahison(){
        const text = ReactDOM.findDOMNode(this.refs.textTrahison).value.trim();    
  		this.setState({erreurtrahison:false})
  		{
        !text ? this.setState({erreurtrahison:true}):
  		Meteor.call('trahison',
		  	  this.state.trahison,
		  	  text,
		  	  (err) => {
            	if(err){
           		 } else {
              	
			        this.setState({
				      Validetrahison: true
				    })
				  
	              	   
            	}
          	})
  		}
  	}

  	submitFriendzone(){
        const text = ReactDOM.findDOMNode(this.refs.textFriendzone).value.trim();    
  		this.setState({erreurFriendzone:false})
  		{
        !text ? this.setState({erreurFriendzone:true}):
  		Meteor.call('Friendzone',
		  	  this.state.Friendzone,
		  	  text,
		  	  (err) => {
            	if(err){
           		 } else {
              	{
			        this.setState({
				      ValideFriendzone: true
				    })
				  
	              	}     
            	}
          	})
  		}
  	}

  	submitAmourDistance(){
        const text = ReactDOM.findDOMNode(this.refs.textAmourDistance).value.trim();    
  		this.setState({erreuramourdistance:false})
  		{
        !text ? this.setState({erreuramourdistance:true}):
  		Meteor.call('amourdistance',
		  	  this.state.amourdistance,
		  	  text,
		  	  (err) => {
            	if(err){
           		 } else {
              	{
			        this.setState({
				      Valideamourdistance: true
				    })
				  
	              	}     
            	}
          	})
  		}
  	}

  	submitSeparation(){
        const text = ReactDOM.findDOMNode(this.refs.textSeparation).value.trim();    
  		this.setState({erreurseparation:false})
  		{
        !text ? this.setState({erreurseparation:true}):
  		Meteor.call('separation',
		  	  this.state.separation,
		  	  text,
		  	  (err) => {
            	if(err){
           		 } else {
              	{
			        this.setState({
				      Valideseparation: true
				    })
				  
	              	}     
            	}
          	})
  		}
  	}

  	submitTimidite(){
        const text = ReactDOM.findDOMNode(this.refs.textTimidite).value.trim();    
  		this.setState({erreurtimidite:false})
  		{
        !text ? this.setState({erreurtimidite:true}):
  		Meteor.call('timidite',
		  	  this.state.timidite,
		  	  text,
		  	  (err) => {
            	if(err){
           		 } else {
              	{
			        this.setState({
				      Validetimidite: true
				    })
				  
	              	}     
            	}
          	})
  		}
  	}

  	submitDepression(){
        const text = ReactDOM.findDOMNode(this.refs.textDepression).value.trim();    
  		this.setState({erreurdepression:false})
  		{
        !text ? this.setState({erreurdepression:true}):
  		Meteor.call('depression',
		  	  this.state.depression,
		  	  text,
		  	  (err) => {
            	if(err){
           		 } else {
              	{
			        this.setState({
				      Validedepression: true
				    })
				  
	              	}     
            	}
          	})
  		}
  	}

  	submitSuicide(){
        const text = ReactDOM.findDOMNode(this.refs.textSuicide).value.trim();    
  		this.setState({erreursuicide:false})
  		{
        !text ? this.setState({erreursuicide:true}):
  		Meteor.call('suicide',
		  	  this.state.suicide,
		  	  text,
		  	  (err) => {
            	if(err){
           		 } else {
              	{
			        this.setState({
				      Validesuicide: true
				    })
				  
	              	}     
            	}
          	})
  		}
  	}

  	submitDeces(){
        const text = ReactDOM.findDOMNode(this.refs.textDeces).value.trim();    
  		this.setState({erreurdeces:false})
  		{
        !text ? this.setState({erreurdeces:true}):
  		Meteor.call('deces',
		  	  this.state.deces,
		  	  text,
		  	  (err) => {
            	if(err){
           		 } else {
              	{
			        this.setState({
				      Validedeces: true
				    })
				  
	              	}     
            	}
          	})
  		}
  	}

  	submitMutilation(){
        const text = ReactDOM.findDOMNode(this.refs.textMutilation).value.trim();    
  		this.setState({erreurmutilation:false})
  		{
        !text ? this.setState({erreurmutilation:true}):
  		Meteor.call('mutilation',
		  	  this.state.mutilation,
		  	  text,
		  	  (err) => {
            	if(err){
           		 } else {
              	{
			        this.setState({
				      Validemutilation: true
				    })
				  
	              	}     
            	}
          	})
  		}
  	}

  	submitPremierFois(){
        const text = ReactDOM.findDOMNode(this.refs.textPremiereFois).value.trim();    
  		this.setState({erreurpremierfois:false})
  		{
        !text ? this.setState({erreurpremierfois:true}):
  		Meteor.call('premierfois',
		  	  this.state.premierfois,
		  	  text,
		  	  (err) => {
            	if(err){
           		 } else {
              	{
			        this.setState({
				      Validepremierfois: true
				    })
				  
	              	}     
            	}
          	})
  		}
  	}

  	submitContraception(){
        const text = ReactDOM.findDOMNode(this.refs.textContraception).value.trim();    
  		this.setState({erreurContraception:false})
  		{
        !text ? this.setState({erreurContraception:true}):
  		Meteor.call('contraception',
		  	  this.state.contraception,
		  	  text,
		  	  (err) => {
            	if(err){
           		 } else {
              	{
			        this.setState({
				      ValideContraception: true
				    })
				  
	              	}     
            	}
          	})
  		}
  	}

  	submitMST(){
        const text = ReactDOM.findDOMNode(this.refs.textMST).value.trim();    
  		this.setState({erreurmst:false})
  		{
        !text ? this.setState({erreurmst:true}):
  		Meteor.call('mst',
		  	  this.state.mst,
		  	  text,
		  	  (err) => {
            	if(err){
           		 } else {
              	{
			        this.setState({
				      Validemst: true
				    })
				  
	              	}     
            	}
          	})
  		}
  	}

  	submitViol(){
        const text = ReactDOM.findDOMNode(this.refs.textViol).value.trim();    
  		this.setState({erreurviol:false})
  		{
        !text ? this.setState({erreurviol:true}):
  		Meteor.call('viol',
		  	  this.state.viol,
		  	  text,
		  	  (err) => {
            	if(err){
           		 } else {
              	{
			        this.setState({
				      Valideviol: true
				    })
				  
	              	}     
            	}
          	})
  		}
  	}

  	submitAvortement(){
        const text = ReactDOM.findDOMNode(this.refs.textAvortement).value.trim();    
  		this.setState({erreuravortement:false})
  		{
        !text ? this.setState({erreuravortement:true}):
  		Meteor.call('avortement',
		  	  this.state.avortement,
		  	  text,
		  	  (err) => {
            	if(err){
           		 } else {
              	{
			        this.setState({
				      Valideavortement: true
				    })
				  
	              	}     
            	}
          	})
  		}
  	}

  	submitOrientationSex(){
        const text = ReactDOM.findDOMNode(this.refs.textOrientationSex).value.trim();    
  		this.setState({erreurorientationSex:false})
  		{
        !text ? this.setState({erreurorientationSex:true}):
  		Meteor.call('orientationSex',
		  	  this.state.orientationSex,
		  	  text,
		  	  (err) => {
            	if(err){
           		 } else {
              	{
			        this.setState({
				      ValideorientationSex: true
				    })
				  
	              	}     
            	}
          	})
  		}
  	}

  	submitAnorexie(){
        const text = ReactDOM.findDOMNode(this.refs.textAnorexie).value.trim();    
  		this.setState({erreurAnorexie:false})
  		{
        !text ? this.setState({erreurAnorexie:true}):
  		Meteor.call('Anorexie',
		  	  this.state.Anorexie,
		  	  text,
		  	  (err) => {
            	if(err){
           		 } else {
              	{
			        this.setState({
				      ValideAnorexie: true
				    })
				  
	              	}     
            	}
          	})
  		}
  	}

  	submitObesite(){
        const text = ReactDOM.findDOMNode(this.refs.textObesite).value.trim();    
  		this.setState({erreurobesite:false})
  		{
        !text ? this.setState({erreurobesite:true}):
  		Meteor.call('obesite',
		  	  this.state.obesite,
		  	  text,
		  	  (err) => {
            	if(err){
           		 } else {
              	{
			        this.setState({
				      Valideobesite: true
				    })
				  
	              	}     
            	}
          	})
  		}
  	}

  	submitDrogue(){
        const text = ReactDOM.findDOMNode(this.refs.textDrogue).value.trim();    
  		this.setState({erreurdrogue:false})
  		{
        !text ? this.setState({erreurdrogue:true}):
  		Meteor.call('drogue',
		  	  this.state.drogue,
		  	  text,
		  	  (err) => {
            	if(err){
           		 } else {
              	{
			        this.setState({
				      Validedrogue: true
				    })
				  
	              	}     
            	}
          	})
  		}
  	}

  	submitAlcool(){
        const text = ReactDOM.findDOMNode(this.refs.textAlcool).value.trim();    
  		this.setState({erreuralcool:false})
  		{
        !text ? this.setState({erreuralcool:true}):
  		Meteor.call('alcool',
		  	  this.state.alcool,
		  	  text,
		  	  (err) => {
            	if(err){
           		 } else {
              	{
			        this.setState({
				      Validealcool: true
				    })
				  
	              	}     
            	}
          	})
  		}
  	}

  	submitComplexe(){
        const text = ReactDOM.findDOMNode(this.refs.textComplexe).value.trim();    
  		this.setState({erreurcomplexe:false})
  		{
        !text ? this.setState({erreurcomplexe:true}):
  		Meteor.call('complexe',
		  	  this.state.complexe,
		  	  text,
		  	  (err) => {
            	if(err){
           		 } else {
              	{
			        this.setState({
				      Validecomplexe: true
				    })
				  
	              	}     
            	}
          	})
  		}
  	}

  	submitHopital(){
        const text = ReactDOM.findDOMNode(this.refs.textHopital).value.trim();    
  		this.setState({erreurhopital:false})
  		{
        !text ? this.setState({erreurhopital:true}):
  		Meteor.call('hopital',
		  	  this.state.hopital,
		  	  text,
		  	  (err) => {
            	if(err){
           		 } else {
              	{
			        this.setState({
				      Validehopital: true
				    })
				  
	              	}     
            	}
          	})
  		}
  	}

  	submitHandicap(){
        const text = ReactDOM.findDOMNode(this.refs.textHandicap).value.trim();    
  		this.setState({erreurhandicap:false})
  		{
        !text ? this.setState({erreurhandicap:true}):
  		Meteor.call('handicap',
		  	  this.state.handicap,
		  	  text,
		  	  (err) => {
            	if(err){
           		 } else {
              	{
			        this.setState({
				      Validehandicap: true
				    })
				  
	              	}     
            	}
          	})
  		}
  	}

  	submitAccident(){
        const text = ReactDOM.findDOMNode(this.refs.textAccident).value.trim();    
  		this.setState({erreurAccident:false})
  		{
        !text ? this.setState({erreurAccident:true}):
  		Meteor.call('accident',
		  	  this.state.accident,
		  	  text,
		  	  (err) => {
            	if(err){
           		 } else {
              	{
			        this.setState({
				      ValideAccident: true
				    })
				  
	              	}     
            	}
          	})
  		}
  	}

  	submitEchecEcole(){
        const text = ReactDOM.findDOMNode(this.refs.textEchecEcole).value.trim();    
  		this.setState({erreurechecEcole:false})
  		{
        !text ? this.setState({erreurechecEcole:true}):
  		Meteor.call('echecEcole',
		  	  this.state.echecEcole,
		  	  text,
		  	  (err) => {
            	if(err){
           		 } else {
              	{
			        this.setState({
				      ValideechecEcole: true
				    })
				  
	              	}     
            	}
          	})
  		}
  	}

  	submitHarcelement(){
        const text = ReactDOM.findDOMNode(this.refs.textharcelement).value.trim();    
  		this.setState({erreurHarcelement:false})
  		{
        !text ? this.setState({erreurHarcelement:true}):
  		Meteor.call('Harcelement',
		  	  this.state.Harcelement,
		  	  text,
		  	  (err) => {
            	if(err){
           		 } else {
              	{
			        this.setState({
				      ValideHarcelement: true
				    })
				  
	              	}     
            	}
          	})
  		}
  	}

  	submitDiscrimination(){
        const text = ReactDOM.findDOMNode(this.refs.textDiscrimination).value.trim();    
  		this.setState({erreurDiscrimination:false})
  		{
        !text ? this.setState({erreurDiscrimination:true}):
  		Meteor.call('discrimination',
		  	  this.state.discrimination,
		  	  text,
		  	  (err) => {
            	if(err){
           		 } else {
              	{
			        this.setState({
				      ValideDiscrimination: true
				    })
				  
	              	}     
            	}
          	})
  		}
  	}

  	submitViolence(){
        const text = ReactDOM.findDOMNode(this.refs.textViolence).value.trim();    
  		this.setState({erreurViolence:false})
  		{
        !text ? this.setState({erreurViolence:true}):
  		Meteor.call('Violence',
		  	  this.state.violence,
		  	  text,
		  	  (err) => {
            	if(err){
           		 } else {
              	{
			        this.setState({
				      ValideViolence: true
				    })
				  
	              	}     
            	}
          	})
  		}
  	}

  	continuer(){
          
  		this.setState({continuer:true})

  	}

	  Submit(event) {
        event.preventDefault();
        const presentation = ReactDOM.findDOMNode(this.refs.presentation).value.trim();
        {presentation == ''
         ?
        this.setState({ errorConseiller: true})
         :
	    Meteor.call('DevenirConseiller',
			  	  presentation,
			  	  (err) => {
	            	if(err){
	           		 } else {
	              	{
				        this.setState({
					      ValidationConseiller: true
					    })
					  
		              	}     
	            	}
	          	})
		}

	   }

  	render() {
		const { activeIndex } = this.state;
		const myId = Meteor.userId();
		    if (!Meteor.loggingIn() && !Meteor.userId()){
      		return <Redirect to="/" />;
    		}
    		if (this.state.ValidationConseiller){
      		return <Redirect to={'/profil/' + myId}/>;
    		}

		return (
			<div className="MainContent">
				<div className={this.state.IsConseiller ? '' : 'none'}>
					<Segment>
						Tu es déjà conseiller.
					</Segment>
				</div>
			<div className={this.state.IsConseiller ? 'none' : ''}>
				<Segment className="MainContent">
					<Header>
					Devenir conseiller
					</Header>
					<Divider />

					<p className="consigne">Remplis soigneusement ce formulaire afin de devenir conseiller.</p>
					<p className="consigne">
					Tous le monde pourra te contacter afin d'obtenir de l'aide dans les domaines que tu auras choisis.
					</p>
					<div className="consigne2">
					<Message info >
					    <Message.Header>Important</Message.Header>
					    <Message.List>
					      <Message.Item>Valide ton inscription une fois le formulaire terminé </Message.Item>
					      <Message.Item>Renseigne uniquement les situations que tu as personnellement vécus. </Message.Item>
					      <Message.Item>Tu peux à tout moment <u><strong>compléter ou modifier</strong></u> ce formulaire après la validation de ton inscription</Message.Item>
					    </Message.List>
					</Message>
					</div>
					<Form error onSubmit={this.Submit.bind(this)}>
					    <Form.Field >
					      <label >
					      	<div className="consigne1">
					      		Quelques mots pour te présenter 
					      	</div>
					      	<div className="consigne3">
					      		*Obligatoire
					      	</div>
					      </label>
					      <TextArea autoHeight ref="presentation" rows={5} />
					       <Message
						            hidden={!this.state.errorConseiller}
						            error={this.state.errorConseiller}
						            header='La présentation est obligatoire'
						         />
					    </Form.Field>

					    <Button
					      onClick={this.continuer.bind(this)}
					      color="green"
					      >
					      Continuer
						</Button>

					    <Button
					     type='submit'
					     color="green"
					     disabled={!this.state.continuer}
					     >
					     Valider mon inscription
					     </Button>
					</Form>

					 <p></p>


				<div className={this.state.continuer==false ? "none" : "Accordeonvisible"}>	 
					<Accordion styled>
				        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
				          <Icon name='dropdown' />
				          Premier amour 
				        </Accordion.Title>
				        <Accordion.Content active={activeIndex === 0}>
				            <Form success error>
				           		<Form.Field>
						          <b>Souhaites-tu aider ceux qui vivent leur premier amour ? </b>
						        </Form.Field>
						        <Form.Field>
						          <Radio
						            label='Oui'
						            name='radioGroup'
						            value='oui'
						            checked={this.state.CheckPremierAmour}
						            onChange={this.handleChange}
						            onClick={(e, { value }) => this.premierAmour(value)}
						          />
						        </Form.Field>
						        <Form.Field>
						          <Radio
						            label='Non'
						            name='radioGroup'
						            value='non'
						            checked={!this.state.CheckPremierAmour}
						            onChange={this.handleChange}
						            onClick={(e, { value }) => this.premierAmour(value)}
						          />
						        </Form.Field>
							    <Form.Field>
							      <label>Si oui, explique brièvement les conseils que tu pourrais apporter en partageant ton expérience.</label>
							      <TextArea ref="textPremierAmour" rows={8} />
							    </Form.Field>
							    <Message
						            hidden={!this.state.ValidePremierAmour}
						            success={this.state.ValidePremierAmour}
						            header='Cette partie du formulaire a bien été enregistrée'
						         />
								<Message
								    hidden={!this.state.erreurAmour}
								    error={this.state.erreurAmour}
								    header='Description vide'
								    content='Explique en quelques mots les conseils que tu peux apporter'
						    	/>
							    <Button
							      onClick={this.submitPremierAmour.bind(this)}
							      color="green"
							      size='tiny'>
							      Valider
							    </Button>
							    <div className={this.state.ValidePremierAmour ? 'none' : 'ConfirmationForm'}>
							        <Button
								      color={this.state.ValidePremierAmour ? "green" : "red"}
								      size='tiny'
								      disabled
								      >
								      {this.state.ValidePremierAmour ? "Enregitré" : "Non enregistré"}
								    </Button>
								</div>
							 </Form>
				        </Accordion.Content>





				        <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
				          <Icon name='dropdown' />
				          Trahison
				        </Accordion.Title>
				        <Accordion.Content active={activeIndex === 1}>
				            <Form success error>
				           		<Form.Field>
						          <b>As-tu vécu une trahison amoureuse ?  </b>
						        </Form.Field>
						        <Form.Field>
						          <Radio
						            label='Oui'
						            name='radioGroup'
						            value='oui'
						            checked={this.state.trahison}
						            onChange={this.handleChange}
						            onClick={(e, { value }) => this.trahison(value)}
						          />
						        </Form.Field>
						        <Form.Field>
						          <Radio
						            label='Non'
						            name='radioGroup'
						            value='non'
						            checked={!this.state.trahison}
						            onChange={this.handleChange}
						            onClick={(e, { value }) => this.trahison(value)}
						          />
						        </Form.Field>
							    <Form.Field>
							      <label>Si oui, explique brièvement les conseils que tu pourrais apporter en partageant ton expérience.</label>
							      <TextArea ref="textTrahison" rows={8} />
							    </Form.Field>
							     <Message
						            hidden={!this.state.Validetrahison}
						            success={this.state.Validetrahison}
						            header='Cette partie du formulaire a bien été enregistrée'
						         />
						         <Message
								    hidden={!this.state.erreurtrahison}
								    error={this.state.erreurtrahison}
								    header='Description vide'
								    content='Explique en quelques mots les conseils que tu peux apporter'
						    	/>
							    <Button
							     onClick={this.submitTrahison.bind(this)}
							     color="green"
							     size='tiny'>
							     Valider
							     </Button>
							    <div className={this.state.Validetrahison ? 'none' : 'ConfirmationForm'}>
							        <Button
								      color={this.state.Validetrahison ? "green" : "red"}
								      size='tiny'
								      disabled
								      >
								      {this.state.Validetrahison ? "Enregitré" : "Non enregistré"}
								    </Button>
								</div>
							 </Form>
				        </Accordion.Content>



				         <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
				          <Icon name='dropdown' />
				          Friendzone
				        </Accordion.Title>
				        <Accordion.Content active={activeIndex === 2}>
				            <Form success error>
				           		<Form.Field>
						          <b>As-tu déjà connu la FriendZone ?  </b>
						        </Form.Field>
						        <Form.Field>
						          <Radio
						            label='Oui'
						            name='radioGroup'
						            value='oui'
						            checked={this.state.Friendzone}
						            onChange={this.handleChange}
						            onClick={(e, { value }) => this.Friendzone(value)}
						          />
						        </Form.Field>
						        <Form.Field>
						          <Radio
						            label='Non'
						            name='radioGroup'
						            value='non'
						            checked={!this.state.Friendzone}
						            onChange={this.handleChange}
						            onClick={(e, { value }) => this.Friendzone(value)}
						          />
						        </Form.Field>
							    <Form.Field>
							      <label>Si oui, explique brièvement les conseils que tu pourrais apporter en partageant ton expérience.</label>
							      <TextArea ref="textFriendzone" rows={8} />
							    </Form.Field>
							     <Message
						            hidden={!this.state.ValideFriendzone}
						            success={this.state.ValideFriendzone}
						            header='Cette partie du formulaire a bien été enregistrée'
						         />
						         <Message
								    hidden={!this.state.erreurFriendzone}
								    error={this.state.erreurFriendzone}
								    header='Description vide'
								    content='Explique en quelques mots les conseils que tu peux apporter'
						    	/>
							    <Button
							     onClick={this.submitFriendzone.bind(this)}
							     color="green"
							     size='tiny'>
							     Valider
							     </Button>
							    <div className={this.state.ValideFriendzone ? 'none' : 'ConfirmationForm'}>
							        <Button
								      color={this.state.ValideFriendzone ? "green" : "red"}
								      size='tiny'
								      disabled
								      >
								      {this.state.ValideFriendzone ? "Enregitré" : "Non enregistré"}
								    </Button>
								</div>
							 </Form>
				         </Accordion.Content>



				         <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}>
				          <Icon name='dropdown' />
				          Amour à distance
				        </Accordion.Title>
				        <Accordion.Content active={activeIndex === 3}>
				            <Form success error>
				           		<Form.Field>
						          <b>As-tu déjà vécu une relation à distance ?  </b>
						        </Form.Field>
						        <Form.Field>
						          <Radio
						            label='Oui'
						            name='radioGroup'
						            value='oui'
						            checked={this.state.amourdistance}
						            onChange={this.handleChange}
						            onClick={(e, { value }) => this.amourdistance(value)}
						          />
						        </Form.Field>
						        <Form.Field>
						          <Radio
						            label='Non'
						            name='radioGroup'
						            value='non'
						            checked={!this.state.amourdistance}
						            onChange={this.handleChange}
						            onClick={(e, { value }) => this.amourdistance(value)}
						          />
						        </Form.Field>
							    <Form.Field>
							      <label>Si oui, explique brièvement les conseils que tu pourrais apporter en partageant ton expérience.</label>
							      <TextArea ref="textAmourDistance" rows={8} />
							    </Form.Field>
							     <Message
						            hidden={!this.state.Valideamourdistance}
						            success={this.state.Valideamourdistance}
						            header='Cette partie du formulaire a bien été enregistrée'
						         />
						         <Message
								    hidden={!this.state.erreuramourdistance}
								    error={this.state.erreuramourdistance}
								    header='Description vide'
								    content='Explique en quelques mots les conseils que tu peux apporter'
						    	/>
							    <Button
							     onClick={this.submitAmourDistance.bind(this)}
							     color="green"
							     size='tiny'>
							     Valider
							     </Button>
							     <div className={this.state.Valideamourdistance ? 'none' : 'ConfirmationForm'}>
							        <Button
								      color={this.state.Valideamourdistance ? "green" : "red"}
								      size='tiny'
								      disabled
								      >
								      {this.state.Valideamourdistance ? "Enregitré" : "Non enregistré"}
								    </Button>
								</div>
							 </Form>
				         </Accordion.Content>



				         <Accordion.Title active={activeIndex === 4} index={4} onClick={this.handleClick}>
				          <Icon name='dropdown' />
				          Séparation
				        </Accordion.Title>
				        <Accordion.Content active={activeIndex === 4}>
				            <Form success error>
				           		<Form.Field>
						          <b>As-tu déjà vécu une séparation amoureuse ?  </b>
						        </Form.Field>
						        <Form.Field>
						          <Radio
						            label='Oui'
						            name='radioGroup'
						            value='oui'
						            checked={this.state.separation}
						            onChange={this.handleChange}
						            onClick={(e, { value }) => this.separation(value)}
						          />
						        </Form.Field>
						        <Form.Field>
						          <Radio
						            label='Non'
						            name='radioGroup'
						            value='non'
						            checked={!this.state.separation}
						            onChange={this.handleChange}
						            onClick={(e, { value }) => this.separation(value)}
						          />
						        </Form.Field>
							    <Form.Field>
							      <label>Si oui, explique brièvement les conseils que tu pourrais apporter en partageant ton expérience.</label>
							      <TextArea ref="textSeparation" rows={8} />
							    </Form.Field>
							     <Message
						            hidden={!this.state.Valideseparation}
						            success={this.state.Valideseparation}
						            header='Cette partie du formulaire a bien été enregistrée'
						         />
						         <Message
								    hidden={!this.state.erreurseparation}
								    error={this.state.erreurseparation}
								    header='Description vide'
								    content='Explique en quelques mots les conseils que tu peux apporter'
						    	/>
							    <Button
							     onClick={this.submitSeparation.bind(this)}
							     color="green"
							     size='tiny'>
							     Valider
							     </Button>
							    <div className={this.state.Valideseparation ? 'none' : 'ConfirmationForm'}>
							        <Button
								      color={this.state.Valideseparation ? "green" : "red"}
								      size='tiny'
								      disabled
								      >
								      {this.state.Valideseparation ? "Enregitré" : "Non enregistré"}
								    </Button>
								</div>
							 </Form>
				         </Accordion.Content>



				         <Accordion.Title active={activeIndex === 5} index={5} onClick={this.handleClick}>
				          <Icon name='dropdown' />
				          Timidité
				        </Accordion.Title>
				        <Accordion.Content active={activeIndex === 5}>
				            <Form success error>
				           		<Form.Field>
						          <b>As-tu déjà souffert de ta timidité ? As-tu repris confiance en toi ?  </b>
						        </Form.Field>
						        <Form.Field>
						          <Radio
						            label='Oui'
						            name='radioGroup'
						            value='oui'
						            checked={this.state.timidite}
						            onChange={this.handleChange}
						            onClick={(e, { value }) => this.timidite(value)}
						          />
						        </Form.Field>
						        <Form.Field>
						          <Radio
						            label='Non'
						            name='radioGroup'
						            value='non'
						            checked={!this.state.timidite}
						            onChange={this.handleChange}
						            onClick={(e, { value }) => this.timidite(value)}
						          />
						        </Form.Field>
							    <Form.Field>
							      <label>Si oui, explique brièvement les conseils que tu pourrais apporter en partageant ton expérience.</label>
							      <TextArea ref="textTimidite" rows={8} />
							    </Form.Field>
							     <Message
						            hidden={!this.state.Validetimidite}
						            success={this.state.Validetimidite}
						            header='Cette partie du formulaire a bien été enregistrée'
						         />
						         <Message
								    hidden={!this.state.erreurtimidite}
								    error={this.state.erreurtimidite}
								    header='Description vide'
								    content='Explique en quelques mots les conseils que tu peux apporter'
						    	/>
							    <Button
							     onClick={this.submitTimidite.bind(this)}
							     color="green"
							     size='tiny'>
							     Valider
							     </Button>
							    <div className={this.state.Validetimidite ? 'none' : 'ConfirmationForm'}>
							        <Button
								      color={this.state.Validetimidite ? "green" : "red"}
								      size='tiny'
								      disabled
								      >
								      {this.state.Validetimidite ? "Enregitré" : "Non enregistré"}
								    </Button>
								</div>
							 </Form>
				         </Accordion.Content>



				         <Accordion.Title active={activeIndex === 6} index={6} onClick={this.handleClick}>
				          <Icon name='dropdown' />
				          Dépression
				        </Accordion.Title>
				        <Accordion.Content active={activeIndex === 6}>
				            <Form success error>
				           		<Form.Field>
						          <b>As-tu connu des périodes de dépression ? Quelqu’un dans ton entourage a-t-il vécu des périodes de dépression ?  </b>
						        </Form.Field>
						        <Form.Field>
						          <Radio
						            label='Oui'
						            name='radioGroup'
						            value='oui'
						            checked={this.state.depression}
						            onChange={this.handleChange}
						            onClick={(e, { value }) => this.depression(value)}
						          />
						        </Form.Field>
						        <Form.Field>
						          <Radio
						            label='Non'
						            name='radioGroup'
						            value='non'
						            checked={!this.state.depression}
						            onChange={this.handleChange}
						            onClick={(e, { value }) => this.depression(value)}
						          />
						        </Form.Field>
							    <Form.Field>
							      <label>Si oui, explique brièvement les conseils que tu pourrais apporter en partageant ton expérience.</label>
							      <TextArea ref="textDepression" rows={8} />
							    </Form.Field>
							     <Message
						            hidden={!this.state.Validedepression}
						            success={this.state.Validedepression}
						            header='Cette partie du formulaire a bien été enregistrée'
						         />
						         <Message
								    hidden={!this.state.erreurdepression}
								    error={this.state.erreurdepression}
								    header='Description vide'
								    content='Explique en quelques mots les conseils que tu peux apporter'
						    	/>
							    <Button
							     onClick={this.submitDepression.bind(this)}
							     color="green"
							     size='tiny'>
							     Valider
							     </Button>
							    <div className={this.state.Validedepression ? 'none' : 'ConfirmationForm'}>
							        <Button
								      color={this.state.Validedepression ? "green" : "red"}
								      size='tiny'
								      disabled
								      >
								      {this.state.Validedepression ? "Enregitré" : "Non enregistré"}
								    </Button>
								</div>
							 </Form>
				         </Accordion.Content>



				         <Accordion.Title active={activeIndex === 7} index={7} onClick={this.handleClick}>
				          <Icon name='dropdown' />
				          Mutilation
				        </Accordion.Title>
				        <Accordion.Content active={activeIndex === 7}>
				            <Form success error>
				           		<Form.Field>
						          <b>Est-ce qu’il t’est déjà arrivé de te mutiler ? Quelqu’un dans ton entourage se mutile t-il ?  </b>
						        </Form.Field>
						        <Form.Field>
						          <Radio
						            label='Oui'
						            name='radioGroup'
						            value='oui'
						            checked={this.state.mutilation}
						            onChange={this.handleChange}
						            onClick={(e, { value }) => this.mutilation(value)}
						          />
						        </Form.Field>
						        <Form.Field>
						          <Radio
						            label='Non'
						            name='radioGroup'
						            value='non'
						            checked={!this.state.mutilation}
						            onChange={this.handleChange}
						            onClick={(e, { value }) => this.mutilation(value)}
						          />
						        </Form.Field>
							    <Form.Field>
							      <label>Si oui, explique brièvement les conseils que tu pourrais apporter en partageant ton expérience.</label>
							      <TextArea ref="textMutilation" rows={8} />
							    </Form.Field>
							     <Message
						            hidden={!this.state.Validemutilation}
						            success={this.state.Validemutilation}
						            header='Cette partie du formulaire a bien été enregistrée'
						         />
						         <Message
								    hidden={!this.state.erreurmutilation}
								    error={this.state.erreurmutilation}
								    header='Description vide'
								    content='Explique en quelques mots les conseils que tu peux apporter'
						    	/>
							    <Button
							     onClick={this.submitMutilation.bind(this)}
							     color="green"
							     size='tiny'>
							     Valider
							     </Button>
							     <div className={this.state.Validemutilation ? 'none' : 'ConfirmationForm'}>
							        <Button
								      color={this.state.Validemutilation ? "green" : "red"}
								      size='tiny'
								      disabled
								      >
								      {this.state.Validemutilation ? "Enregitré" : "Non enregistré"}
								    </Button>
								</div>
							 </Form>
				         </Accordion.Content>



				         <Accordion.Title active={activeIndex === 8} index={8} onClick={this.handleClick}>
				          <Icon name='dropdown' />
				          Suicide
				        </Accordion.Title>
				        <Accordion.Content active={activeIndex === 8}>
				            <Form success error>
				           		<Form.Field>
						          <b>As-tu déjà fait une tentative de suicide ? Quelqu’un dans ton entourage a t-il fait des tentatives de suicide ?  </b>
						        </Form.Field>
						        <Form.Field>
						          <Radio
						            label='Oui'
						            name='radioGroup'
						            value='oui'
						            checked={this.state.suicide}
						            onChange={this.handleChange}
						            onClick={(e, { value }) => this.suicide(value)}
						          />
						        </Form.Field>
						        <Form.Field>
						          <Radio
						            label='Non'
						            name='radioGroup'
						            value='non'
						            checked={!this.state.suicide}
						            onChange={this.handleChange}
						            onClick={(e, { value }) => this.suicide(value)}
						          />
						        </Form.Field>
							    <Form.Field>
							      <label>Si oui, explique brièvement les conseils que tu pourrais apporter en partageant ton expérience.</label>
							      <TextArea ref="textSuicide"  rows={8} />
							    </Form.Field>
							     <Message
						            hidden={!this.state.Validesuicide}
						            success={this.state.Validesuicide}
						            header='Cette partie du formulaire a bien été enregistrée'
						         />
						         <Message
								    hidden={!this.state.erreursuicide}
								    error={this.state.erreursuicide}
								    header='Description vide'
								    content='Explique en quelques mots les conseils que tu peux apporter'
						    	/>
							    <Button
							     onClick={this.submitSuicide.bind(this)}
							     color="green"
							     size='tiny'>
							     Valider
							     </Button>
							     <div className={this.state.Validesuicide ? 'none' : 'ConfirmationForm'}>
							        <Button
								      color={this.state.Validesuicide ? "green" : "red"}
								      size='tiny'
								      disabled
								      >
								      {this.state.Validesuicide ? "Enregitré" : "Non enregistré"}
								    </Button>
								</div>
							 </Form>
				         </Accordion.Content>



				         <Accordion.Title active={activeIndex === 9} index={9} onClick={this.handleClick}>
				          <Icon name='dropdown' />
				          Décès
				        </Accordion.Title>
				        <Accordion.Content active={activeIndex === 9}>
				            <Form success error>
				           		<Form.Field>
						          <b>As-tu été profondément marqué par le décès d’un proche ?  </b>
						        </Form.Field>
						        <Form.Field>
						          <Radio
						            label='Oui'
						            name='radioGroup'
						            value='oui'
						            checked={this.state.de}
						            onChange={this.handleChange}
						            onClick={(e, { value }) => this.deces(value)}
						          />
						        </Form.Field>
						        <Form.Field>
						          <Radio
						            label='Non'
						            name='radioGroup'
						            value='non'
						            checked={!this.state.deces}
						            onChange={this.handleChange}
						            onClick={(e, { value }) => this.deces(value)}
						          />
						        </Form.Field>
							    <Form.Field>
							      <label>Si oui, explique brièvement les conseils que tu pourrais apporter en partageant ton expérience.</label>
							      <TextArea ref="textDeces"  rows={8} />
							    </Form.Field>
							     <Message
						            hidden={!this.state.Validedeces}
						            success={this.state.Validedeces}
						            header='Cette partie du formulaire a bien été enregistrée'
						         />
						         <Message
								    hidden={!this.state.erreurdeces}
								    error={this.state.erreurdeces}
								    header='Description vide'
								    content='Explique en quelques mots les conseils que tu peux apporter'
						    	/>
							    <Button
							     onClick={this.submitDeces.bind(this)}
							     color="green"
							     size='tiny'>
							     Valider
							     </Button>
							    <div className={this.state.Validedeces ? 'none' : 'ConfirmationForm'}>
							        <Button
								      color={this.state.Validedeces ? "green" : "red"}
								      size='tiny'
								      disabled
								      >
								      {this.state.Validedeces ? "Enregitré" : "Non enregistré"}
								    </Button>
								</div>
							 </Form>
				         </Accordion.Content>



				         <Accordion.Title active={activeIndex === 10} index={10} onClick={this.handleClick}>
				          <Icon name='dropdown' />
				          Première fois
				        </Accordion.Title>
				        <Accordion.Content active={activeIndex === 10}>
				            <Form success error>
				           		<Form.Field>
						          <b>Souhaites-tu aider ceux qui se pose des questions sur leur premier rapport sexuel ?   </b>
						        </Form.Field>
						        <Form.Field>
						          <Radio
						            label='Oui'
						            name='radioGroup'
						            value='oui'
						            checked={this.state.premierfois}
						            onChange={this.handleChange}
						            onClick={(e, { value }) => this.premierfois(value)}
						          />
						        </Form.Field>
						        <Form.Field>
						          <Radio
						            label='Non'
						            name='radioGroup'
						            value='non'
						            checked={!this.state.premierfois}
						            onChange={this.handleChange}
						            onClick={(e, { value }) => this.premierfois(value)}
						          />
						        </Form.Field>
							    <Form.Field>
							      <label>Si oui, explique brièvement les conseils que tu pourrais apporter en partageant ton expérience.</label>
							      <TextArea ref="textPremiereFois" rows={8} />
							    </Form.Field>
							     <Message
						            hidden={!this.state.Validepremierfois}
						            success={this.state.Validepremierfois}
						            header='Cette partie du formulaire a bien été enregistrée'
						         />
						         <Message
								    hidden={!this.state.erreurpremierfois}
								    error={this.state.erreurpremierfois}
								    header='Description vide'
								    content='Explique en quelques mots les conseils que tu peux apporter'
						    	/>
							    <Button
							     onClick={this.submitPremierFois.bind(this)}
							     color="green"
							     size='tiny'>
							     Valider
							     </Button>
							    <div className={this.state.Validepremierfois ? 'none' : 'ConfirmationForm'}>
							        <Button
								      color={this.state.Validepremierfois ? "green" : "red"}
								      size='tiny'
								      disabled
								      >
								      {this.state.Validepremierfois ? "Enregitré" : "Non enregistré"}
								    </Button>
								</div>
							 </Form>
				         </Accordion.Content>



				         <Accordion.Title active={activeIndex === 11} index={11} onClick={this.handleClick}>
				          <Icon name='dropdown' />
				          Contraception
				        </Accordion.Title>
				        <Accordion.Content active={activeIndex === 11}>
				            <Form success error>
				           		<Form.Field>
						          <b>Souhaites-tu aider les filles qui se posent des questions sur la contraception ? </b>
						        </Form.Field>
						        <Form.Field>
						          <Radio
						            label='Oui'
						            name='radioGroup'
						            value='oui'
						            checked={this.state.contraception}
						            onChange={this.handleChange}
						            onClick={(e, { value }) => this.contraception(value)}
						          />
						        </Form.Field>
						        <Form.Field>
						          <Radio
						            label='Non'
						            name='radioGroup'
						            value='non'
						            checked={!this.state.contraception}
						            onChange={this.handleChange}
						            onClick={(e, { value }) => this.contraception(value)}
						          />
						        </Form.Field>
							    <Form.Field>
							      <label>Si oui, explique brièvement les conseils que tu pourrais apporter en partageant ton expérience.</label>
							      <TextArea ref="textContraception" rows={8} />
							    </Form.Field>
							     <Message
						            hidden={!this.state.ValideContraception}
						            success={this.state.ValideContraception}
						            header='Cette partie du formulaire a bien été enregistrée'
						         />
						         <Message
								    hidden={!this.state.erreurContraception}
								    error={this.state.erreurContraception}
								    header='Description vide'
								    content='Explique en quelques mots les conseils que tu peux apporter'
						    	/>
							    <Button
							     onClick={this.submitContraception.bind(this)}
							     color="green"
							     size='tiny'>
							     Valider
							     </Button>
							     <div className={this.state.ValideContraception ? 'none' : 'ConfirmationForm'}>
							        <Button
								      color={this.state.ValideContraception ? "green" : "red"}
								      size='tiny'
								      disabled
								      >
								      {this.state.ValideContraception ? "Enregitré" : "Non enregistré"}
								    </Button>
								</div>
							 </Form>
				         </Accordion.Content>



				         <Accordion.Title active={activeIndex === 12} index={12} onClick={this.handleClick}>
				          <Icon name='dropdown' />
				          Maladie, MST
				        </Accordion.Title>
				        <Accordion.Content active={activeIndex === 12}>
				            <Form success error>
				           		<Form.Field>
						          <b>As-tu une maladie sexuellement transmissible ? Quelqu'un dans ton entourage a-t-il une maladie sexuellement transmissible ?  </b>
						        </Form.Field>
						        <Form.Field>
						          <Radio
						            label='Oui'
						            name='radioGroup'
						            value='oui'
						            checked={this.state.mst}
						            onChange={this.handleChange}
						            onClick={(e, { value }) => this.mst(value)}
						          />
						        </Form.Field>
						        <Form.Field>
						          <Radio
						            label='Non'
						            name='radioGroup'
						            value='non'
						            checked={!this.state.mst}
						            onChange={this.handleChange}
						            onClick={(e, { value }) => this.mst(value)}
						          />
						        </Form.Field>
							    <Form.Field>
							      <label>Si oui, explique brièvement les conseils que tu pourrais apporter en partageant ton expérience.</label>
							      <TextArea ref="textMST" rows={8} />
							    </Form.Field>
							     <Message
						            hidden={!this.state.Validemst}
						            success={this.state.Validemst}
						            header='Cette partie du formulaire a bien été enregistrée'
						         />
						         <Message
								    hidden={!this.state.erreurmst}
								    error={this.state.erreurmst}
								    header='Description vide'
								    content='Explique en quelques mots les conseils que tu peux apporter'
						    	/>
							    <Button
							     onClick={this.submitMST.bind(this)}
							     color="green"
							     size='tiny'>
							     Valider
							     </Button>
							    <div className={this.state.Validemst ? 'none' : 'ConfirmationForm'}>
							        <Button
								      color={this.state.Validemst ? "green" : "red"}
								      size='tiny'
								      disabled
								      >
								      {this.state.Validemst ? "Enregitré" : "Non enregistré"}
								    </Button>
								</div>
							 </Form>
				         </Accordion.Content>


				         <Accordion.Title active={activeIndex === 13} index={13} onClick={this.handleClick}>
				          <Icon name='dropdown' />
				          Viol
				        </Accordion.Title>
				        <Accordion.Content active={activeIndex === 13}>
				            <Form success error>
				           		<Form.Field>
						          <b>As-tu été victime de viol ? Quelqu'un dans ton entourage a-t-il été victime de viol ?  </b>
						        </Form.Field>
						        <Form.Field>
						          <Radio
						            label='Oui'
						            name='radioGroup'
						            value='oui'
						            checked={this.state.viol}
						            onChange={this.handleChange}
						            onClick={(e, { value }) => this.viol(value)}
						          />
						        </Form.Field>
						        <Form.Field>
						          <Radio
						            label='Non'
						            name='radioGroup'
						            value='non'
						            checked={!this.state.viol}
						            onChange={this.handleChange}
						            onClick={(e, { value }) => this.viol(value)}
						          />
						        </Form.Field>
							    <Form.Field>
							      <label>Si oui, explique brièvement les conseils que tu pourrais apporter en partageant ton expérience.</label>
							      <TextArea ref="textViol" rows={8} />
							    </Form.Field>
							     <Message
						            hidden={!this.state.Valideviol}
						            success={this.state.Valideviol}
						            header='Cette partie du formulaire a bien été enregistrée'
						         />
						         <Message
								    hidden={!this.state.erreurviol}
								    error={this.state.erreurviol}
								    header='Description vide'
								    content='Explique en quelques mots les conseils que tu peux apporter'
						    	/>
							    <Button
							     onClick={this.submitViol.bind(this)}
							     color="green"
							     size='tiny'>
							     Valider
							     </Button>
							     <div className={this.state.Valideviol ? 'none' : 'ConfirmationForm'}>
							        <Button
								      color={this.state.Valideviol ? "green" : "red"}
								      size='tiny'
								      disabled
								      >
								      {this.state.Valideviol ? "Enregitré" : "Non enregistré"}
								    </Button>
								</div>
							 </Form>
				         </Accordion.Content>



				         <Accordion.Title active={activeIndex === 14} index={14} onClick={this.handleClick}>
				          <Icon name='dropdown' />
				          Avortement
				        </Accordion.Title>
				        <Accordion.Content active={activeIndex === 14}>
				            <Form success error>
				           		<Form.Field>
						          <b>As-tu déjà avorté ? Quelqu’un dans ton entourage a-t-il avorté ?  </b>
						        </Form.Field>
						        <Form.Field>
						          <Radio
						            label='Oui'
						            name='radioGroup'
						            value='oui'
						            checked={this.state.avortement}
						            onChange={this.handleChange}
						            onClick={(e, { value }) => this.avortement(value)}
						          />
						        </Form.Field>
						        <Form.Field>
						          <Radio
						            label='Non'
						            name='radioGroup'
						            value='non'
						            checked={!this.state.avortement}
						            onChange={this.handleChange}
						            onClick={(e, { value }) => this.avortement(value)}
						          />
						        </Form.Field>
							    <Form.Field>
							      <label>Si oui, explique brièvement les conseils que tu pourrais apporter en partageant ton expérience.</label>
							      <TextArea ref="textAvortement" rows={8} />
							    </Form.Field>
							     <Message
						            hidden={!this.state.Valideavortement}
						            success={this.state.Valideavortement}
						            header='Cette partie du formulaire a bien été enregistrée'
						         />
						         <Message
								    hidden={!this.state.erreuravortement}
								    error={this.state.erreuravortement}
								    header='Description vide'
								    content='Explique en quelques mots les conseils que tu peux apporter'
						    	/>
							    <Button
							     onClick={this.submitAvortement.bind(this)}
							     color="green"
							     size='tiny'>
							     Valider
							     </Button>
							    <div className={this.state.Valideavortement ? 'none' : 'ConfirmationForm'}>
							        <Button
								      color={this.state.Valideavortement ? "green" : "red"}
								      size='tiny'
								      disabled
								      >
								      {this.state.Valideavortement ? "Enregitré" : "Non enregistré"}
								    </Button>
								</div>
							 </Form>
				         </Accordion.Content>



				         <Accordion.Title active={activeIndex === 15} index={15} onClick={this.handleClick}>
				          <Icon name='dropdown' />
				          Orientation sexuelle
				        </Accordion.Title>
				        <Accordion.Content active={activeIndex === 15}>
				            <Form success error>
				           		<Form.Field>
						          <b>As-tu une orientation homosexuel ou bisexuel ? Souhaites-tu aider ceux qui se posent des questions sur leur orientation sexuelle?  </b>
						        </Form.Field>
						        <Form.Field>
						          <Radio
						            label='Oui'
						            name='radioGroup'
						            value='oui'
						            checked={this.state.orientationSex}
						            onChange={this.handleChange}
						            onClick={(e, { value }) => this.orientationSex(value)}
						          />
						        </Form.Field>
						        <Form.Field>
						          <Radio
						            label='Non'
						            name='radioGroup'
						            value='non'
						            checked={!this.state.orientationSex}
						            onChange={this.handleChange}
						            onClick={(e, { value }) => this.orientationSex(value)}
						          />
						        </Form.Field>
							    <Form.Field>
							      <label>Si oui, explique brièvement les conseils que tu pourrais apporter en partageant ton expérience.</label>
							      <TextArea ref="textOrientationSex" rows={8} />
							    </Form.Field>
							     <Message
						            hidden={!this.state.ValideorientationSex}
						            success={this.state.ValideorientationSex}
						            header='Cette partie du formulaire a bien été enregistrée'
						         />
						         <Message
								    hidden={!this.state.erreurorientationSex}
								    error={this.state.erreurorientationSex}
								    header='Description vide'
								    content='Explique en quelques mots les conseils que tu peux apporter'
						    	/>
							    <Button
							     onClick={this.submitOrientationSex.bind(this)}
							     color="green"
							     size='tiny'>
							     Valider
							     </Button>
							     <div className={this.state.ValideorientationSex ? 'none' : 'ConfirmationForm'}>
							        <Button
								      color={this.state.ValideorientationSex ? "green" : "red"}
								      size='tiny'
								      disabled
								      >
								      {this.state.ValideorientationSex ? "Enregitré" : "Non enregistré"}
								    </Button>
								</div>
							 </Form>
				         </Accordion.Content>



				         <Accordion.Title active={activeIndex === 16} index={16} onClick={this.handleClick}>
				          <Icon name='dropdown' />
				          Anorexie
				        </Accordion.Title>
				        <Accordion.Content active={activeIndex === 16}>
				            <Form success error>
				           		<Form.Field>
						          <b>As-tu été anorexique ? Quelqu’un dans ton entourage est-il anorexique ?  </b>
						        </Form.Field>
						        <Form.Field>
						          <Radio
						            label='Oui'
						            name='radioGroup'
						            value='oui'
						            checked={this.state.Anorexie}
						            onChange={this.handleChange}
						            onClick={(e, { value }) => this.Anorexie(value)}
						          />
						        </Form.Field>
						        <Form.Field>
						          <Radio
						            label='Non'
						            name='radioGroup'
						            value='non'
						            checked={!this.state.Anorexie}
						            onChange={this.handleChange}
						            onClick={(e, { value }) => this.Anorexie(value)}
						          />
						        </Form.Field>
							    <Form.Field>
							      <label>Si oui, explique brièvement les conseils que tu pourrais apporter en partageant ton expérience.</label>
							      <TextArea ref="textAnorexie" rows={8} />
							    </Form.Field>
							     <Message
						            hidden={!this.state.ValideAnorexie}
						            success={this.state.ValideAnorexie}
						            header='Cette partie du formulaire a bien été enregistrée'
						         />
						         <Message
								    hidden={!this.state.erreurAnorexie}
								    error={this.state.erreurAnorexie}
								    header='Description vide'
								    content='Explique en quelques mots les conseils que tu peux apporter'
						    	/>
							    <Button
							     onClick={this.submitAnorexie.bind(this)}
							     color="green"
							     size='tiny'>
							     Valider
							     </Button>
							    <div className={this.state.ValideAnorexie ? 'none' : 'ConfirmationForm'}>
							        <Button
								      color={this.state.ValideAnorexie ? "green" : "red"}
								      size='tiny'
								      disabled
								      >
								      {this.state.ValideAnorexie ? "Enregitré" : "Non enregistré"}
								    </Button>
								</div>
							 </Form>
				         </Accordion.Content>



				         <Accordion.Title active={activeIndex === 17} index={17} onClick={this.handleClick}>
				          <Icon name='dropdown' />
				          Obésité
				        </Accordion.Title>
				        <Accordion.Content active={activeIndex === 17}>
				            <Form success error>
				           		<Form.Field>
						          <b>As-tu souffert d’obésité ou de surpoids ? Quelqu’un dans ton entourage souffre t-il d’obésité ou de surpoids ?  </b>
						        </Form.Field>
						        <Form.Field>
						          <Radio
						            label='Oui'
						            name='radioGroup'
						            value='oui'
						            checked={this.state.obesite}
						            onChange={this.handleChange}
						            onClick={(e, { value }) => this.obesite(value)}
						          />
						        </Form.Field>
						        <Form.Field>
						          <Radio
						            label='Non'
						            name='radioGroup'
						            value='non'
						            checked={!this.state.obesite}
						            onChange={this.handleChange}
						            onClick={(e, { value }) => this.obesite(value)}
						          />
						        </Form.Field>
							    <Form.Field>
							      <label>Si oui, explique brièvement les conseils que tu pourrais apporter en partageant ton expérience.</label>
							      <TextArea ref="textObesite" rows={8} />
							    </Form.Field>
							     <Message
						            hidden={!this.state.Valideobesite}
						            success={this.state.Valideobesite}
						            header='Cette partie du formulaire a bien été enregistrée'
						         />
						         <Message
								    hidden={!this.state.erreurobesite}
								    error={this.state.erreurobesite}
								    header='Description vide'
								    content='Explique en quelques mots les conseils que tu peux apporter'
						    	/>
							    <Button
							     onClick={this.submitObesite.bind(this)}
							     color="green"
							     size='tiny'>
							     Valider
							     </Button>
							    <div className={this.state.Valideobesite ? 'none' : 'ConfirmationForm'}>
							        <Button
								      color={this.state.Valideobesite ? "green" : "red"}
								      size='tiny'
								      disabled
								      >
								      {this.state.Valideobesite ? "Enregitré" : "Non enregistré"}
								    </Button>
								</div>
							 </Form>
				         </Accordion.Content>



				         <Accordion.Title active={activeIndex === 18} index={18} onClick={this.handleClick}>
				          <Icon name='dropdown' />
				          Drogue
				        </Accordion.Title>
				        <Accordion.Content active={activeIndex === 18}>
				            <Form success error>
				           		<Form.Field>
						          <b>As-tu déjà consommé de la drogue (même des drogues « douces ») ? Quelqu’un dans ton entourage consomme t-il de la drogue ?  </b>
						        </Form.Field>
						        <Form.Field>
						          <Radio
						            label='Oui'
						            name='radioGroup'
						            value='oui'
						            checked={this.state.drogue}
						            onChange={this.handleChange}
						            onClick={(e, { value }) => this.drogue(value)}
						          />
						        </Form.Field>
						        <Form.Field>
						          <Radio
						            label='Non'
						            name='radioGroup'
						            value='non'
						            checked={!this.state.drogue}
						            onChange={this.handleChange}
						            onClick={(e, { value }) => this.drogue(value)}
						          />
						        </Form.Field>
							    <Form.Field>
							      <label>Si oui, explique brièvement les conseils que tu pourrais apporter en partageant ton expérience.</label>
							      <TextArea ref="textDrogue" rows={8} />
							    </Form.Field>
							     <Message
						            hidden={!this.state.Validedrogue}
						            success={this.state.Validedrogue}
						            header='Cette partie du formulaire a bien été enregistrée'
						         />
						         <Message
								    hidden={!this.state.erreurdrogue}
								    error={this.state.erreurdrogue}
								    header='Description vide'
								    content='Explique en quelques mots les conseils que tu peux apporter'
						    	/>
							    <Button
							     onClick={this.submitDrogue.bind(this)}
							     color="green"
							     size='tiny'>
							     Valider
							     </Button>
							    <div className={this.state.Validedrogue ? 'none' : 'ConfirmationForm'}>
							        <Button
								      color={this.state.Validedrogue ? "green" : "red"}
								      size='tiny'
								      disabled
								      >
								      {this.state.Validedrogue ? "Enregitré" : "Non enregistré"}
								    </Button>
								</div>
							 </Form>
				         </Accordion.Content>



				         <Accordion.Title active={activeIndex === 19} index={19} onClick={this.handleClick}>
				          <Icon name='dropdown' />
				          Alcool
				        </Accordion.Title>
				        <Accordion.Content active={activeIndex === 19}>
				            <Form success error>
				           		<Form.Field>
						          <b>As-tu été alcoolique ? Quelqu’un dans ton entourage est-il alcoolique ?  </b>
						        </Form.Field>
						        <Form.Field>
						          <Radio
						            label='Oui'
						            name='radioGroup'
						            value='oui'
						            checked={this.state.alcool}
						            onChange={this.handleChange}
						            onClick={(e, { value }) => this.alcool(value)}
						          />
						        </Form.Field>
						        <Form.Field>
						          <Radio
						            label='Non'
						            name='radioGroup'
						            value='non'
						            checked={!this.state.alcool}
						            onChange={this.handleChange}
						            onClick={(e, { value }) => this.alcool(value)}
						          />
						        </Form.Field>
							    <Form.Field>
							      <label>Si oui, explique brièvement les conseils que tu pourrais apporter en partageant ton expérience.</label>
							      <TextArea ref="textAlcool" rows={8} />
							    </Form.Field>
							     <Message
						            hidden={!this.state.Validealcool}
						            success={this.state.Validealcool}
						            header='Cette partie du formulaire a bien été enregistrée'
						         />
						         <Message
								    hidden={!this.state.erreuralcool}
								    error={this.state.erreuralcool}
								    header='Description vide'
								    content='Explique en quelques mots les conseils que tu peux apporter'
						    	/>
							    <Button
							     onClick={this.submitAlcool.bind(this)}
							     color="green"
							     size='tiny'>
							     Valider
							     </Button>
							    <div className={this.state.Validealcool ? 'none' : 'ConfirmationForm'}>
							        <Button
								      color={this.state.Validealcool ? "green" : "red"}
								      size='tiny'
								      disabled
								      >
								      {this.state.Validealcool ? "Enregitré" : "Non enregistré"}
								    </Button>
								</div>
							 </Form>
				         </Accordion.Content>



				         <Accordion.Title active={activeIndex === 20} index={20} onClick={this.handleClick}>
				          <Icon name='dropdown' />
				          Complexes
				        </Accordion.Title>
				        <Accordion.Content active={activeIndex === 20}>
				            <Form success error>
				           		<Form.Field>
						          <b>As-tu souffert d’un complexe ?  </b>
						        </Form.Field>
						        <Form.Field>
						          <Radio
						            label='Oui'
						            name='radioGroup'
						            value='oui'
						            checked={this.state.complexe}
						            onChange={this.handleChange}
						            onClick={(e, { value }) => this.complexe(value)}
						          />
						        </Form.Field>
						        <Form.Field>
						          <Radio
						            label='Non'
						            name='radioGroup'
						            value='non'
						            checked={!this.state.complexe}
						            onChange={this.handleChange}
						            onClick={(e, { value }) => this.complexe(value)}
						          />
						        </Form.Field>
							    <Form.Field>
							      <label>Si oui, explique brièvement les conseils que tu pourrais apporter en partageant ton expérience.</label>
							      <TextArea ref="textComplexe" rows={8} />
							    </Form.Field>
							     <Message
						            hidden={!this.state.Validecomplexe}
						            success={this.state.Validecomplexe}
						            header='Cette partie du formulaire a bien été enregistrée'
						         />
						         <Message
								    hidden={!this.state.erreurcomplexe}
								    error={this.state.erreurcomplexe}
								    header='Description vide'
								    content='Explique en quelques mots les conseils que tu peux apporter'
						    	/>
							    <Button
							     onClick={this.submitComplexe.bind(this)}
							     color="green"
							     size='tiny'>
							     Valider
							     </Button>
							    <div className={this.state.Validecomplexe ? 'none' : 'ConfirmationForm'}>
							        <Button
								      color={this.state.Validecomplexe ? "green" : "red"}
								      size='tiny'
								      disabled
								      >
								      {this.state.Validecomplexe ? "Enregitré" : "Non enregistré"}
								    </Button>
								</div>
							 </Form>
				         </Accordion.Content>



				         <Accordion.Title active={activeIndex === 21} index={21} onClick={this.handleClick}>
				          <Icon name='dropdown' />
				          Hospitalisation
				        </Accordion.Title>
				        <Accordion.Content active={activeIndex === 21}>
				            <Form success error>
				           		<Form.Field>
						          <b>As-tu déjà effectué des séjours à l’hôpital pour subir des interventions chirurgicales ou être soigné d’une maladie grave ?  </b>
						        </Form.Field>
						        <Form.Field>
						          <Radio
						            label='Oui'
						            name='radioGroup'
						            value='oui'
						            checked={this.state.hopital}
						            onChange={this.handleChange}
						            onClick={(e, { value }) => this.hopital(value)}
						          />
						        </Form.Field>
						        <Form.Field>
						          <Radio
						            label='Non'
						            name='radioGroup'
						            value='non'
						            checked={!this.state.hopital}
						            onChange={this.handleChange}
						            onClick={(e, { value }) => this.hopital(value)}
						          />
						        </Form.Field>
							    <Form.Field>
							      <label>Si oui, explique brièvement les conseils que tu pourrais apporter en partageant ton expérience.</label>
							      <TextArea ref="textHopital" rows={8} />
							    </Form.Field>
							     <Message
						            hidden={!this.state.Validehopital}
						            success={this.state.Validehopital}
						            header='Cette partie du formulaire a bien été enregistrée'
						         />
						         <Message
								    hidden={!this.state.erreurhopital}
								    error={this.state.erreurhopital}
								    header='Description vide'
								    content='Explique en quelques mots les conseils que tu peux apporter'
						    	/>
							    <Button
							     onClick={this.submitHopital.bind(this)}
							     color="green"
							     size='tiny'>
							     Valider
							     </Button>
							    <div className={this.state.Validehopital ? 'none' : 'ConfirmationForm'}>
							        <Button
								      color={this.state.Validehopital ? "green" : "red"}
								      size='tiny'
								      disabled
								      >
								      {this.state.Validehopital ? "Enregitré" : "Non enregistré"}
								    </Button>
								</div>
							 </Form>
				         </Accordion.Content>



				         <Accordion.Title active={activeIndex === 22} index={22} onClick={this.handleClick}>
				          <Icon name='dropdown' />
				          Handicap
				        </Accordion.Title>
				        <Accordion.Content active={activeIndex === 22}>
				            <Form success error>
				           		<Form.Field>
						          <b>Souffres-tu, ou as-tu souffert, d’un handicap physique ? Quelqu’un dans ton entourage a-t-il un handicap physique ou mental ? </b>
						        </Form.Field>
						        <Form.Field>
						          <Radio
						            label='Oui'
						            name='radioGroup'
						            value='oui'
						            checked={this.state.Handicap}
						            onChange={this.handleChange}
						            onClick={(e, { value }) => this.handicap(value)}
						          />
						        </Form.Field>
						        <Form.Field>
						          <Radio
						            label='Non'
						            name='radioGroup'
						            value='non'
						            checked={!this.state.handicap}
						            onChange={this.handleChange}
						            onClick={(e, { value }) => this.handicap(value)}
						          />
						        </Form.Field>
							    <Form.Field>
							      <label>Si oui, explique brièvement les conseils que tu pourrais apporter en partageant ton expérience.</label>
							      <TextArea ref="textHandicap" rows={8} />
							    </Form.Field>
							     <Message
						            hidden={!this.state.Validehandicap}
						            success={this.state.Validehandicap}
						            header='Cette partie du formulaire a bien été enregistrée'
						         />
						         <Message
								    hidden={!this.state.erreurhandicap}
								    error={this.state.erreurhandicap}
								    header='Description vide'
								    content='Explique en quelques mots les conseils que tu peux apporter'
						    	/>
							    <Button
							     onClick={this.submitHandicap.bind(this)}
							     color="green"
							     size='tiny'>
							     Valider
							     </Button>
							    <div className={this.state.Validehandicap ? 'none' : 'ConfirmationForm'}>
							        <Button
								      color={this.state.Validehandicap ? "green" : "red"}
								      size='tiny'
								      disabled
								      >
								      {this.state.Validehandicap ? "Enregitré" : "Non enregistré"}
								    </Button>
								</div>
							 </Form>
				         </Accordion.Content>



				         <Accordion.Title active={activeIndex === 23} index={23} onClick={this.handleClick}>
				          <Icon name='dropdown' />
				          Accident
				        </Accordion.Title>
				        <Accordion.Content active={activeIndex === 23}>
				            <Form success error>
				           		<Form.Field>
						          <b>As-tu été victime d’un accident grave (accident domestique, accident de la route…)? Quelqu’un dans ton entourage a-t-il été victime d’un accident grave ?  </b>
						        </Form.Field>
						        <Form.Field>
						          <Radio
						            label='Oui'
						            name='radioGroup'
						            value='oui'
						            checked={this.state.accident}
						            onChange={this.handleChange}
						            onClick={(e, { value }) => this.accident(value)}
						          />
						        </Form.Field>
						        <Form.Field>
						          <Radio
						            label='Non'
						            name='radioGroup'
						            value='non'
						            checked={!this.state.accident}
						            onChange={this.handleChange}
						            onClick={(e, { value }) => this.accident(value)}
						          />
						        </Form.Field>
							    <Form.Field>
							      <label>Si oui, explique brièvement les conseils que tu pourrais apporter en partageant ton expérience.</label>
							      <TextArea ref="textAccident" rows={8} />
							    </Form.Field>
							     <Message
						            hidden={!this.state.ValideAccident}
						            success={this.state.ValideAccident}
						            header='Cette partie du formulaire a bien été enregistrée'
						         />
						         <Message
								    hidden={!this.state.erreurAccident}
								    error={this.state.erreurAccident}
								    header='Description vide'
								    content='Explique en quelques mots les conseils que tu peux apporter'
						    	/>
							    <Button
							     onClick={this.submitAccident.bind(this)}
							     color="green"
							     size='tiny'>
							     Valider
							     </Button>
							    <div className={this.state.ValideAccident ? 'none' : 'ConfirmationForm'}>
							        <Button
								      color={this.state.ValideAccident ? "green" : "red"}
								      size='tiny'
								      disabled
								      >
								      {this.state.ValideAccident ? "Enregitré" : "Non enregistré"}
								    </Button>
								</div>
							 </Form>
				         </Accordion.Content>



				         <Accordion.Title active={activeIndex === 24} index={24} onClick={this.handleClick}>
				          <Icon name='dropdown' />
				          Echec scolaire
				        </Accordion.Title>
				        <Accordion.Content active={activeIndex === 24}>
				            <Form success error>
				           		<Form.Field>
						          <b>As-tu déjà été en situation d’échec scolaire ? Quelqu’un dans ton entourage est-il en échec scolaire ?  </b>
						        </Form.Field>
						        <Form.Field>
						          <Radio
						            label='Oui'
						            name='radioGroup'
						            value='oui'
						            checked={this.state.echecEcole}
						            onChange={this.handleChange}
						            onClick={(e, { value }) => this.echecEcole(value)}
						          />
						        </Form.Field>
						        <Form.Field>
						          <Radio
						            label='Non'
						            name='radioGroup'
						            value='non'
						            checked={!this.state.echecEcole}
						            onChange={this.handleChange}
						            onClick={(e, { value }) => this.echecEcole(value)}
						          />
						        </Form.Field>
							    <Form.Field>
							      <label>Si oui, explique brièvement les conseils que tu pourrais apporter en partageant ton expérience.</label>
							      <TextArea ref="textEchecEcole" rows={8} />
							    </Form.Field>
							     <Message
						            hidden={!this.state.ValideechecEcole}
						            success={this.state.ValideechecEcole}
						            header='Cette partie du formulaire a bien été enregistrée'
						         />
						         <Message
								    hidden={!this.state.erreurechecEcole}
								    error={this.state.erreurechecEcole}
								    header='Description vide'
								    content='Explique en quelques mots les conseils que tu peux apporter'
						    	/>
							    <Button
							     onClick={this.submitEchecEcole.bind(this)}
							     color="green"
							     size='tiny'>
							     Valider
							     </Button>
							    <div className={this.state.ValideechecEcole ? 'none' : 'ConfirmationForm'}>
							        <Button
								      color={this.state.ValideechecEcole ? "green" : "red"}
								      size='tiny'
								      disabled
								      >
								      {this.state.ValideechecEcole ? "Enregitré" : "Non enregistré"}
								    </Button>
								</div>
							 </Form>
				         </Accordion.Content>



				         <Accordion.Title active={activeIndex === 25} index={25} onClick={this.handleClick}>
				          <Icon name='dropdown' />
				          Harcèlement
				        </Accordion.Title>
				        <Accordion.Content active={activeIndex === 25}>
				            <Form success error>
				           		<Form.Field>
						          <b>As-tu été victime de harcèlement (moral ou physique) ?  </b>
						        </Form.Field>
						        <Form.Field>
						          <Radio
						            label='Oui'
						            name='radioGroup'
						            value='oui'
						            checked={this.state.Harcelement}
						            onChange={this.handleChange}
						            onClick={(e, { value }) => this.Harcelement(value)}
						          />
						        </Form.Field>
						        <Form.Field>
						          <Radio
						            label='Non'
						            name='radioGroup'
						            value='non'
						            checked={!this.state.Harcelement}
						            onChange={this.handleChange}
						            onClick={(e, { value }) => this.Harcelement(value)}
						          />
						        </Form.Field>
							    <Form.Field>
							      <label>Si oui, explique brièvement les conseils que tu pourrais apporter en partageant ton expérience.</label>
							      <TextArea ref="textharcelement" rows={8} />
							    </Form.Field>
							     <Message
						            hidden={!this.state.ValideHarcelement}
						            success={this.state.ValideHarcelement}
						            header='Cette partie du formulaire a bien été enregistrée'
						         />
						         <Message
								    hidden={!this.state.erreurHarcelement}
								    error={this.state.erreurHarcelement}
								    header='Description vide'
								    content='Explique en quelques mots les conseils que tu peux apporter'
						    	/>
							    <Button
							     onClick={this.submitHarcelement.bind(this)}
							     color="green"
							     size='tiny'>
							     Valider
							     </Button>
							    <div className={this.state.ValideHarcelement ? 'none' : 'ConfirmationForm'}>
							        <Button
								      color={this.state.ValideHarcelement ? "green" : "red"}
								      size='tiny'
								      disabled
								      >
								      {this.state.ValideHarcelement ? "Enregitré" : "Non enregistré"}
								    </Button>
								</div>
							 </Form>
				         </Accordion.Content>




				         <Accordion.Title active={activeIndex === 26} index={26} onClick={this.handleClick}>
				          <Icon name='dropdown' />
				          Discrimination
				        </Accordion.Title>
				        <Accordion.Content active={activeIndex === 26}>
				            <Form success error>
				           		<Form.Field>
						          <b>As-tu été victime de discrimination (raciale, sexuel, physique…) ?  </b>
						        </Form.Field>
						        <Form.Field>
						          <Radio
						            label='Oui'
						            name='radioGroup'
						            value='oui'
						            checked={this.state.discrimination}
						            onChange={this.handleChange}
						            onClick={(e, { value }) => this.discrimination(value)}
						          />
						        </Form.Field>
						        <Form.Field>
						          <Radio
						            label='Non'
						            name='radioGroup'
						            value='non'
						            checked={!this.state.discrimination}
						            onChange={this.handleChange}
						            onClick={(e, { value }) => this.discrimination(value)}
						          />
						        </Form.Field>
							    <Form.Field>
							      <label>Si oui, explique brièvement les conseils que tu pourrais apporter en partageant ton expérience.</label>
							      <TextArea ref="textDiscrimination" rows={8} />
							    </Form.Field>
							     <Message
						            hidden={!this.state.ValideDiscrimination}
						            success={this.state.ValideDiscrimination}
						            header='Cette partie du formulaire a bien été enregistrée'
						         />
						         <Message
								    hidden={!this.state.erreurDiscrimination}
								    error={this.state.erreurDiscrimination}
								    header='Description vide'
								    content='Explique en quelques mots les conseils que tu peux apporter'
						    	/>
							    <Button
							     onClick={this.submitDiscrimination.bind(this)}
							     color="green"
							     size='tiny'>
							     Valider
							     </Button>
							    <div className={this.state.ValideDiscrimination ? 'none' : 'ConfirmationForm'}>
							        <Button
								      color={this.state.ValideDiscrimination ? "green" : "red"}
								      size='tiny'
								      disabled
								      >
								      {this.state.ValideDiscrimination ? "Enregitré" : "Non enregistré"}
								    </Button>
								</div>
							 </Form>
				         </Accordion.Content>

				         <Accordion.Title active={activeIndex === 28} index={28} onClick={this.handleClick}>
				          <Icon name='dropdown' />
				          Violence
				        </Accordion.Title>
				        <Accordion.Content active={activeIndex === 28}>
				            <Form success error>
				           		<Form.Field>
						          <b>As-tu connu la violence dans ton quotidien (agression, vol, délinquance…)?  </b>
						        </Form.Field>
						        <Form.Field>
						          <Radio
						            label='Oui'
						            name='radioGroup'
						            value='oui'
						            checked={this.state.violence}
						            onChange={this.handleChange}
						            onClick={(e, { value }) => this.violence(value)}
						          />
						        </Form.Field>
						        <Form.Field>
						          <Radio
						            label='Non'
						            name='radioGroup'
						            value='non'
						            checked={!this.state.violence}
						            onChange={this.handleChange}
						            onClick={(e, { value }) => this.violence(value)}
						          />
						        </Form.Field>
							    <Form.Field>
							      <label>Si oui, explique brièvement les conseils que tu pourrais apporter en partageant ton expérience.</label>
							      <TextArea ref="textViolence" rows={8} />
							    </Form.Field>
							     <Message
						            hidden={!this.state.ValideViolence}
						            success={this.state.ValideViolence}
						            header='Cette partie du formulaire a bien été enregistrée'
						         />
						         <Message
								    hidden={!this.state.erreurViolence}
								    error={this.state.erreurViolence}
								    header='Description vide'
								    content='Explique en quelques mots les conseils que tu peux apporter'
						    	/>
							    <Button
							     onClick={this.submitViolence.bind(this)}
							     color="green"
							     size='tiny'>
							     Valider
							     </Button>
							    <div className={this.state.ValideViolence ? 'none' : 'ConfirmationForm'}>
							        <Button
								      color={this.state.ValideViolence ? "green" : "red"}
								      size='tiny'
								      disabled
								      >
								      {this.state.ValideViolence ? "Enregitré" : "Non enregistré"}
								    </Button>
								</div>
							 </Form>
				         </Accordion.Content>
				      </Accordion>
				</div>	
				</Segment>
			   </div>
			</div>

		);
  	}
}
