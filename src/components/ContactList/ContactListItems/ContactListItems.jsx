import PropTypes from 'prop-types';

export const ContactListItems = ({ item: {name, number} }) => {   
  
    return (
        <li key={name}>
            <span>{name}: {number}</span>            
        </li>
    ); 
};

ContactListItems.prototype = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.number.isRequired,
    }).isRequired,
};

