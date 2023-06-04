import './Reviews.css'
import CommentList from "../../interfaces/CommentList/CommentList";
import {IComment} from "../../types/types";

function Reviews() {

    const comments: IComment[] = [
        {id: 1, data: '1 мая, 2023', text: 'Спасибо. Всё отлично! Как и заявленно в описании'},
        {id: 2, data: '26 мая, 2023', text: 'Good'},
        {id: 3, data: '2 августа, 2023', text: 'Всё прекрасно!'},
    ]


    return(
        <section className="reviews" id="reviews">
            <div className="reviews_wrapper">
                <label className="reviews_label">Отзывы</label>
                <div className="reviews_under_label">Отзывы о нас</div>
                <div className='reviews_columns'>
                    <div className="reviews_column">
                        <a href='https://plati.io/seller/wexenone/1097528/' className="reviews_column_links">Отзывы на площадке Plati.market</a>
                        <CommentList comments={comments}/>
                    </div>
                    <div className="reviews_column">
                        <a className="reviews_column_links">Отзывы на площадке GGSEL</a>
                        <CommentList comments={comments}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reviews