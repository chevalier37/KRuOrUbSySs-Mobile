import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Conseilleres } from './Conseilleres.js';

export let Favoris = new Mongo.Collection('favoris');



if (Meteor.isServer) {

Meteor.startup(function () {  
  Favoris._ensureIndex({ "from_id": 1});
});

Meteor.methods({

      addFavoris: function(idMessage,text,authorName, authorId, gender) {
          new SimpleSchema({
            idMessage: {type: String},
            text: {type: String},
            authorName: {type: String},
            authorId: {type: String},
            gender: {type: String},
          }).validate({
            idMessage,
            text,
            authorName,
            authorId,
            gender
          });


          let user = Meteor.user();
          Favoris.insert({
                  from_id:this.userId,
                  authorId:authorId,
                  from_name: user.username,
                  authorName: authorName,
                  gender :gender,
                  date: new Date(),
                  text:text,
                  idMessage:idMessage,
                });
       },

       supprimerFavoris: function(idMessage) {
        new SimpleSchema({
            idMessage: {type: String},
          }).validate({
            idMessage,
          });

          Favoris.remove({_id:idMessage});
       },
});


Meteor.publish('allFavoris', function () {
  return Favoris.find()
});

Meteor.publish('PageFavoris', function (id) {
  new SimpleSchema({
      id: {type: String},
    }).validate({id});

  return Favoris.find({'from_id':id})
});

Meteor.publish('isFavoris', function (idMessage, from_id) {
  new SimpleSchema({
      idMessage: {type: String},
      from_id: {type: String},
    }).validate({idMessage,from_id});

  return Favoris.find({'from_id':from_id, 'idMessage':idMessage})
});
}
