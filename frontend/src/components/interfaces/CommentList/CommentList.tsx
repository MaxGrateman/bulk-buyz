import React, {FC} from 'react';
import {IComment} from "../../types/types";
import './CommentList.css'

interface CommentListProps {
    comments: IComment[]
}

const CommentList: FC<CommentListProps> = ({comments}) => {
    return (
        <div className="comment_wrapper">
            {comments.map(comment =>
                <div key={comment.id} className='comment_container'>
                    <label className="comment_data">{comment.data}</label>
                    <p className="comment_text">{comment.text}</p>
                </div>
            )}
        </div>
    );
};

export default CommentList;