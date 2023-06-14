import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setFilter } from  '../../redux/actions';
import { FilterContainer, FilterField } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setFilter(event.target.value));
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
