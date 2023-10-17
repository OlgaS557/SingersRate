import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../css_modules/singerlist.module.css';
import imgRate from '../../assets/img/Component.png';
import data from '../../data.json';
import { setRating } from '../../redux/slices/ratingSlice';
import { sortSingersByRating } from '../../redux/slices/ratingSlice';

import SingerItem from '../singerItem/SingerItem';


const SingerList = () => {
    const dispatch = useDispatch();

    const [randomRatingIntervalId, setRandomRatingIntervalId] = useState(null);
    const singers = useSelector((state) => state.ratingReducer.singers);

    useEffect(() => {
        // Clean up the interval when the component unmounts
        return () => clearInterval(randomRatingIntervalId);
    }, [randomRatingIntervalId]);

    const handleRandomRating = () => {
        if (randomRatingIntervalId) {
            clearInterval(randomRatingIntervalId);
            setRandomRatingIntervalId(null);
        } else {
            const intervalId = setInterval(() => {
                data.body.forEach((singer) => {
                    const randomRating = Math.floor(Math.random() * 10) + 1;
                    dispatch(setRating({ singerName: singer.name, rating: randomRating }));
                });
                dispatch(sortSingersByRating()); // Sort the singers after updating their ratings
            }, 2000);
            setRandomRatingIntervalId(intervalId);
        }
       
    };
    
    return (
        <>
            <div className={styles.container}>
                <div className={styles.header}>
                    <img className={styles.rateImg} src={imgRate} alt='' />
                </div>
                <div className={styles.button}>
                    <button className={styles.random_button} onClick={handleRandomRating} type='button'>
                        {randomRatingIntervalId ? 'Stop Random Rating' : 'Start Random Rating'}
                    </button>
                </div>
                <div className={styles.singers}>
                    {singers.map((item) => <SingerItem singer={item} key={item.name} />)}
                </div>

            </div>
        </>
    )
}

export default SingerList;
