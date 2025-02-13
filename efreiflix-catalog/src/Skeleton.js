import React from 'react';
import './styles.css';
import StarIcon from './assets/star';

const Skeleton = () => {
  return (
    <div className="grid grid-cols-6">
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
          <img
            src="https://fr.web.img6.acsta.net/medias/04/34/49/043449_af.jpg"
            alt="img movie"
            className="h-full"
          />
        </div>
        <div className="flex align-center w-full justify-between">
          <h2>Matrix</h2>
          <span className="text-gray-500">1999</span>
        </div>
        <ul className="flex gap-1">
          <Tag>SF</Tag>
          <Tag>Action</Tag>
        </ul>
      </div>
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

export default Skeleton;
