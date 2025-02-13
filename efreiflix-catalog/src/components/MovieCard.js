import React from "react";
import StarRating from "./StarRating";
import Tag from "./Tag";

const MovieCard = ({ movie }) => {
    return (
        <div className="group flex flex-col gap-1 justify-center cursor-pointer">
            <div className="group relative flex items-center justify-center w-full aspect-[2/3] overflow-hidden">
                <div className="hidden group-hover:flex absolute top-0 items-center justify-center left-0 bg-gray-900 text-white h-full w-full bg-opacity-50">
                    <StarRating rating={movie.rating} />
                </div>
                <img
                    src={movie.posterUrl}
                    alt={movie.title}
                    className="h-full"
                />
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
};

export default MovieCard;
