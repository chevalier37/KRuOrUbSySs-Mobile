import React from 'react';
import { Email } from 'meteor/email';
import { Meteor } from 'meteor/meteor';
import { GetContactEmail } from '../../server/email-template.js'; 
import { EmailReponse } from '../../server/email-reponse.js'; 
import { EmailRecommandation } from '../../server/email-recommandation.js';
import { EmailDons } from '../../server/email-dons.js';  

Meteor.startup(() => {
   process.env.MAIL_URL = "smtp://SMTP_Injection:8a7c33dbc3fcb19d1d3610321e91d649f28b1441@smtp.sparkpostmail.com:587";
});

if (Meteor.isServer) {
//Les templates se trouve dans le répertoire Server


Meteor.methods({
  NouveauMessage: function(to, from, subject, name, message){
   Email.send({
      to: to,
      from: from,
      subject: subject + name,
      html: GetContactEmail(message, name),
    });

  },

  NouvelleReponse: function(to, from, subject, name, message, titre){
   Email.send({
      to: to,
      from: from,
      subject: subject + titre,
      html: EmailReponse(message, name, titre),
    });

  },

  NouvelleRecommandation: function(to, from, subject, name, message){
   Email.send({
      to: to,
      from: from,
      subject: subject + name,
      html: EmailRecommandation(message, name),
    });

  },

  NouveauDons: function(to, from, subject, name, message, montant){
   Email.send({
      to: to,
      from: from,
      subject: subject + montant + "€",
      html: EmailDons(message, name, montant),
    });

  },


});

}