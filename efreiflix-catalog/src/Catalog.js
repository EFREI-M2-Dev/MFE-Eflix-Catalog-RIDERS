import React, { useEffect, useState } from 'react';
import './styles.css';
import { fetchData } from '../service/catalog';
import MovieCard from './components/MovieCard';
import { Swiper } from 'swiper/react';
import 'swiper/css';

const Catalog = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (e) {
        console.error('Failed to fetch data:', e);
      }
    };

    getData();
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      navigation
    >
      {data.map((movie) => {
        return <MovieCard key={movie.id} movie={movie} />;
      })}
    </Swiper>
  );
};

export default Catalog;
