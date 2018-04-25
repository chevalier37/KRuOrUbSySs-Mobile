import React, { PropTypes } from 'react';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';


// route components
import Connexion from '../../../imports/ui/pages/connexion.js';
import Home from '../../../imports/ui/pages/Home.js';
import DevenirConseiller from '../../../imports/ui/pages/DevenirConseiller.js';
import ResultatsConseiller from '../../../imports/ui/pages/ResultatsConseiller.js';
import Profil from '../../../imports/ui/pages/Profil.js';
import Chat from '../../../imports/ui/pages/Chat.js';
import forgotPassword from '../../../imports/ui/pages/forgotPassword.js';
import CGU from '../../../imports/ui/pages/CGU.js';
import contact from '../../../imports/ui/pages/contact.js';
import singleMessage from '../../../imports/ui/pages/SingleMessage.js';
import Recommander from '../../../imports/ui/pages/Recommander.js';
import ValiderRecommandation from '../../../imports/ui/pages/ValiderRecommandation.js';
import ModifierConseiller from '../../../imports/ui/pages/ModifierConseiller.js';
import Recommandations from '../../../imports/ui/pages/Recommandations.js';
import Favoris from '../../../imports/ui/pages/Favoris.js';
import MessagesPostes from '../../../imports/ui/pages/MessagesPostes.js';
import Livre from '../../../imports/ui/pages/Livre.js';
import AmeliorerSite from '../../../imports/ui/pages/AmeliorerSite.js';
import SignalerBug from '../../../imports/ui/pages/SignalerBug.js';
import NumerosUtiles from '../../../imports/ui/pages/NumerosUtiles.js';
import SupprimerCompte from '../../../imports/ui/pages/SupprimerCompte.js';
import ContactConnecte from '../../../imports/ui/pages/ContactConnecte.js';
import Dons from '../../../imports/ui/pages/Dons1.js';
import ValidationDon from '../../../imports/ui/pages/ValidationDon.js';
import ListeDons from '../../../imports/ui/pages/ListeDons.js';
import ConfirmationVirement from '../../../imports/ui/pages/ConfirmationVirement.js';
import CommandeLivre from '../../../imports/ui/pages/CommandeLivre.js';
import ValidationCommande from '../../../imports/ui/pages/ValidationCommande.js';
import Notifications from '../../../imports/ui/pages/Notifications.js';
import NotFound from '../../../imports/ui/pages/NotFound.js';
import MiseAjourNaissance from '../../../imports/ui/pages/MiseAjourNaissance.js';

const requireAuth = (nextState, replace) => {

  if (!Meteor.loggingIn() && !Meteor.userId()) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname },
    });
  }
};


const browserHistory = createBrowserHistory();
export const renderRoutes = () => (
  <Router history={browserHistory}>
    <div>
      <Route exact path="/" component={Connexion}/>
      <Route path="/home" component={Home} onEnter={requireAuth} />
      <Route path="/DevenirConseiller" component={DevenirConseiller}/>
      <Route path="/ResultatsConseiller/:theme" component={ResultatsConseiller}/>
      <Route path="/Profil/:id" component={Profil}/>
      <Route path="/Chat/:id" component={Chat}/>
      <Route path="/forgotPassword" component={forgotPassword}/>
      <Route path="/CGU" component={CGU}/>
      <Route path="/contact" component={contact}/>
      <Route path="/singleMessage/:id" component={singleMessage}/>
      <Route path="/Recommander/:id" component={Recommander}/>
      <Route path="/ValiderRecommandation/" component={ValiderRecommandation}/>
      <Route path="/ModifierConseiller/" component={ModifierConseiller}/>
      <Route path="/Recommandations/:id" component={Recommandations}/>
      <Route path="/Favoris/" component={Favoris}/>
      <Route path="/MessagesPostes/" component={MessagesPostes}/>
      <Route path="/Livre/" component={Livre}/>
      <Route path="/AmeliorerSite/" component={AmeliorerSite}/>
      <Route path="/SignalerBug/" component={SignalerBug}/>
      <Route path="/NumerosUtiles/" component={NumerosUtiles}/>
      <Route path="/SupprimerCompte/" component={SupprimerCompte}/>
      <Route path="/ContactConnecte/" component={ContactConnecte}/>
      <Route path="/Dons/:id" component={Dons}/>
      <Route path="/ValidationDon/" component={ValidationDon}/>
      <Route path="/ListeDons/:id" component={ListeDons}/>
      <Route path="/ConfirmationVirement/" component={ConfirmationVirement}/>
      <Route path="/CommandeLivre/" component={CommandeLivre}/>
      <Route path="/ValidationCommande/" component={ValidationCommande}/>
      <Route path="/Notifications/" component={Notifications}/>
      <Route path="/MiseAjourNaissance/" component={MiseAjourNaissance}/>
      
    </div>
  </Router>
);
