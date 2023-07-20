import React, {FC, ReactChildren, ReactElement, ReactNode} from 'react';
import {IReview} from "../../types/types";
import './ReviewList.css'

interface ReviewsListProps {
    reviews: IReview[];
}

const ReviewList: FC<ReviewsListProps> = ({reviews}) => {

    return (
        <div className="comment_wrapper">
            {reviews.map((review: IReview) => (
                <div key={review.id} className="comment_container">
                    <p className="comment_data">{review.date.split(' ')[0]}</p>
                    <p className="comment_text">{review.info}</p>
                </div>
            ))}
        </div>
    );
};

export default ReviewList;