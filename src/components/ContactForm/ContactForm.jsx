

import { useState } from 'react';
import css from './ContactForm.module.css';


export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('')
  


  const handleChangeName = e => {
    const { value } = e.target;
    setName(value);
  };

  const handleChangeNumber = e => {
    const { value } = e.target;
    setNumber(value);
  };
  
const  handleSubmit = e => {
     e.preventDefault();
    const { addNewContact } = setName;
     addNewContact({ ...setName});
   setName({ name: '' })
    setNumber({ number: '' });
  };

  
    return (
      <form className={css.form} onSubmit={handleSubmit} >
        <label htmlFor='name' className={css.formLabel}>Name </label>
        <input
        className={css.formName}
         id= "name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter name"
          value={name}
          onChange={handleChangeName}
        />
        <label htmlFor='number' className={css.formLabel}>Number </label>
        <input
         className={css.formNumber}
          id ="number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter phone number"
          value={number}
          onChange={handleChangeNumber}
        />
        <button  className={css.formBtn} type="submit" >
          Add contact
        </button>
      </form>
    );
    
  }




// export class ContactForm extends Component {

//   static propTypes = {
//     onSubmit: propTypes.func.isRequired,
//   };
    
//   state = {
//     name: '',
//     number: '',
//   };
 
    
//  hanldeChange = event => {
//     const { name, value } = event.currentTarget;

//     this.setState({
//       [name]: value,
//     });
//   };

//   handleSubmit = e => {
//      e.preventDefault();
//     const { addNewContact } = this.props;
//     addNewContact({ ...this.state });
//     this.setState({ name: '', number: '' });
//   };
  

//   render() {
//     const { name, number } = this.state;

//     return (
//       <form className={css.form} onSubmit={this.handleSubmit} >
//         <label htmlFor='name' className={css.formLabel}>Name </label>
//         <input
//         className={css.formName}
//          id= "name"
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           placeholder="Enter name"
//           value={name}
//           onChange={this.hanldeChange}
//         />
//         <label htmlFor='number' className={css.formLabel}>Number </label>
//         <input
//          className={css.formNumber}
//           id ="number"
//           type="tel"
//           name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//           placeholder="Enter phone number"
//           value={number}
//           onChange={this.hanldeChange}
//         />
//         <button  className={css.formBtn} type="submit" >
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }