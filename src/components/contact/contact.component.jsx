const Contact = ({contact, removeContact}) =>{
    return(
        <div>
            <li key={contact.id} className="contact-list-item">
              <div
                className="contact-avatar"
                style={{ backgroundImage: `url(https://robohash.org/set_set5/1${contact.id})` }}
              ></div>
              <div className="contact-details">
                <p>{contact.name}</p>
                <p>{contact.email}</p>
              </div>
              <button
                className="contact-remove"
                onClick={() => removeContact(contact)}
              >
                Remove
              </button>
            </li>
          </div>
    )
}

export default Contact;