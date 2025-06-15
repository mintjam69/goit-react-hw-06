import { FcContacts } from 'react-icons/fc';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import css from './App.module.css';

function App() {
  return (
    <div className={css.container}>
      <div className={css.header}>
        <h1>Phonebook</h1>
        <FcContacts className={css.icon} />
      </div>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
