import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";

import ContactsForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      <SearchBox />
      <ContactList />
    </div>
  );
}
