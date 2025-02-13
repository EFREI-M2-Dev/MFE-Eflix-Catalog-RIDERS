import React from "react";
import StarIcon from "../assets/star";

const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const decimalPart = rating - fullStars;
    const starElements = [];

    for (let i = 0; i < fullStars; i++) {
        starElements.push(<StarIcon />);
    }

    if (decimalPart > 0) {
        starElements.push(
            <div className="w-7">
                <div
                    className={`overflow-hidden w-[calc(28px*${decimalPart.toFixed(1)})]`}
                >
                    <StarIcon />
                </div>
            </div>
        );
    }

    return <div className="flex">{starElements}</div>;
};

export default StarRating;
