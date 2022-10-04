import './App.css';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/contactList';
import { Filter } from './Filter/filter';

export function App() {
  return (
    <div className="container">
      <div className="form-container">
        <h1>Phonebook</h1>
        <ContactForm />
      </div>
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
