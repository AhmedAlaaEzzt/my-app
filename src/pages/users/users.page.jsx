import ContactList from "../../components/contact-list/contact-list.component";
function Users({users}) {
  return (
    <div>
      <h2>Users</h2>
      <ContactList contacts={users}/>
    </div>
  );
}

export default Users;
