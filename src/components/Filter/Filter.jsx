import PropTypes from 'prop-types';
import { Headline, HeadInput } from "./Filter.styled";

//* фільтр пошуку

export const Filter = ({ onFilter }) => {
    return (
        <div>
            <Headline>Find contacts by name</Headline>
            <HeadInput
                type="text"
                name="filter"                
                onChange={onFilter}
            />
        </div>
    )
};

Filter.propTypes = {  
    onFilter: PropTypes.func.isRequired,
};