import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Chat = new Mongo.Collection('chat');

import { ContactChat } from './ContactChat.js';
import { Notifications } from './Notifications.js';

if (Meteor.isServer) {

Meteor.startup(function () {  
  Chat._ensureIndex({ "from_id": 1, "to_id":1});
});

Meteor.methods({

      addMessageChat: function(message,to_id) {
        new SimpleSchema({
            message: {type: String},
            to_id: {type: String},
          }).validate({
            to_id,
            message,
          });

            const user = Meteor.user()
            const search = Meteor.users.findOne({'_id':to_id});
            const date = new Date();
            const to_name = search.username;
            const from_name = user.username;
            
            {to_id != this.userId ? 
             Chat.insert({
                  message:message,
                  from_id:this.userId,
                  from_name: from_name,
                  to_id:to_id,
                  to_name: to_name,
                  post_date: new Date(),
                  read:false,
                })
             : ''}

            const request = ContactChat.findOne({$or : [{from_id: this.userId, to_id:to_id}, {from_id: to_id, to_id:this.userId}]});
             {to_id != this.userId ? 
            ContactChat.update(request._id, {$set: {last_message:message, read:false, authorLastMessage:this.userId, date} })
             : ''}
      },

      updateContact: function(to_id) {
            check(to_id, Object);
            const search = Meteor.users.findOne({'_id':to_id.to_id});
            const to_name = search.username;
            
            const searchContact = ContactChat.findOne({$or : [{from_id: this.userId, to_id:to_id.to_id}, {from_id: to_id.to_id, to_id:this.userId}]});
            

            {searchContact.authorLastMessage && searchContact.authorLastMessage != this.userId ?
              ContactChat.update(searchContact._id, {$set: {read:true} }) : ''}

            const searchMessage = Chat.find({$or : [{from_id: to_id.to_id, to_id:this.userId}]});
            ContactChat.update(searchMessage._id, {$set: {read:true}})
            
            Chat.update({'to_id':this.userId, 'from_id':to_id.to_id},{$set: {read:true}}, {multi: true})
            
            Notifications.update({'to_id':this.userId, 'type':'message'},{$set: {read:true}}, {multi: true})
            
            return search
  
      },

      lastContact: function() {
                  /*     
            const searchContact = ContactChat.findOne({$or : [{from_id: this.userId}, {to_id:this.userId}]});
            if(searchContact.from_id){
            const _from_id = searchContact.from_id;
            const _to_id = searchContact.to_id;

           {
            _from_id != this.userId ?
            id = _from_id :
            id = _to_id
           }
            return id
          }
  */
      },

      NotifChat: function(message_id){
        check(message_id, String);
        Chat.update(message_id, {$set: {read:true} })
      }
});

Meteor.publish('Chat', function (to_id, from_id) {
  new SimpleSchema({
      to_id: {type: String},
      from_id: {type: String},
    }).validate({to_id, from_id});

  return Chat.find({$or : [{from_id: from_id, to_id:to_id}, {from_id: to_id, to_id:from_id}]}, {
    fields: {'post_date':1, 'message':1, 'from_id':1, 'to_id':1, 'read':1}
  });
});

Meteor.publish('ChatCount', function (id) {
  new SimpleSchema({
      id: {type: String},
    }).validate({id});

  return Chat.find({$or : [{from_id: id}, {to_id:id}]}, {
    fields: {'to_id':1, 'read':1, 'post_date':1, 'message':1, 'from_id':1, 'from_name':1}
  });
});


}

