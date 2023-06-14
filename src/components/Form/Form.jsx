import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormContainer, InputField, SubmitButton } from './Form.styled';

export const Form = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const formRef = useRef();

  useEffect(() => {
    const nameInput = formRef.current.elements.name;
    const numberInput = formRef.current.elements.number;

    const handleAutoComplete = e => {
      const { name, value } = e.target;
      if (name === 'name') {
        setName(value);
      } else if (name === 'number') {
        setNumber(value);
      }
    };

    nameInput.addEventListener('input', handleAutoComplete);
    numberInput.addEventListener('input', handleAutoComplete);

    return () => {
      nameInput.removeEventListener('input', handleAutoComplete);
      numberInput.removeEventListener('input', handleAutoComplete);
    };
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    onAddContact(name, number);
    setName('');
    setNumber('');
  };

  return (
    <FormContainer onSubmit={handleSubmit} ref={formRef}>
      <h1>Phonebook</h1>
      <p>Name</p>
      <InputField
        type="text"
        name="name"
        value={name}
        onChange={e => setName(e.target.value)}
        pattern="^[a-zA-Z\u0430-\u044F\u0410-\u042F]+(([' -][a-zA-Z\u0430-\u044F\u0410-\u042F ])?[a-zA-Z\u0430-\u044F\u0410-\u042F]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <p>Number</p>
      <InputField
        type="tel"
        name="number"
        value={number}
        onChange={e => setNumber(e.target.value)}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <SubmitButton type="submit">Add contact</SubmitButton>
    </FormContainer>
  );
};

Form.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
