import { useState} from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useEffect } from 'react';


export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem("contacts")) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  });

  const [filter, setFilter] = useState ('');


 const addNewContact = data  => {
    const { contacts } = setContacts;
    const newContact = {
      id: nanoid(),
      ...data,
    };
    contacts.some(({ name }) => name === data.name)
    
        ? alert(`${newContact.name} is already in contacts.`)
        : setContacts(prev=> ({
          setContacts: [...prev.contacts, newContact],
    }));

  };
 
     
    const handleDelete = (contactId) => {
      setContacts(prev => prev.contacts.filter(contact => contact.id !== contactId));
   
    };

    useEffect(() => {
      localStorage.setItem('contacts', JSON.stringify(contacts))
      
    }, [contacts]);

    const getFilteredContacts = () => {
    const filterContactsList = contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(setContacts.filter.toLowerCase());
    });
  //       const getFilteredContacts = useMemo(() => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase()),
  //   );
  // }, []);

    return filterContactsList;
    };

      const handleChange = e => {
    const { name, value } = e.target;
    setContacts({ [name]: value });
  };

   

  

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm addNewContact={addNewContact} />
        <h2> Contacts</h2>
        <Filter filter={contacts.filter} handleChange={handleChange} />
        <ContactList
          contacts={getFilteredContacts()}
          handleDelete={handleDelete}
        />
      </div>
    );
  }



// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//      filter: '',
//   };



  
//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts);
//     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
// }
//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts); 
//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
   
//  }

//   handleChange = e => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   addNewContact = data  => {
//     const { contacts } = this.state;
//     const newContact = {
//       id: nanoid(),
//       ...data,
//     };
//     contacts.some(({ name }) => name === data.name)
    
//         ? alert(`${newContact.name} is already in contacts.`)
//       : this.setState(prevState => ({
//           contacts: [...prevState.contacts, newContact],
//     }));

//   };
 

//   handleDelete = (contactId) => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   getFilteredContacts = () => {
//     const filterContactsList = this.state.contacts.filter(contact => {
//       return contact.name
//         .toLowerCase()
//         .includes(this.state.filter.toLowerCase());
//     });

//     return filterContactsList;
//   };

//   render() {
//     const { filter } = this.state;

//     return (
//       <div
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//           fontSize: 20,
//           color: '#010101',
//         }}
//       >
//         <h1>Phonebook</h1>
//         <ContactForm addNewContact={this.addNewContact } /> 
//         <h2> Contacts</h2>
//         <Filter filter={filter} handleChange={this.handleChange} />
//         <ContactList
//           contacts={this.getFilteredContacts()}
//           handleDelete={this.handleDelete}
//         />
//       </div>
//     );
//   }

