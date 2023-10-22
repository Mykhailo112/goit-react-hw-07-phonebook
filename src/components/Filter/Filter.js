import { FilterDiv } from './Filter.styled.js';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filtersSlice.js';
import { selectFilterValue } from 'redux/filter/selectors.js';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilterValue);
  return (
    <FilterDiv>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filterValue}
        onChange={e => dispatch(setFilter(e.currentTarget.value))}
      />
    </FilterDiv>
  );
};
