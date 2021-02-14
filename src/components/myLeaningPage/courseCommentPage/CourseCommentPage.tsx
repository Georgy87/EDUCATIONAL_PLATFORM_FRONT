import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import ruLocale from "date-fns/locale/ru";

import { fetchAddComment, fetchGetComments, fetchGetCourseForTraining } from '../../../store/ducks/courses/actions';
import { selectLoadingComments, selectComments, selectLoadingAddComment } from '../../../store/ducks/courses/selectors';
import messageIcon from "../../../assets/comment-icon/icons8-edit-chat-history-100.png";
import photo from "../../../assets/avatar/unnamed.jpg";
import { selectUserAvatar } from '../../../store/ducks/user/selectors';
import { fetchGetReplyToComment } from '../../../store/ducks/courses/actions';
import { LoadingStatus } from '../../../store/types';
import { Button } from "../../button/Button";

import "./CourseCommentPage.css";

export const CourseCommentPage: React.FC = () => {
    const [comment, setComment] = React.useState<string>("");

    const loading = useSelector(selectLoadingComments);
    const comments = useSelector(selectComments);
    const userAvatar = useSelector(selectUserAvatar);
    const loadingAddComment = useSelector(selectLoadingAddComment);

    const dispatch = useDispatch();

    const params: { id: string } = useParams();

    const id = params.id;

    let avatar = photo;

    if (userAvatar) {
        avatar = `http://localhost:5000/${userAvatar}`;
    }

    useEffect(() => {
        if (id && window.localStorage.getItem("course-comment-id")) {
            const courseId: any = window.localStorage.getItem("course-comment-id");
            dispatch(fetchGetCourseForTraining(courseId));
            dispatch(fetchGetComments(id));
        }
    }, [loading]);

    const onAddComment = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setComment(e.target.value);
    }

    const onfetchAddComment = () => {
        dispatch(fetchAddComment({ courseId: id, text: comment }));
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
                <Button type={undefined} typeStyle="primary" action={onfetchAddComment}>Оставить комментарий</Button>
            </div>

            {loadingAddComment === LoadingStatus.LOADING && <CircularProgress style={{ display: 'flex !important', margin: '0 auto', color: 'black', marginTop: 50 }} />}

            {
                loading ? comments.map(el => (
                    <ul className="comments-wrapper">
                        <li className="comments-item">
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
                        </li>
                    </ul>
                )) : <CircularProgress style={{ display: 'flex !important', margin: '0 auto', color: 'black', marginTop: 50 }} />
            }import { Button} from '@material-ui/core';

        </div>
    )
}
