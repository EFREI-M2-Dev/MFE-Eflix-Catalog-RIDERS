import React, { useEffect, useState } from 'react';
import './styles.css';
import { fetchData } from '../service/catalog';
import StarIcon from './assets/star';

const Catalog = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (e) {
        error.log('Failed to fetch datas:', e);
      }
    };

    getData();
  });

  if (!data) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-6 gap-4">
      {data.map((movie) => {
        return (
          <div className="group flex flex-col gap-1 justify-center cursor-pointer">
            <div className="group relative flex items-center justify-center w-full aspect-[2/3] overflow-hidden">
              <div className="hidden group-hover:flex absolute top-0 items-center justify-center left-0 bg-gray-900 text-white h-full w-full bg-opacity-50">
                <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />
                <div className="w-7">
                  <div className="overflow-hidden w-[calc(28px*0.7)]">
                    <StarIcon />
                  </div>
                </div>
              </div>
              <img src={movie.posterUrl} alt="img movie" className="h-full" />
            </div>
            <div className="flex align-center w-full justify-between">
              <h2>{movie.title}</h2>
              <span className="text-gray-500">{movie.year}</span>
            </div>
            <ul className="flex gap-1">
              {movie.genres.map((genre) => {
                return <Tag>{genre}</Tag>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

const Tag = ({ children }) => {
  return (
    <li className="flex px-1.5 py-0.5 rounded-md border border-solid border-gray-400 bg-gray-300 text-gray-700">
      {children}
    </li>
  );
};

export default Catalog;
