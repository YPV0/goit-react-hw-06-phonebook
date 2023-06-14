import PropTypes from 'prop-types';
import { FilterContainer, FilterField } from './Filter.styled';

export const Filter = ({ onFilterChange }) => {
  const handleChange = event => {
    onFilterChange(event.target.value);
  };

  return (
    <FilterContainer>
      <label>
        Find contacts by name or number
        <FilterField type="text" name="filter" onChange={handleChange} />
      </label>
    </FilterContainer>
  );
};

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};
