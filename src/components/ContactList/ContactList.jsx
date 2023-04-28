import { ContactListItems } from "./ContactListItems/ContactListItems";

export const ContactList = ({ contacts }) => {
    return (
        <div>
            <h2>Contacts</h2>
            <ul>
                <ContactListItems contacts={contacts} />
            </ul>
        </div>

    );

};