
export const ContactListItems = ({ contacts }) => {
    if (!Array.isArray(contacts)) {
        return null; // or render an error message
    }

    return contacts.map(({ name }) => {
        return (            
            <li key={name}>
                <span>{name}</span>
            </li>
               
        );
    })
};