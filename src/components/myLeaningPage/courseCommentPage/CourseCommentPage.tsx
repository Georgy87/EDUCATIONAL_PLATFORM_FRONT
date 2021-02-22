import React, { useEffect, useState } from 'react'
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

import "./CourseCommentPage.scss";

export const CourseCommentPage: React.FC = () => {
    const [comment, setComment] = React.useState<string>("");
    const [photoDirection, setFile] = useState<any>();

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
        dispatch(fetchAddComment({ courseId: id, text: comment, commentPhoto: photoDirection }));
    }

    const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files === null) {
            throw new Error("Error finding e.target.files");
        }
        return setFile(e.target.files[0]);
    }

    return (
        <div className="comments">
            <div className="comments__length">{`В этом курсе ${comments.length} вопроса`}</div>
            <div className="comments__add">
                <div className="comments__add-avatar">
                    <img src={avatar} alt="" />
                </div>
                <div className="comments__add-text">
                    <input type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => onAddComment(e)} />
                </div>
            </div>
            <div className="comments__add-photo">
                <input type="file" onChange={onChangeFile}/>
            </div>
            <div className="comments__add-btn">
                <Button type={undefined} typeStyle="primary" action={onfetchAddComment}>Оставить комментарий</Button>
            </div>

            {loadingAddComment === LoadingStatus.LOADING && <CircularProgress style={{ display: 'flex !important', margin: '0 auto', color: 'black', marginTop: 50 }} />}

            {
                loading ? comments.map(el => (
                    <ul className="comment-item__wrapper">
                        <li className="comment-item">
                            <div className="comment-item__avatar">
                                <img src={`http://localhost:5000/${el.user.avatar}`} alt="comment-avatar" />
                            </div>
                            <div className="comment-item__descr-wrapper" >
                                <div className="comment-item__user-fullname">{`${el.user.name} ${el.user.surname}`}</div>
                                <div className="comment-item__text">{`${el.text}`}</div>
                                {el.photo && <img className="comment-item__img" src={`http://localhost:5000/${el.photo}`} alt={`comment-photo-${el.photo}`}/>}
                                <div className="comment-item__date">{formatDistanceToNow(new Date(el.created), {
                                    locale: ruLocale,
                                    addSuffix: true,
                                })}</div>
                            </div>
                            <div className="comment-item__right-panel-wrapper">
                                <div className="comment-item__comment-replies">{el.comments.length}</div>
                                <Link to={`/purchased-courses/leaning/comments/reply-to-comment/${el._id}`} >
                                    <div onClick={() => dispatch(fetchGetReplyToComment({ courseId: id, commentId: el._id }))}>
                                        <img src={messageIcon} alt="message-icon" />
                                    </div>
                                </Link>
                            </div>
                        </li>
                    </ul>
                )) : <CircularProgress style={{ display: 'flex !important', margin: '0 auto', color: 'black', marginTop: 50 }} />
            }

        </div>
    )
}
