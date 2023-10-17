import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Rating from '@mui/material/Rating';
import { setRating } from '../../redux/slices/ratingSlice';

export default function BasicRating({ stars, singer, onChange }) {
  const [value, setValue] = useState(stars);

  const dispatch = useDispatch();

  useEffect(() => {
    setValue(stars);
  }, [stars]);

  const handleRatingChange = (event, newValue) => {
    setValue(newValue);
    onChange(newValue);
    dispatch(setRating({ singerName: singer.name, rating: newValue })); // Set a random singer name or ID as per your requirement
  };

  return (
    <Rating
      name="simple-controlled"
      value={value}
      onChange={handleRatingChange}
      max={10}
    />
  );
}


// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Rating from '@mui/material/Rating';

// export default function BasicRating({ stars, onChange }) {
//   // const [stars, setStars] = React.useState(0);

//   const handleRatingChange = (event, newValue) => {
//     onChange(newValue);
//   };
//   return (
//     <Box
//       sx={{
//         '& > legend': { mt: 2 },
//       }}
//     >

//       <Rating
//         name="simple-controlled"
//         value={stars}
//         onChange={handleRatingChange}
//       // onChange={(event, newValue) => {
//       //   setValue(newValue);
//       // }}
//       />
//     </Box>
//   );
// }

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Rating from '@mui/material/Rating';

// export default function BasicRating({stars, onChange}) {

//     const handleRatingChange = (event, value) => {
//       onChange(value);
//     };

//   return (
//     <Box
//       sx={{
//         '& > legend': { mt: 2 },
//       }}
//     >
//       <Rating
//         name="simple-controlled"
//         value={stars}
//         onChange={handleRatingChange}
//       />
//     </Box>
//   );
// }