import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Notifications = new Mongo.Collection('notifications');
import { Posts } from './Messages.js';

if (Meteor.isServer) {


  Notifications._ensureIndex({ "to_id":1});


Meteor.methods({

      ChatNotif: function(message,to_id) {
          new SimpleSchema({
            message: {type: String},
            to_id: {type: String},
          }).validate({
            to_id,
            message,
          });

            const user = Meteor.user();
            const search = Meteor.users.findOne({'_id':to_id});
            const gender = user.profile.gender;

            const to_name = search.username;
            const from_name = user.username;
            
            {to_id != this.userId ? 
             Notifications.insert({
                  message:message,
                  from_id:this.userId,
                  from_name: from_name,
                  to_id:to_id,
                  to_name: to_name,
                  date: new Date(),
                  read:false,
                  type:'chat',
                  gender:gender,
                })
             : ''}

      },

      supprimerNotification: function(idMessage) {
          check(idMessage, String);
          Notifications.remove({_id:idMessage});
       },

       ReponseNotif: function(
        message,
        id
        ) {
         new SimpleSchema({
            message: {type: String},
            id: {type: String},
          }).validate({
            id,
            message,
          });

        const user = Meteor.user();
        const author = user.username;
        const gender = user.profile.gender;
        const userId = this.userId;
        const postId = id;

        const search = Posts.findOne(id);
        const post_author_id = search.post_author_id;
        const post_author_name= search.post_author;
        const post_title= search.post_title;

              Notifications.insert({
                  message: message,
                  date: new Date(),
                  post_author:author,
                  gender:gender,
                  post_author_name: post_author_name,
                  to_id:post_author_id,
                  userId:userId,
                  postId:postId,
                  post_title:post_title,
                  read:false,
                  type:'reponse'
                });

      },

      NotifRecommandation: function(id,text,note) {
        new SimpleSchema({
            text: {type: String},
            id: {type: String},
            note: {type: Number},
          }).validate({
            id,
            text,
            note,
          });

          let search = Meteor.users.findOne({'_id':id});
          let name = search.username;
          let user = Meteor.user();

          Notifications.insert({
                  from_id:this.userId,
                  to_id:id,
                  from_name: user.username,
                  to_name: search.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  note: note,
                  message: text,
                  read:false,
                  type:'recommandaton'
                });       
       },

       NotifDons: function(message, to_id, to_name, montant,) {
        new SimpleSchema({
            message: {type: String},
            to_id: {type: String},
            to_name: {type: String},
            montant: {type: Number},
          }).validate({
            to_id,
            message,
            to_name,
            montant
          });

         const user = Meteor.user();
         const from_id = this.userId;
         const from_name = user.username;
         const gender = user.profile.gender;
         Notifications.insert({
                  from_id:this.userId,
                  from_name:user.username,
                  to_id: to_id,
                  to_name:to_name,
                  gender :user.profile.gender,
                  date: new Date(),
                  montant: montant,
                  message:message,
                  read:false,
                  type:'don'
                });

     },

});

Meteor.publish('AllNotifications', function () {

  return Notifications.find();
});

Meteor.publish('Notifications', function (id) {
  new SimpleSchema({
      id: {type: String},
    }).validate({id});

  return Notifications.find({'to_id':id})
});
}
