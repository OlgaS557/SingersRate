import { createSlice } from '@reduxjs/toolkit';
import data from '../../data.json';

const ratingSlice = createSlice({
  name: 'rating',
  initialState: {
    singers: data.body, // Set the initial state with the singers data
    // randomRatingIntervalId: null,
  },
  reducers: {
    setRating(state, action) {
      // const { singerName, rating } = action.payload;
      // const singerIndex = state.singers.findIndex((singer) => singer.name === singerName);
      // if (singerIndex !== -1) {
      //   state.singers[singerIndex].rating = rating;
      // }
      console.log('action', action);
        const { singerName, rating } = action.payload;
        console.log(Array.isArray(state.items))
        const singer = state.singers.find((singer) => singer.name === singerName);
        if (singer) {
          singer.rating = rating;
        }
        
    },
    sortSingersByRating(state) {
      state.singers.sort((a, b) => b.rating - a.rating);
    },
    // toggleRandomRating(state) {
    //   if (state.randomRatingIntervalId) {
    //     clearInterval(state.randomRatingIntervalId);
    //     state.randomRatingIntervalId = null;
    //   } else {
    //     state.randomRatingIntervalId = setInterval(() => {
    //       const randomSinger = state.singers[Math.floor(Math.random() * state.singers.length)];
    //       const randomRating = Math.floor(Math.random() * 11); // Random rating from 0 to 10
    //       state.singers.forEach((singer) => {
    //         if (singer.name === randomSinger.name) {
    //           singer.rating = randomRating;
    //         }
    //       });
    //     }, 2000); // Change rating every 2 seconds (adjust this value as needed)
        
    //   }
    // },
  },
});

export const { setRating, sortSingersByRating } = ratingSlice.actions;

export default ratingSlice.reducer;

//   setSort(state, action) {
//     console.log('action', action);
//     state.sort = action.payload;
//     if (state.sort === 'By rating') {
//       state.items.sort((a, b) => b.rating - a.rating);
//     }
//   },

