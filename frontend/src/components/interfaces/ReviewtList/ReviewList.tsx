import React, {FC} from 'react';
import {IReview} from "../../types/types";
import './ReviewList.css'

interface ReviewsListProps {
    reviews: IReview[];
}

const ReviewList: FC<ReviewsListProps> = ({reviews}) => {

    const reviewsArray = Array.isArray(reviews) ? reviews : [];

    return (
        <div className="comment_wrapper">
            {reviews.map((review: IReview) => (
                <div key={review.id} className="comment_container">
                    <label className="comment_data">{review.date.split(' ')[0]}</label>
                    <p className="comment_text">{review.info}</p>
                </div>
            ))}
        </div>
    );
};

export default ReviewList;