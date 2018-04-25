
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Commande = new Mongo.Collection('commandes');

if (Meteor.isServer) {

const stripe = require("stripe")("sk_live_8JVrdontvfK6TMW3RFAuTOGJ");


Meteor.methods({
      Commande: function(token, nom, prenom, ville, adresse, code) {
         const user = Meteor.user();
         const from_id = this.userId;
         const from_name = user.username;

         Commande.insert({
                  from_id:this.userId,
                  from_name:user.username,
                  date: new Date(),
                  nom:nom,
                  prenom:prenom,
                  ville:ville,
                  adresse:adresse,
                  codePostal:code,
                });

             
            stripe.charges.create({
            amount: 2200,
            currency: "eur",
            description: "Commande Livre",
            source: token.id,// production
            //source: "tok_visa", // test
            metadata:
            {
              from_id:this.userId,
              from_name:user.username,
              nom:nom,
              prenom:prenom,
              ville:ville,
              adresse:adresse,
              code:code,
            }

          }, function(err, charge) {
          });





      },

});


}