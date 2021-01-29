import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { fetchGetComments } from '../../../store/ducks/courses/actions';
import { selectLoadingComments, selectComments } from '../../../store/ducks/courses/selectors';
import { CircularProgress } from '@material-ui/core';
import messageIcon from "../../../assets/comment-icon/icons8-edit-chat-history-100.png";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import ruLocale from "date-fns/locale/ru";

import "./CourseCommentPage.css";

export const CourseCommentPage: React.FC = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoadingComments);
    const comments = useSelector(selectComments);

    const params: { id?: string } = useParams();
    const history = useHistory();

    const id = params.id;

    useEffect(() => {
        if (history.location.pathname === `/purchased-courses/leaning/comments/${id}` && id) {
            dispatch(fetchGetComments(id));
            console.log('hello');
        }
    }, [loading]);

    return (
        <div className="comments">
            <div className="comments-length">{`В этом курсе ${comments.length} вопроса`}</div>
            {
                loading ? comments.map(el => (
                    <div className="comments-wrapper">
                        <div className="comments-item">
                            <div className="comments-avatar-wrapper">
                                <img src={`http://localhost:5000/${el.user.avatar}`} alt="comment-avatar" />
                            </div>
                            <div className="comments-descr-wrapper">
                                <div className="comments-user-fullname">{`${el.user.name} ${el.user.surname} `}</div>
                                <div className="comments-text">{`${el.text}`}</div>
                                <div className="comments-date">{formatDistanceToNow(new Date(el.created), {
                                    locale: ruLocale,
                                    addSuffix: true,
                                })}</div>
                            </div>
                            <div className="comments-right-panel-wrapper">
                                <div className="comments-replies">{el.comments.length}</div>
                                <img src={messageIcon} alt="message-icon" />
                            </div>
                        </div>
                    </div>
                )) : <CircularProgress style={{ display: 'flex !important', margin: '0 auto', color: 'black', marginTop: 50 }} />
            }
        </div>
    )
}
