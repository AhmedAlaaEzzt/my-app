import React, { useEffect, useState } from "react";
import ContactList from "./components/contact-list/contact-list.component";
// import contactsData from "./data/contacts.data"; //fake data
import * as ContactsAPI from "./utils/ContactsAPI";
import CreateContact from "./components/create-contact/create-contact.component";
import { Route } from "react-router-dom";

function App(props) {
  console.log(props);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    ContactsAPI.getAll().then((contacts) => setContacts(contacts));
  }, []);

  const removeContact = (contact) => {
    setContacts(contacts.filter((c) => c.id !== contact.id));
    ContactsAPI.remove(contact);
  };

  return (
    <div>
      <Route exact path="/">
        <ContactList
          removeContact={removeContact}
          contacts={contacts}
        />
      </Route>

      <Route path="/create" component={CreateContact} />
    </div>
  );
}

export default App;
