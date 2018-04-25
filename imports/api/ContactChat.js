import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const ContactChat = new Mongo.Collection('contact_Chat');



if (Meteor.isServer) {

Meteor.startup(function () {  
  ContactChat._ensureIndex({ "from_id": 1, "to_id":1});
});

Meteor.methods({

      addContactChat: function(to_id) {
        new SimpleSchema({
            to_id: {type: String},
          }).validate({
            to_id,
          });

            const user = Meteor.user()
            const userId = Meteor.userId();
            const name = Meteor.users.findOne(to_id);
            const username = name.username;
            const request = ContactChat.findOne({$or : [{from_id: userId, to_id:to_id}, {from_id: to_id, to_id:userId}]});
            {
              to_id!==userId && !request ?
              ContactChat.insert({
                  date: new Date(),
                  last_message : ' ',
                  from_id: Meteor.userId(),
                  from_name: user.username,
                  to_id: to_id,
                  to_name: username,
                  read : false,
                })
              : ''
            }
       },

       deleteContact: function(id) {
        new SimpleSchema({
            id: {type: String},
          }).validate({
            id,
          });
              ContactChat.remove(id)
       },
});


Meteor.publish('AllContactChat', function () {

  return ContactChat.find();
});

Meteor.publish('ContactChat', function (id) {
  new SimpleSchema({
      id: {type: String},
    }).validate({id});
  return ContactChat.find({$or : [{from_id: id}, {to_id:id}]});
});
}
