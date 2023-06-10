import './Reviews.css'
import ReviewList from "../../interfaces/ReviewtList/ReviewList";
import {IReview} from "../../types/types";
import {useEffect, useState} from "react";
import axios from "axios";

function Reviews() {
    const [reviews, setReviews] = useState<IReview[]>([])
    interface ReviewsData {
        review: IReview[]; // Оберните интерфейс IReview в массив
    }

    useEffect(() => {
        fetchReviews()
    }, [])

    async function fetchReviews() {
        try {
            const response = await axios.get<ReviewsData>(
                `https://api.digiseller.ru/api/reviews?seller_id=1097528&product_id=&type=all&page=&rows=6`,
                {
                    responseType: 'json',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            );
            const reviewsData = response.data?.review;
            console.log(reviewsData);
            setReviews(reviewsData || []);
        } catch (e) {
            alert(e);
        }
    }

    return(
        <section className="reviews" id="reviews">
            <div className="reviews_wrapper">
                <label className="reviews_label">Отзывы</label>
                <div className="reviews_under_label">Отзывы о нас</div>
                <div className='reviews_columns'>
                    <div className="reviews_column">
                        <a href='https://plati.io/seller/wexenone/1097528/' className="reviews_column_links">Отзывы на площадке Plati.market</a>
                        <ReviewList reviews={reviews}/>
                    </div>
                    <div className="reviews_column">
                        <a className="reviews_column_links">Отзывы на площадке GGSEL</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reviews