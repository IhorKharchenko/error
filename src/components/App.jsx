import './App.css';

// import ContactForm from '../components/ContactForm/ContactForm';
import { Filter } from './Filter/filter';
import { ContactList } from '../components/ContactList/contactList';

export function App() {
  return (
    <div className="container">
      <div className="form-container">
        <h1>Phonebook</h1>
        {/* <ContactForm /> */}
      </div>
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
