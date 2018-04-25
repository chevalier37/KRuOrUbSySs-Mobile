import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Dropdown, Menu, Icon, Header, List, Button, Checkbox, Form, Select, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom';



export default class ContentMenuRight extends Component {

	state = { activeItem: 'account' }

  	handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
  	render() {
  		const { activeItem } = this.state
		
		return (
			<div className="ListeSideBar">
				<List relaxed>

				    <List.Item>
				      <Button fluid color='red'>Amour</Button>
				    </List.Item>
				    
  					<Divider />

				    <Link to="/ResultatsConseiller/premierAmour" >
					    <List.Item className="ListItem">
						    <List.Header>
						         Premier amour
						    </List.Header>
					    </List.Item>
					</Link>

				    <Divider />

				      <Link to="/ResultatsConseiller/trahison" >
					    <List.Item className="ListItem">
					    	<List.Content>
					        	<span >Trahison amoureuse</span>
					      </List.Content>
					    </List.Item>
				    </Link> 

  					 <Divider />

  					  <Link to="/ResultatsConseiller/Friendzone" >
					    <List.Item className="ListItem">
					    	<List.Content>
					        	<span >Friendzone</span>
					      </List.Content>
					    </List.Item>
				    </Link> 
				    
  					 <Divider />

  					  <Link to="/ResultatsConseiller/amourdistance" >
					    <List.Item className="ListItem">
					    	<List.Content>
					        	<span >Amour à distance</span>
					      </List.Content>
					    </List.Item>
				    </Link> 
				    
  					 <Divider />

				     <Link to="/ResultatsConseiller/separation" >
					    <List.Item className="ListItem">
					    	<List.Content>
					        	<span >Séparation amoureuse</span>
					      </List.Content>
					    </List.Item>
				    </Link> 

				    <Divider />

				    <Link to="/ResultatsConseiller/autre" >
					    <List.Item className="ListItem">
					    	<List.Content>
					        	<span >Autre</span>
					      </List.Content>
					    </List.Item>
				    </Link>

				      <Divider />

				    <List.Item>
				      <Button fluid color='orange'>Confiance en soi</Button>
				    </List.Item>
				    
  					<Divider />

				     
				    <Link to="/ResultatsConseiller/timidite" >
					    <List.Item className="ListItem">
					    	<List.Content>
					        	<span >Timidité</span>
					      </List.Content>
					    </List.Item>
				    </Link>

				      <Divider />
				    
				    <Link to="/ResultatsConseiller/depression" >
					    <List.Item className="ListItem">
					    	<List.Content>
					        	<span >Dépression</span>
					      </List.Content>
					    </List.Item>
				    </Link>

				      <Divider />

				    <Link to="/ResultatsConseiller/suicide" >
					    <List.Item className="ListItem">
					    	<List.Content>
					        	<span >Suicide</span>
					      </List.Content>
					    </List.Item>
				    </Link>

				      <Divider />
				   
				   <Link to="/ResultatsConseiller/deces" >
					    <List.Item className="ListItem">
					    	<List.Content>
					        	<span >Décès</span>
					      </List.Content>
					    </List.Item>
				    </Link>

				      <Divider />

				    <Link to="/ResultatsConseiller/mutilation" >
					    <List.Item className="ListItem">
					    	<List.Content>
					        	<span >Mutilation</span>
					      </List.Content>
					    </List.Item>
				    </Link>

				      <Divider />

				      <Link to="/ResultatsConseiller/autre" >
					    <List.Item className="ListItem">
					    	<List.Content>
					        	<span >Autre</span>
					      </List.Content>
					    </List.Item>
				    </Link>

				      <Divider />

				    <List.Item>
				      <Button fluid color='teal'>Sexo</Button>
				    </List.Item>
				    
  					<Divider />
				    
				     
				    <Link to="/ResultatsConseiller/premierfois" >
					    <List.Item className="ListItem">
					    	<List.Content>
					        	<span >Première fois</span>
					      </List.Content>
					    </List.Item>
				    </Link>

				      <Divider />
				    
				    <Link to="/ResultatsConseiller/contraception" >
					    <List.Item className="ListItem">
					    	<List.Content>
					        	<span >Contraception</span>
					      </List.Content>
					    </List.Item>
				    </Link>

				      <Divider />

				    <Link to="/ResultatsConseiller/mst" >
					    <List.Item className="ListItem">
					    	<List.Content>
					        	<span >Maladie, MST</span>
					      </List.Content>
					    </List.Item>
				    </Link>

				      <Divider />
				   
				   <Link to="/ResultatsConseiller/viol" >
					    <List.Item className="ListItem">
					    	<List.Content>
					        	<span >Viol</span>
					      </List.Content>
					    </List.Item>
				    </Link>

				      <Divider />

				    <Link to="/ResultatsConseiller/avortement" >
					    <List.Item className="ListItem">
					    	<List.Content>
					        	<span >Avortement</span>
					      </List.Content>
					    </List.Item>
				    </Link>

				      <Divider />

				    <Link to="/ResultatsConseiller/orientationSex" >
					    <List.Item className="ListItem">
					    	<List.Content>
					        	<span >Orientation sexuelle</span>
					      </List.Content>
					    </List.Item>
				    </Link>

				      <Divider />

				      <Link to="/ResultatsConseiller/autre" >
					    <List.Item className="ListItem">
					    	<List.Content>
					        	<span >Autre</span>
					      </List.Content>
					    </List.Item>
				    </Link>

				      <Divider />

				    

				     <List.Item>
				      <Button fluid color='violet'>Santé / Addiction</Button>
				    </List.Item>
				    
  					<Divider />
				    
				     
				    <Link to="/ResultatsConseiller/Anorexie" >
					    <List.Item className="ListItem">
					    	<List.Content>
					        	<span >Anorexie</span>
					      </List.Content>
					    </List.Item>
				    </Link>

				      <Divider />
				    
				    <Link to="/ResultatsConseiller/obesite" >
					    <List.Item className="ListItem">
					    	<List.Content>
					        	<span >Obésité</span>
					      </List.Content>
					    </List.Item>
				    </Link>

				      <Divider />

				    <Link to="/ResultatsConseiller/drogue" >
					    <List.Item className="ListItem">
					    	<List.Content>
					        	<span >Drogue</span>
					      </List.Content>
					    </List.Item>
				    </Link>

				      <Divider />
				   
				   <Link to="/ResultatsConseiller/alcool" >
					    <List.Item className="ListItem">
					    	<List.Content>
					        	<span >Alcool</span>
					      </List.Content>
					    </List.Item>
				    </Link>

				      <Divider />

				    <Link to="/ResultatsConseiller/complexe" >
					    <List.Item className="ListItem">
					    	<List.Content>
					        	<span >Complexe</span>
					      </List.Content>
					    </List.Item>
				    </Link>

				      <Divider />

				    <Link to="/ResultatsConseiller/hopital" >
					    <List.Item className="ListItem">
					    	<List.Content>
					        	<span >Hospitalisation</span>
					      </List.Content>
					    </List.Item>
				    </Link>

				      <Divider />

				    <Link to="/ResultatsConseiller/handicap" >
					    <List.Item className="ListItem">
					    	<List.Content>
					        	<span >Handicap</span>
					      </List.Content>
					    </List.Item>
				    </Link>

				      <Divider />

				    <Link to="/ResultatsConseiller/accident" >
					    <List.Item className="ListItem">
					    	<List.Content>
					        	<span >Accident</span>
					      </List.Content>
					    </List.Item>
				    </Link>

				    <Divider />

				    <Link to="/ResultatsConseiller/autre" >
					    <List.Item className="ListItem">
					    	<List.Content>
					        	<span >Autre</span>
					      </List.Content>
					    </List.Item>
				    </Link>

				      <Divider />

				     

				    <Divider />

				    <List.Item>
				      <Button fluid color='brown'>Milieu scolaire</Button>
				    </List.Item>
				    
  					<Divider />

				    <Link to="/ResultatsConseiller/echecEcole" >
					    <List.Item className="ListItem">
					    	<List.Content>
					        	<span >Echec scolaire</span>
					      </List.Content>
					    </List.Item>
				    </Link>

				      <Divider />
				    
				    <Link to="/ResultatsConseiller/Harcelement" >
					    <List.Item className="ListItem">
					    	<List.Content>
					        	<span >Harcèlement</span>
					      </List.Content>
					    </List.Item>
				    </Link>

				      <Divider />

				    <Link to="/ResultatsConseiller/discrimination" >
					    <List.Item className="ListItem">
					    	<List.Content>
					        	<span >Discrimination</span>
					      </List.Content>
					    </List.Item>
				    </Link>

				      <Divider />
				   

				    <Link to="/ResultatsConseiller/Violence" >
					    <List.Item className="ListItem">
					    	<List.Content>
					        	<span >Violence</span>
					      </List.Content>
					    </List.Item>
				    </Link>

				      <Divider />

				      <Link to="/ResultatsConseiller/autre" >
					    <List.Item className="ListItem">
					    	<List.Content>
					        	<span >Autre</span>
					      </List.Content>
					    </List.Item>
				    </Link>

				      <Divider />

				</List>
			 </div>

		);
  	}
}
