import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import { setSort} from '../../redux/slices/ratingSlice';

export default function SortPopup() {
    const dispatch = useDispatch();
    const {sort} = useSelector((state) => state.ratingReducer);
    console.log('sort', sort);

    const handleChange = (event) => {
      console.log('Sorting changed:', event.target.value);
       dispatch(setSort(event.target.value));
    };

    return (
      <Box sx={{ minWidth: 130, minHeight: 20 }}>
        <FormControl fullWidth>
          <InputLabel >Sort by</InputLabel>
          <Select
            size='small'
            value={sort}
            label="Sort by"
            onChange={handleChange}
          >
            <MenuItem value={'By rating'}>By rating</MenuItem>
          </Select>
        </FormControl>
      </Box>
    );
  }

    // const dispatch = useDispatch();
    // const sort = useSelector((state) => state.ratingReducer.sort);
    // console.log('sort', sort);
   
    // const handleChange = (event) => {
    //   console.log(event.target.value);
    //    dispatch(setSort(event.target.value));
    // };

    // const {items, sort} = useSelector((state) => state.ratingReducer);
    // console.log('sort', sort);

    // const handleChange = (event) => {
    //   console.log('Sorting changed:', event.target.value);
    //    dispatch(setSort(event.target.value));
    //    dispatch(setItems(items));
    // };
  
    // useEffect(() => {
    //   console.log('Sorting effect:', sort);
    //   dispatch(setItems(items));
    // }, [sort, dispatch, items]);