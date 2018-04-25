import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const DemandeVirement = new Mongo.Collection('DemandeVirement');


if (Meteor.isServer) {

Meteor.methods({

      addVirement: function(IBAN,montant) {
            const user = Meteor.user()
          
             DemandeVirement.insert({
                  IBAN:IBAN,
                  from_id:this.userId,
                  from_name: user.username,
                  date: new Date(),
                  montant:montant,
                })
            console.log(montant)
            
      },

      

  

});



Meteor.publish('AllVirement', function () {

  return DemandeVirement.find();
});


}

