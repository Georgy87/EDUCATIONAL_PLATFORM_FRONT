import React from 'react';
import Zoom from 'react-medium-image-zoom';
import { Link } from 'react-router-dom';
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import ruLocale from "date-fns/locale/ru";
import { useDispatch } from 'react-redux';

import messageIcon from "../../assets/comment-icon/icons8-edit-chat-history-100.png";
import { fetchGetReplyToComment } from '../../store/ducks/courses/actions';

import 'react-medium-image-zoom/dist/styles.css'

import "./CommentItemBlock.scss";

type PropsType = {
    name: "comment" | "replyToComment";
    userAvatar?: string;
    userName?: string;
    userSurname?: string;
    commentText?: string;
    commentPhoto?: string;
    commentDate: string;
    commentsLength?: number;
    replyToCommentId: string;
    courseId: string;
}

export const CommentItemBlock: React.FC<PropsType> = ({ userAvatar, userName, userSurname, commentText, commentPhoto, commentDate, commentsLength, replyToCommentId, courseId, name }) => {
    const dispatch = useDispatch();
    return (
        <ul>
            <li>
                <div className="comment__avatar">
                    <img src={`http://localhost:5000/${userAvatar}`} alt="comment-avatar" />
                </div>
                <div className="comment__descr">
                    <div className="comment__descr-fullname">{`${userName} ${userSurname}`}</div>
                    <div className="comment__descr-text">{`${commentText}`}</div>
                    {commentPhoto && (
                        <Zoom zoomMargin={100} >
                            <img width="200" className="comment-item__img" src={`http://localhost:5000/${commentPhoto}`} alt={`comment-photo-${commentPhoto}`} />
                        </Zoom>
                    )}
                    <div className="comment__descr-date">{formatDistanceToNow(new Date(commentDate), {
                        locale: ruLocale,
                        addSuffix: true,
                    })}</div>
                </div>
                {name === "comment" && (
                    <div className="comment__right">
                        <div className="comment__right-length">{commentsLength}</div>
                        <Link to={`/purchased-courses/leaning/comments/reply-to-comment/${replyToCommentId}`} >
                            <div onClick={() => dispatch(fetchGetReplyToComment({ courseId: courseId, commentId: replyToCommentId }))}>
                                <img src={messageIcon} alt="message-icon" />
                            </div>
                        </Link>
                    </div>
                )}
            </li>
        </ul>
    )
}
