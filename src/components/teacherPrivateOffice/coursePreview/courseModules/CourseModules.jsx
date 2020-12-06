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
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        padding: "10px",
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: 700,
    },
}));

const CourseModules = (props) => {
    const classes = useStyles();
    const [fileVideo, setFileVideo] = useState("");
    const [lesson, setLesson] = useState("");
    const dispatch = useDispatch();
    const courseId = useSelector((state) => state.course.courses[0]._id);

    const addLesson = () => {
        dispatch(uploadLesson(courseId, fileVideo, lesson, props.moduleId));
    };

    return (
        <div>
            <Accordion>
                <AccordionSummary
                    style={{backgroundColor: "rgb(215, 240, 249)"}}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>
                        {props.module}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails></AccordionDetails>

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
                        <div className={classes.root}>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
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
                                        // module={props.module}
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
