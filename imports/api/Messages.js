import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const Posts = new Mongo.Collection('posts');





if (Meteor.isServer) {

Meteor.startup(function () {  
  Posts._ensureIndex({ "post_author_id": 1});
});

Meteor.methods({

      addMessage: function(
        titre,
        message,
        premierAmour,
        trahison,
        Friendzone,
        amourdistance,
        separation,
        timidite,
        depression,
        suicide,
        deces,
        mutilation,
        premierfois,
        Contraception,
        mst,
        viol,
        avortement,
        orientationSex,
        Anorexie,
        obesite,
        drogue,
        alcool,
        complexe,
        hopital,
        handicap,
        Accident,
        echecEcole,
        Harcelement,
        Discrimination,
        Violence,
        autre,
        ) {

        new SimpleSchema({
            titre: {type: String},
            message: {type: String},
            premierAmour: {type: Boolean},
            trahison: {type: Boolean},
            Friendzone: {type: Boolean},
            amourdistance: {type: Boolean},
            separation: {type: Boolean},
            timidite: {type: Boolean},
            depression: {type: Boolean},
            suicide: {type: Boolean},
            deces: {type: Boolean},
            mutilation: {type: Boolean},
            premierfois: {type: Boolean},
            Contraception: {type: Boolean},
            mst: {type: Boolean},
            viol: {type: Boolean},
            avortement: {type: Boolean},
            orientationSex: {type: Boolean},
            Anorexie: {type: Boolean},
            obesite: {type: Boolean},
            drogue: {type: Boolean},
            alcool: {type: Boolean},
            complexe: {type: Boolean},
            hopital: {type: Boolean},
            handicap: {type: Boolean},
            Accident: {type: Boolean},
            echecEcole: {type: Boolean},
            Harcelement: {type: Boolean},
            Discrimination: {type: Boolean},
            Violence: {type: Boolean},
            autre: {type: Boolean},
          }).validate({
            titre,
            message,
            premierAmour,
            trahison,
            Friendzone,
            amourdistance,
            separation,
            timidite,
            depression,
            suicide,
            deces,
            mutilation,
            premierfois,
            Contraception,
            mst,
            viol,
            avortement,
            orientationSex,
            Anorexie,
            obesite,
            drogue,
            alcool,
            complexe,
            hopital,
            handicap,
            Accident,
            echecEcole,
            Harcelement,
            Discrimination,
            Violence,
            autre,
          });

        const user = Meteor.user();
        const username = user.username;
        const naissance = user.profile.naissance;
        const gender = user.profile.gender;

              Posts.insert({
                  naissance:naissance,
                  post_title: titre,
                  post_content: message,
                  premierAmour: premierAmour,
                  trahison:trahison,
                  Friendzone:Friendzone,
                  amourdistance:amourdistance,
                  separation:separation,
                  timidite:timidite,
                  depression:depression,
                  suicide:suicide,
                  deces:deces,
                  mutilation:mutilation,
                  premierfois:premierfois,
                  Contraception:Contraception,
                  mst:mst,
                  viol:viol,
                  avortement:avortement,
                  orientationSex:orientationSex,
                  Anorexie:Anorexie,
                  obesite:obesite,
                  drogue:drogue,
                  alcool:alcool,
                  complexe:complexe,
                  hopital:hopital,
                  handicap:handicap,
                  Accident:Accident,
                  echecEcole:echecEcole,
                  Harcelement:Harcelement,
                  Discrimination:Discrimination,
                  Violence:Violence,
                  autre:autre,
                  post_date:new Date(),
                  post_author:username,
                  gender:gender,
                  signaler:0,
                  upvoters: [],
                  post_author_id : this.userId,
                });
             },

        'signaler'(Id) {
          check(Id, String);
          const search = Posts.findOne(Id);
          const nbrSignaler = search.signaler;
          const updateSignaler = nbrSignaler + 1;

          Posts.update(Id, {
          $set: { signaler: updateSignaler },
          });

          if (!search)
            throw new Meteor.Error('invalid', 'Post not found');
          if (_.include(search.upvoters, this.userId))
            throw new Meteor.Error('invalid', 'Already upvoted this post');
          Posts.update(Id, {
            $addToSet: {upvoters: this.userId},
          });

          {nbrSignaler == 2 ?
            Posts.remove(Id) : ''
          }
      },

      supprimerMessage: function(idMessage) {
         check(idMessage, String);
          Posts.remove({_id:idMessage});
       },


});





Meteor.publish('AllMessages', function ( ) {

  return Posts.find();
});


Meteor.publish('SingleMessages', function (reponse) {
new SimpleSchema({
      reponse: {type: String},
    }).validate({reponse});

  return Posts.find({'_id':reponse}, {
    fields: {'post_author_id':1, 'post_title':1}
  });
});

Meteor.publish('MyMessages', function (myId) {
new SimpleSchema({
      myId: {type: String},
    }).validate({myId});

  return Posts.find({'post_author_id':myId});
});

Meteor.publish('Message', function (id) {
new SimpleSchema({
      id: {type: String},
    }).validate({id});

  return Posts.find({'_id':id});
});


}