import PropTypes from 'prop-types';
import { ContactListItems } from "./ContactListItems/ContactListItems";

export const ContactList = ({ items }) => {
    return (
        <div>
            <h2>Contacts</h2>
            {items.map(item => (
                <ul key={item.id}>
                    <ContactListItems item={item} />
                </ul>
            ))}            
        </div>
    );
};

ContactList.prototype = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    })).isRequired,
};