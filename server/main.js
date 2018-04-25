import { Meteor } from 'meteor/meteor';

import '../imports/api/Users.js';
import '../imports/api/Messages.js';
import '../imports/api/Reponses.js';
import '../imports/api/Conseilleres.js';
import '../imports/api/Chat.js';
import '../imports/api/ContactChat.js';
import '../imports/api/Recommandations.js';
import '../imports/api/Favoris.js';
import '../imports/api/Stripe.js';
import '../imports/api/DemandeVirement.js';
import '../imports/api/Commande.js';
import '../imports/api/mail.js';
import '../imports/api/Notifications.js';

Meteor.startup(() => {
  // code to run on server at startup
});
