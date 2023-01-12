import propTypes from 'prop-types';

import css from './ContactForm.module.css';
import { useState } from 'react';





export const ContactForm = ({handleSubmit})=> {

  const [name, setName] = useState('')
  const [number,setNumber] = useState('')
    

 
    
   const hanldeChange = event => {
    const { name, value } = event.currentTarget;

    ContactForm({
      [name]: value,
    });
  };

  const handleSubmit = e => {
     e.preventDefault();
    const { addNewContact } = props;
    addNewContact({ ...ContactForm });
    setContactForm({ name: '', number: '' });
  };
  


    // const { name, number } = ContactForm;

    return (
      <form className={css.form} onSubmit={this.handleSubmit} >
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
          onChange={this.hanldeChange}
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
          onChange={this.hanldeChange}
        />
        <button  className={css.formBtn} type="submit" >
          Add contact
        </button>
      </form>
    );
  }
