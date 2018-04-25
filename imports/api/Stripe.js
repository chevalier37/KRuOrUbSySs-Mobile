
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Dons = new Mongo.Collection('dons');

if (Meteor.isServer) {
SSL('/Users/roussatjean-claude/Desktop/Kurbys/private/server.key','/Users/roussatjean-claude/Desktop/Kurbys/private/server.crt', 443);

//const stripe = require("stripe")("sk_test_JvofPcmk1InWfME0dR7HUJRK");
const stripe = require("stripe")("sk_live_8JVrdontvfK6TMW3RFAuTOGJ");

Meteor.methods({
      Paiement: function(token, message, montant, to_id, to_name, to_gender) {
         
         const user = Meteor.user();
         const frais = montant * 0.2;
         const from_id = this.userId;
         const from_name = user.username;
         const montantPercu = montant * 0.8;
         const gender = user.profile.gender;
         
         Dons.insert({
                  from_id:this.userId,
                  from_name:user.username,
                  to_id: to_id,
                  to_name:to_name,
                  from_gender :user.profile.gender,
                  to_gender:to_gender,
                  date: new Date(),
                  montantTotal: montant,
                  frais:frais,
                  montantPercu:montantPercu,
                  message:message,
                  read:false,

                });

             
            let montantStripe = montant * 100;
            stripe.charges.create({
            amount: montantStripe,
            currency: "eur",
            description: "Don",
            source: token.id,// production
            //source: "tok_visa", // test
            metadata:
            {
              from_id:this.userId,
              from_name:user.username,
              to_id: to_id,
              to_name:to_name,
              message:message,
            }

          }, function(err, charge) {
            
          });

      },

       DonsNotif: function(message_id){
        new SimpleSchema({
            message_id: {type: String},
          }).validate({
            message_id,
          });
        Dons.update(message_id, {$set: {read:true} })
      }

});

Meteor.publish('AllDons', function () {

  return Dons.find();
});

Meteor.publish('Dons', function (id) {
new SimpleSchema({
      id: {type: String},
    }).validate({id});

  return Dons.find({'to_id':id});
});

Meteor.publish('MyDons', function (id) {
new SimpleSchema({
      id: {type: String},
    }).validate({id});

  return Dons.find({$or : [{from_id: id}, {to_id:id}]});
});

}