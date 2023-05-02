import PropTypes from 'prop-types';

//* елемент списку контактів

export const ContactListItems = ({ item: {name, number}, deleteContact }) => {     
    return (
        <li key={name}>
            <span>{name}: {number}</span> 
            <button type="button" onClick={() => deleteContact(name)}>Delete</button>
        </li>
    ); 
};

ContactListItems.prototype = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.number.isRequired,
    }).isRequired,
    deleteContact: PropTypes.func.isRequired,
};

