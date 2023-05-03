import PropTypes from 'prop-types';
import { TextList, Text, DeleteBtn } from "./ContactListItems.styled";
import { MdDeleteForever } from "react-icons/md";

//* елемент списку контактів

export const ContactListItems = ({ item: {name, number}, deleteContact }) => {     
    return (
        <TextList key={name}>
            <Text>{name}: {number}</Text> 
            <DeleteBtn type="button" onClick={() => deleteContact(name)}>
                <MdDeleteForever
                    style={{ color: "red" }}
                />
            </DeleteBtn>
        </TextList>
    ); 
};

ContactListItems.prototype = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.number.isRequired,
    }).isRequired,
    deleteContact: PropTypes.func.isRequired,
};

