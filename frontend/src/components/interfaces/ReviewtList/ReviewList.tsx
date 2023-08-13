import React, {FC, ReactChildren, ReactElement, ReactNode} from 'react';
import {IReview} from "../../types/types";
import './ReviewList.css'
import TextCollapse from "../../utils/TextCollapse";

interface ReviewsListProps {
    reviews: IReview[];
}

const ReviewList: FC<ReviewsListProps> = ({reviews}) => {

    return (
        <div className="comment_wrapper">
            {reviews.map((review: IReview) => (
                <div key={review.id} className="comment_container">
                    <p className="comment_data">{review.date.split(' ')[0]}</p>
                    <TextCollapse text={review.info} maxLength={35}/>
                </div>
            ))}
        </div>
    );
};

export default ReviewList;