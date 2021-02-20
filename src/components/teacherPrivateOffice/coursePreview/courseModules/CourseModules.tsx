import React, { useState } from "react";
import { useDispatch } from "react-redux";
import CourseLessons from "../courseLessons/CourseLessons";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { fetchUploadLesson } from "../../../../store/ducks/contentCourses/actions";
import { ModuleContentType } from "../../../../store/ducks/contentCourses/reducer";
import { Button } from '../../../button/Button';

import "./CourseModules.css";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        padding: "1px",
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: 350,

    },
    headingLesson: {
        borderBottom: "1px solid rgb(228, 225, 225)",
    },
    module: {
        boxShadow: "none"
    },
    accordionSummaryHeader: {
        backgroundColor: "#f7f8fa",
    },
    accordionSummaryLessonHeader: {

    },
}));

type PropsType = {
    courseId: string;
    module: string;
    moduleHours: number;
    moduleMinutes: number;
    moduleSeconds: number;
    moduleContent: any;
    moduleId: string;
}

const CourseModules: React.FC<PropsType> = ({ courseId, moduleId, moduleMinutes, moduleSeconds, module, moduleHours, moduleContent }) => {
    const classes = useStyles();
    const [fileVideo, setFileVideo] = useState<any>();
    const [lesson, setLesson] = useState<string>("");

    const dispatch = useDispatch();

    const addLesson = () => {
        dispatch(fetchUploadLesson({courseId, file: fileVideo, lesson, moduleId}));
    };

    let hours = Math.trunc(moduleMinutes / 60);
    let minutes = moduleMinutes % 60;
    let seconds = moduleSeconds / 60;
    let finalMinutes = minutes + Math.floor(seconds);

    return (
        <div>
            <Accordion className={classes.module} >
                <AccordionSummary
                    className={classes.accordionSummaryHeader}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>
                        {module}
                        <div>
                            {moduleHours +
                                hours +
                                " ч " +
                                finalMinutes +
                                " мин "}
                        </div>
                    </Typography>
                </AccordionSummary>

                <div className="set-lessons-wrapper">
                    <input
                        type="file"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFileVideo(e.target.files?.[0])}
                        className="custom-file-input"
                    />
                    <input
                        placeholder="Введите название лекции"
                        type="text"
                        className="set-lessons-module"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLesson(e.target.value)}
                    />
                    <Button
                        type={undefined}
                        action={addLesson}
                        typeStyle="create-lesson"
                    >
                        Добавить лекцию
                    </Button>
                </div>
                {moduleContent?.map((el: ModuleContentType) => {
                    return (
                        <div className={classes.root} key={el._id} >
                            <Accordion className={classes.module} >
                                <AccordionSummary
                                    className={classes.accordionSummaryLessonHeader}
                                    expandIcon={
                                        <ExpandMoreIcon />
                                    }
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className={classes.headingLesson}>
                                        {el.lesson}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <CourseLessons
                                        courseId={courseId}
                                        links={el.linksToResources}
                                        key={el._id}
                                        lessonId={el._id}
                                        lessonTime={el.lessonTime}
                                        fileVideo={el.fileVideo}
                                        lesson={el.lesson}
                                        moduleId={moduleId}
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
