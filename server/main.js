import { Meteor } from 'meteor/meteor';
import { ContactsCollection } from '../imports/api/ContactsCollection';

Meteor.publish('contacts', () => {
  return ContactsCollection.find({});
});

Meteor.startup(async () => {});
