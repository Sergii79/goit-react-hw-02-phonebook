import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import { Form, Field, AddContactBtn, Heading } from "./ContactForma.styled";

//* форма додавання контактів

export const ContactForm = ({ onSave }) => {
    const handleSubmit = (values, actions) => {
        onSave({
            ...values,
            id: nanoid(),
        });
         actions.resetForm();
    };

    return (
        <Formik
            initialValues={{
                name: '', 
                number: '',
            }}
            onSubmit={handleSubmit}
            // onSubmit={(values, actions) => {
            //     onSave({
            //         ...values,
            //         id: nanoid(),
            //     });
            //     actions.resetForm();
            // }}
        >
            <Form>
                <Heading>Name</Heading>
                <Field
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                <Heading>Number</Heading>
                <Field
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />

                <AddContactBtn type="submit">add contact</AddContactBtn>            
            </Form>
        </Formik>
    );
};

ContactForm.prototype = {
    onSave: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    })).isRequired,
};