import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { fetchAddComment, fetchGetComments, fetchGetCourseForTraining, GetReplyToComment } from '../../../store/ducks/courses/actions';
import { selectLoadingComments, selectComments } from '../../../store/ducks/courses/selectors';
import { CircularProgress } from '@material-ui/core';
import messageIcon from "../../../assets/comment-icon/icons8-edit-chat-history-100.png";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import ruLocale from "date-fns/locale/ru";
import photo from "../../../assets/avatar/unnamed.jpg";
import { selectUserAvatar } from '../../../store/ducks/user/selectors';
import { Link } from 'react-router-dom';

import "./CourseCommentPage.css";
import { fetchGetReplyToComment } from '../../../store/ducks/courses/actions';

export const CourseCommentPage: React.FC = () => {
    const [comment, setComment] = React.useState<string>("");

    const dispatch = useDispatch();

    const loading = useSelector(selectLoadingComments);
    const comments = useSelector(selectComments);
    const userAvatar = useSelector(selectUserAvatar);

    const params: { id: string } = useParams();
    const history = useHistory();

    const id = params.id;

    let avatar = photo;

    if (userAvatar) {
        avatar = `http://localhost:5000/${userAvatar}`;
    }

    useEffect(() => {
        dispatch(fetchGetComments(id));
        if (window.localStorage.getItem("course-comment-id")) {
            const courseId: any = window.localStorage.getItem("course-comment-id");
            dispatch(fetchGetCourseForTraining(courseId));
        }

    }, [loading]);

    const onAddComment = (e: React.ChangeEvent<HTMLInputElement>) => {
        setComment(e.target.value);
    }

    return (
        <div className="comments">
            <div className="comments-length">{`В этом курсе ${comments.length} вопроса`}</div>
            <div className="comments-add">
                <div className="comments-add-avatar">
                    <img src={avatar} alt="" />
                </div>
                <div className="comments-add-text">
                    <input type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => onAddComment(e)} />
                </div>
            </div>
            <div className="comments-add-btn">
                <button onClick={() => dispatch(fetchAddComment({ courseId: id, text: comment }))}>Оставить комментарий</button>
            </div>
            {
                loading ? comments.map(el => (
                    <div className="comments-wrapper">
                        <div className="comments-item">
                            <div className="comments-avatar-wrapper">
                                <img src={`http://localhost:5000/${el.user.avatar}`} alt="comment-avatar" />
                            </div>
                            <div className="comments-descr-wrapper" >
                                <div className="comments-user-fullname">{`${el.user.name} ${el.user.surname}`}</div>
                                <div className="comments-text">{`${el.text}`}</div>
                                <div className="comments-date">{formatDistanceToNow(new Date(el.created), {
                                    locale: ruLocale,
                                    addSuffix: true,
                                })}</div>
                            </div>
                            <div className="comments-right-panel-wrapper">
                                <div className="comments-replies">{el.comments.length}</div>
                                <Link to={`/purchased-courses/leaning/comments/reply-to-comment/${el._id}`} >
                                    <div onClick={() => dispatch(fetchGetReplyToComment({ courseId: id, commentId: el._id }))}>
                                        <img src={messageIcon} alt="message-icon" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                )) : <CircularProgress style={{ display: 'flex !important', margin: '0 auto', color: 'black', marginTop: 50 }} />
            }
        </div>
    )
}
