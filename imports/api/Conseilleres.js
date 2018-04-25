import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Conseilleres = new Mongo.Collection('conseilleres');



if (Meteor.isServer) {

Meteor.startup(function () {  
  Conseilleres._ensureIndex({ "user_id": 1});
});

Meteor.methods({

      premierAmour: function(theme, text) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { premierAmour: theme, premierAmourText:text, },
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  premierAmourText:text,
                  premierAmour:theme,
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                });
            } 
      },

      trahison: function(theme, text) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { trahison: theme, trahisonText:text, },
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  trahisonText:text,
                  trahison:theme,
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                });
            } 
      },

      Friendzone: function(theme, text) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { Friendzone: theme, FriendzoneText:text, },
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  FriendzoneText:text,
                  Friendzone:theme,
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                });
            } 
      },

      amourdistance: function(theme, text) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { amourdistance: theme, amourdistanceText:text, },
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  amourdistanceText:text,
                  amourdistance:theme,
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                });
            } 
      },

      separation: function(theme, text) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { separation: theme, separationText:text, },
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  separationText:text,
                  separation:theme,
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                });
            } 
      },

      timidite: function(theme, text) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { timidite: theme, timiditeText:text, },
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  timiditeText:text,
                  timidite:theme,
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                });
            } 
      },

      depression: function(theme, text) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { depression: theme, depressionText:text, },
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  depressionText:text,
                  depression:theme,
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                });
            } 
      },

      mutilation: function(theme, text) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { mutilation: theme, mutilationText:text, },
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  mutilationText:text,
                  mutilation:theme,
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                });
            } 
      },

      suicide: function(theme, text) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { suicide: theme, suicideText:text, },
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  suicideText:text,
                  suicide:theme,
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                });
            } 
      },

      deces: function(theme, text) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { deces: theme, decesText:text, },
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  decesText:text,
                  deces:theme,
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                });
            } 
      },


      premierfois: function(theme, text) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { premierfois: theme, premierfoisText:text, },
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  premierfoisText:text,
                  premierfois:theme,
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                });
            } 
      },

      contraception: function(theme, text) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { contraception: theme, contraceptionText:text, },
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  contraceptionText:text,
                  contraception:theme,
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                });
            } 
      },

      mst: function(theme, text) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { mst: theme, mstText:text, },
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  mstText:text,
                  mst:theme,
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                });
            } 
      },

      viol: function(theme, text) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { viol: theme, violText:text, },
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  violText:text,
                  viol:theme,
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                });
            } 
      },

      avortement: function(theme, text) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { avortement: theme, avortementText:text, },
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  avortementText:text,
                  avortement:theme,
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                });
            } 
      },

      orientationSex: function(theme, text) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { orientationSex: theme, orientationSexText:text, },
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  orientationSexText:text,
                  orientationSex:theme,
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                });
            } 
      },

      Anorexie: function(theme, text) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { Anorexie: theme, AnorexieText:text, },
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  AnorexieText:text,
                  Anorexie:theme,
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                });
            } 
      },

      obesite: function(theme, text) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { obesite: theme, obesiteText:text, },
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  obesiteText:text,
                  obesite:theme,
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                });
            } 
      },

      drogue: function(theme, text) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { drogue: theme, drogueText:text, },
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  drogueText:text,
                  drogue:theme,
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                });
            } 
      },

      alcool: function(theme, text) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { alcool: theme, alcoolText:text, },
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  alcoolText:text,
                  alcool:theme,
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                });
            } 
      },

      complexe: function(theme, text) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { complexe: theme, complexeText:text, },
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  complexeText:text,
                  complexe:theme,
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                });
            } 
      },

      hopital: function(theme, text) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { hopital: theme, hopitalText:text, },
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  hopitalText:text,
                  hopital:theme,
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                });
            } 
      },

      accident: function(theme, text) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { accident: theme, accidentText:text, },
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  accidentText:text,
                  accident:theme,
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                });
            } 
      },

      handicap: function(theme, text) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { handicap: theme, handicapText:text, },
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  handicapText:text,
                  handicap:theme,
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                });
            } 
      },

      echecEcole: function(theme, text) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { echecEcole: theme, echecEcoleText:text, },
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  echecEcoleText:text,
                  echecEcole:theme,
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                });
            } 
      },

      Harcelement: function(theme, text) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { Harcelement: theme, HarcelementText:text, },
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  HarcelementText:text,
                  Harcelement:theme,
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                });
            } 
      },

      discrimination: function(theme, text) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { discrimination: theme, discriminationText:text, },
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  discriminationText:text,
                  discrimination:theme,
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                });
            } 
      },

      Violence: function(theme, text) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { Violence: theme, ViolenceText:text, },
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  ViolenceText:text,
                  Violence:theme,
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                });
            } 
      },

      DevenirConseiller: function(presentation) {
            const user = Meteor.user()
            const IsConseiller = Conseilleres.findOne({user_id:this.userId});
            
            {
              IsConseiller
             ?
             Conseilleres.update({user_id:this.userId}, {
              $set: { presentation: presentation},
              }) && console.log(IsConseiller)
             :
             Conseilleres.insert({
                  user_id: this.userId,
                  username: user.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  naissance:user.profile.naissance,
                  presentation: presentation,
                });
            } 
      },

      IsConseillerHeader: function() {
                const IsConseiller = Conseilleres.findOne({user_id:this.userId});
                {IsConseiller ? Istrue = true : Istrue = false}
                return Istrue;
             }, 

      IsConseiller: function(id) {
                const IsConseiller = Conseilleres.find({'user_id':id}).count();
                {IsConseiller==0 ? Istrue = true : Istrue = false}
                console.log(IsConseiller)
                return Istrue;
             },    

  

});

Meteor.publish('AllConseiller', function () {

  return Conseilleres.find();
});

Meteor.publish('IsConseiller', function (id) {
  new SimpleSchema({
      id: {type: String},
    }).validate({id});
  return Conseilleres.find({'user_id':id});
});

}
