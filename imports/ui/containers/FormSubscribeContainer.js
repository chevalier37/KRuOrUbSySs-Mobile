import { Meteor } from 'meteor/meteor';
//import { Lists } from '../../api/lists/lists.js';
import { withTracker } from 'meteor/react-meteor-data';

//Component
import FormSubscribe from '../component/FormSubscribe.js';

export const FormSubscribeContainer = withTracker(({ id }) => {



  return {
    test: "1",
  };
})(FormSubscribe);