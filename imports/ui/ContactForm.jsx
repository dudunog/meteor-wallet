import React, { useState } from 'react';
import { ContactsCollection } from '../api/ContactsCollection';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [imageURL, setImageURL] = useState('');

  const saveContact = () => {
    ContactsCollection.insert({ name, email, imageURL });

    setName('');
    setEmail('');
    setImageURL('');
  }

  return (
    <form>
      <div>
        <label htmlFor="name">Nome</label>
        <input
          id='name'
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">E-mail</label>
        <input
          id='email'
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="imageURL">Image URL</label>
        <input
          id='teste'
          type="imageURL"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />
      </div>
      <div>
        <button type='button' onClick={saveContact}>
          Save contact
        </button>
      </div>
    </form>
  )
};
