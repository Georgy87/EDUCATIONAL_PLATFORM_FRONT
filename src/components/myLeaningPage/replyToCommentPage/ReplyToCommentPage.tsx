import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { fetchGetCourseForTraining, fetchGetReplyToComment } from '../../../store/ducks/courses/actions';
import { useEffect } from 'react';
import { selectReplyToComment } from '../../../store/ducks/courses/selectors';
import { useParams } from 'react-router-dom';
import ruLocale from 'date-fns/locale/ru';
 //@ts-ignore
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import "./ReplyToCommentPage.css";

export const ReplyToCommentPage = () => {
    const [comment, setComment] = React.useState<string>("");

    const dispatch = useDispatch();

    const replyToComment = useSelector(selectReplyToComment);

    const params: { id: string } = useParams();

    const id = params.id;

    let date: string = '2021-01-31T17:56:01.688+00:00';

    if (replyToComment?.created) {
        date = replyToComment?.created;
    }

    const onAddComment = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setComment(e.target.value);
    }

    useEffect(() => {
        if (id && window.localStorage.getItem("course-comment-id")) {
            const courseId: any = window.localStorage.getItem("course-comment-id");
            dispatch(fetchGetCourseForTraining(courseId));
            dispatch(fetchGetReplyToComment({ courseId: courseId, commentId: id }))
        }
    }, []);

    return (
        <div className="reply">
            <ul className="reply-wrapper">
                <li className="reply-item">
                    <div className="reply-avatar-wrapper">
                        <img src={`http://localhost:5000/${replyToComment?.user.avatar}`} alt="comment-avatar" />
                    </div>
                    <div className="reply-descr-wrapper" >
                        <div className="reply-user-fullname">{`${replyToComment?.user.name} ${replyToComment?.user.surname}`}</div>
                        <div className="reply-text">{`${replyToComment?.text}`}</div>

                        <div className="reply-date">
                            {formatDistanceToNow(new Date(date), {
                            locale: ruLocale,
                            addSuffix: true,
                        })}</div>
                    </div>
                </li>
            </ul>
            <div className="reply-length">{`${replyToComment?.comments.length} ответ`}</div>
            {
                replyToComment?.comments.map(el => (
                    <ul className="reply-wrapper">
                        <li className="reply-item">
                            <div className="reply-avatar-wrapper">
                                <img src={`http://localhost:5000/${el.user.avatar}`} alt="comment-avatar" />
                            </div>
                            <div className="reply-descr-wrapper" >
                                <div className="reply-user-fullname">{`${el.user.name} ${el.user.surname}`}</div>
                                <div className="reply-text">{`${el.text}`}</div>
                                <div className="reply-date">{formatDistanceToNow(new Date(el.created), {
                                    locale: ruLocale,
                                    addSuffix: true,
                                })}</div>
                            </div>
                        </li>
                    </ul>
                ))
            }

            <div className="reply-add">
                <div className="reply-add-avatar">
                    <img src={replyToComment?.user.avatar} alt="" />
                </div>
                <div className="reply-add-text">
                    <input type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => onAddComment(e)} />
                </div>
            </div>

            <div className="reply-add-btn">
                <button>Добавить комментарий</button>
            </div>
        </div>

    )
}
