import PropTypes from 'prop-types';
import { Formik, Field, Form } from 'formik';
import { nanoid } from 'nanoid';

//* форма додавання контактів

export const ContactForm = ({ onSave }) => {
    const handleSubmit = values => {        
        onSave({
            ...values,
            id: nanoid(),
        });
    };

    return (
        <Formik
            initialValues={{
                name: '', 
                number: '',
            }}
            onSubmit={handleSubmit}
        >
            <Form>
                <h2>Name</h2>
                <Field
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                <h2>Number</h2>
                <Field
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />

                <button type="submit">add contact</button>            
            </Form>
        </Formik>
    );
};

ContactForm.prototype = {
    onSave: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    })).isRequired,
};