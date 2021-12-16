import PropTypes from "prop-types";
import { useState } from "react";
import {Link} from 'react-router-dom';

const ContactList = ({ contacts, removeContact }) => {
  const [query, setQuery] = useState("");

  const showingContacts = query ===''
  ? contacts
  : contacts.filter(contact => contact.name.toLowerCase().includes(query.toLowerCase()) )

  const clearQuery =()=>{
    setQuery('')
  }
  return (
    <div className="list-contacts">
      <div className="list-contacts-top">
        <input
          className="search-contacts" 
          type="text"
          placeholder="Search Contacts"
          value={query}
          onChange={(event)=> setQuery(event.target.value.trim())} 
        />
        <Link 
          to="/create"
          className="add-contact">
            Add Contact
        </Link>
      </div>
      {showingContacts.length !== contacts.length && (
        <div className="showing-contacts">
          <span>Now showing {showingContacts.length} of {contacts.length}</span>
          <button onClick={clearQuery}>Show all</button>
        </div>)}
      <ol className="contact-list">
        {showingContacts.map((contact) => (
          <li key={contact.id} className="contact-list-item">
            <div
              className="contact-avatar"
              style={{ backgroundImage: `url(${contact.avatarURL})` }}
            ></div>
            <div className="contact-details">
              <p>{contact.name}</p>
              <p>@{contact.handle}</p>
            </div>
            <button
              className="contact-remove"
              onClick={() => removeContact(contact)}
            >
              Remove
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  removeContact: PropTypes.func.isRequired,
};

export default ContactList;
