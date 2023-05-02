import PropTypes from 'prop-types';

//* фільтр пошуку

export const Filter = ({ onFilter }) => {
    return (
        <div>
            <h4>Find contacts by name</h4>
            <input
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