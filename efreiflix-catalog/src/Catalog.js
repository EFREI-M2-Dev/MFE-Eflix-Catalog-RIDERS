import React, { useEffect, useState } from 'react';
import './styles.css';
import { fetchData } from '../service/catalog';
import MovieCard from './components/MovieCard';

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
    <div className="grid grid-cols-6 gap-4">
      {data.map((movie) => {
        return (
          <MovieCard key={movie.id} movie={movie} />
        );
      })}
    </div>
  );
};

export default Catalog;
