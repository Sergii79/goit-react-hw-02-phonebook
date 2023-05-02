import PropTypes from 'prop-types';
import { ContactListItems } from "./ContactListItems/ContactListItems";

//* список контактів

export const ContactList = ({ filterContacts, deleteContact }) => {
    const contacts = filterContacts();
    return (
        <div>            
            {contacts.map(item => (
                <ul key={item.id}>
                    <ContactListItems
                        item={item}
                        deleteContact={deleteContact}
                    />
                </ul>
            ))}            
        </div>
    );
};

ContactList.prototype = {
    filterContacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    })).isRequired,
    deleteContact: PropTypes.func.isRequired,   
};