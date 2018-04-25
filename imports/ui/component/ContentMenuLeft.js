import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import {  Input, Label, Menu, Header, Image, Divider, Segment, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import AdSense from 'react-adsense';

import { Conseilleres } from '../../api/Conseilleres.js';

//Icons
import FaUser from 'react-icons/lib/fa/user';
import FaComments from 'react-icons/lib/fa/comments';
import FaStar from 'react-icons/lib/fa/star';
import FaEnvelope from 'react-icons/lib/fa/envelope-o';
import FaEur from 'react-icons/lib/fa/eur';
import FaBook from 'react-icons/lib/fa/book';

import LastConseilleresContent from '../component/LastConseilleresContent.js';

class ContentMenuLeft extends Component {

	constructor(props) {
        super(props);
     
        this.state = {
           activeItem: '',
           id:'',
           
        };
    }

  componentWillMount(){
  	//on cherche le dernier contact
  	Meteor.apply('lastContact', [{
          }], {
          onResultReceived: (error, response) => {
            if (error) console.warn(error.reason);
            
            {
            response ?
             this.setState({id: response})
             :
             this.setState({id: Meteor.userId()})
          	}

            },
        });
  }

  handleContextRef = contextRef => this.setState({ contextRef })

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  renderLastConseiller() {
      let Allconseilleres = this.props.lastConseiller;

      return Allconseilleres.map((conseiller) => {
        
        return (
          <LastConseilleresContent
            key={conseiller._id}
            conseiller={conseiller}      
          />
        );
      });
  }

  render() {
    const { activeItem } = this.state
    const { contextRef } = this.state

		return (
			<div className="MenuLeft">
  			<Menu vertical>
  					<div
  					 className="HeaderMenu"
  					 >
  					 Mon compte
  				 	</div>
            <div className="espaceConseiller"></div>
  				    <div className="MenuItem">
  					    <Link to={'/Profil/'+ Meteor.userId() }>
                <div className="star">  	
  					         	<FaUser /> 
                </div>Profil
  				        </Link>
    					</div>
    					
    					<div className="MenuItem">
  				        <Link to={'/Chat/' + this.state.id}>
                  <div className="star">  	
  				          <FaComments /> 
                  </div> Messagerie
  				        </Link>
  					</div>
  			       
  			       	<div className="MenuItem">
  			        	<Link to={'/Favoris/' }>
                    <div className="star">	
  			          		<FaStar />
                    </div>
                       Favoris
  			          </Link>
    					</div>

  			       	<div className="MenuItem">
  			        	<Link to={'/MessagesPostes/' }>
                    <div className="star">  	
    			          		 <FaEnvelope />
                    </div> Messages postés
  			       		</Link>
    					</div>

  			      	<div className="MenuItem">
  			        	<Link to={'/ListeDons/' + Meteor.userId() }>
                    <div className="star">  	
  			          		<FaEur /> 
                    </div>  Dons
  			    		</Link>
    					</div>
              <div className="MenuItem">
                <Link to={'/Livre/'}> 
                  <div className="star">     
                      <FaBook/>
                  </div> Le Secret de Cendrillon
                </Link>
              </div>
  			</Menu>

  		  <div className="MenuLeftLastConseiller">
    				<div
    				 className="HeaderMenu"
    				 >
    				 Nouveaux conseillers
    				 </div>
             <div className="espaceConseiller"></div>
    			        {this.renderLastConseiller()}
  		   
  			</div>
        <div className="espacePub" ></div>
        <AdSense.Google
          client='ca-pub-6112176939320267'
          slot='5421106747'
          style={{ display: 'inline-block',width:'160px', height:'600px'}}
        />

		</div>
		);
  	}
}

export default ContentMenuLeft =  withTracker(() => {

  const Handle = Meteor.subscribe('AllConseiller');
  const loading = !Handle.ready();
  const allConseillers = Conseilleres.find({}, {sort:{date: -1},limit:5});
  const reponseExists = !loading && !!allConseillers;

  return {
    lastConseiller: reponseExists ? allConseillers.fetch() : [],
  };
})(ContentMenuLeft);
