import React, {useState} from 'react';
import Rating from './Rating';
import styles from '../../css_modules/singeritem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setRating } from '../../redux/slices/ratingSlice';
import { sortSingersByRating } from '../../redux/slices/ratingSlice';

const SingerItem = ({ singer }) => {
  const dispatch = useDispatch();
  // const [rating, setRating] = useState(singer.rating);
  const rating = useSelector(state => state.ratingReducer.singers.find(s => s.name === singer.name)?.rating || singer.rating);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    dispatch(setRating({ singerName: singer.name, rating: newRating }));
    dispatch(sortSingersByRating());
    console.log('userRating', newRating);
  };

  return (
    <div className={styles.singer}>
      <img className={styles.card} src={singer.coverUrl} alt={singer.name} />
      <div className={styles.info}>
        <div className={styles.singer_name}>{singer.name}</div>
        <div className={styles.single}>{singer.single}</div>
        <div className={styles.rate}>
          <p className={styles.rate_me}>Rate me</p>
          <Rating stars={rating} singer={singer} onChange={handleRatingChange} />
        </div>
      </div>
    </div>
  );
};

export default SingerItem;

