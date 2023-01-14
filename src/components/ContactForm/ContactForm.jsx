

import { useState } from 'react';
import css from './ContactForm.module.css';


export const ContactForm =  ({addNewContact}) => {
 const [state,setState] = useState({
  name:'',
  number:'',
 })

 const handleChange = e => {
  const { name,value } = e.target;
  setState(prev => ({...prev,[name]:value}))
};

const  handleSubmit = e => {
   e.preventDefault();
  addNewContact({ ...state });
  setState({ name: '', number: '' });

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
          value={state.name}
          onChange={handleChange}
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
          value={state.number}
          onChange={handleChange}
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