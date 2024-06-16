import React from 'react';
import { Meteor } from 'meteor/meteor';

import { useTracker } from 'meteor/react-meteor-data';
import { ContactsCollection } from '../api/ContactsCollection';

export const ContactList = () => {
  const contacts = useTracker(() => {
    Meteor.subscribe('contacts');
    return ContactsCollection.find({}).fetch();
  });

  return (
    <>
      <h3>Contacts List</h3>
      <ul>
        {contacts.map(contact => (
          <li key={contact._id}>{contact.name} - {contact.email}</li>
        ))}
      </ul>
    </>
  )
}
