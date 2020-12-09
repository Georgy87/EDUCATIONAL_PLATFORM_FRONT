import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CourseLessons from "../courseLessons/CourseLessons";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { uploadLesson } from "../../../../actions/contentCourses";

import "./CourseModules.css";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        padding: "1px",
    },
    heading: {
        fontSize: theme.typography.pxToRem(17),
        fontWeight: 900,
        color: "white",
    },
}));

const CourseModules = (props) => {
    const classes = useStyles();
    const [fileVideo, setFileVideo] = useState("");
    const [lesson, setLesson] = useState("");
    const dispatch = useDispatch();
    const courseId = useSelector((state) => state.course);

    const addLesson = () => {
        if (courseId) {
            console.log(courseId);
            dispatch(
                uploadLesson(
                    courseId.courses[0]._id,
                    fileVideo,
                    lesson,
                    props.moduleId
                )
            );
        }
    };


    let hours = Math.trunc(props.moduleMinutes / 60);
    let minutes = props.moduleMinutes % 60;
    let seconds = props.moduleSeconds / 60;
    let finalMinutes = minutes + Math.floor(seconds);
    // console.log(props.moduleHours + hours + ":" + finalMinutes + ":" + Math.floor(seconds));
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    style={{
                        backgroundColor: "rgba(12, 9, 9, 0.85)",
                        boxShadow: "0px 0px 1px",
                    }}
                    expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>
                        {props.module}
                        <div>{props.moduleHours + hours + " ч " + finalMinutes + " мин "}</div>
                    </Typography>
                </AccordionSummary>
                {/* <AccordionDetails></AccordionDetails> */}

                <div className="set-lessons-wrapper">
                    <input
                        type="file"
                        onChange={(e) => setFileVideo(e.target.files[0])}
                        className="custom-file-input"
                    />
                    <input
                        placeholder="Введите название лекции"
                        type="text"
                        className="set-lessons-module"
                        onChange={(e) => setLesson(e.target.value)}
                    />
                    <button
                        className="set-lessons-module-btn"
                        onClick={addLesson}
                    >
                        Добавить лекцию
                    </button>
                </div>
                {props.moduleContent.map((el) => {
                    return (
                        <div className={classes.root} key={el._id}>
                            <Accordion>
                                <AccordionSummary
                                    style={{
                                        backgroundColor:
                                            "rgba(17, 39, 9, 0.75)",
                                        boxShadow: "0px 1px 2px",
                                    }}
                                    expandIcon={
                                        <ExpandMoreIcon
                                            style={{ color: "white" }}
                                        />
                                    }
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className={classes.heading}>
                                        {el.lesson}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <CourseLessons
                                        links={el.linksToResources}
                                        key={el._id}
                                        lessonId={el._id}
                                        lessonTime={el.lessonTime}
                                        fileVideo={el.fileVideo}
                                        lesson={el.lesson}
                                        moduleId={props.moduleId}
                                    />
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    );
                })}
            </Accordion>
        </div>
    );
};

export default CourseModules;
