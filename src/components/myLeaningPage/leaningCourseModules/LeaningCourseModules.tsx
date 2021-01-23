import React from 'react'
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { AccordionDetails } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ModuleContentType } from '../../../store/ducks/contentCourses/reducer';
import LeaningCourseLessons from '../leaningCourseLessons/LeaningCourseLessons';

import "./LeaningCourseModules.css";

const useStyles = makeStyles((theme) => ({
    root: {
        // width: "100%",
        padding: "1px",
        '& .MuiPaper-elevation1': {
            backgroundColor: 'red',
            color: 'red'
        }
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: 500,
    },
    headingModule: {
        // display: "flex",
    },
    headingHours: {
        // display: "flex",
        fontWeight: 200,
        marginLeft: "auto",
    },
    accordionSummary: {
        // width: 900,
        backgroundColor: "#f7f8fa",
        boxShadow: 'none'
    },
}));

type PropsType = {
    module: string;
    moduleHours: number;
    moduleMinutes: number;
    moduleSeconds: number;
    moduleContent: any;
    moduleId: string;
}

export const LeaningCourseModules: React.FC<PropsType> = ({ module, moduleHours, moduleMinutes, moduleSeconds, moduleContent, moduleId }) => {
    const classes = useStyles();

    let newHours;

    let hours = Math.trunc(moduleMinutes / 60);
    if (moduleHours + hours === 0) {
        newHours = "";
    } else {
        newHours = moduleHours + hours + " ч ";
    }

    let minutes = moduleMinutes % 60;
    let seconds = moduleSeconds / 60;
    let finalMinutes = minutes + Math.floor(seconds);

    return (
        <div className="leaning-modules">
            <Accordion style={{ boxShadow: 'none' }}>
                <AccordionSummary
                    className={classes.accordionSummary}
                    expandIcon={<ExpandMoreIcon style={{ color: "black" }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>
                        {module}
                        <div>
                            {newHours +
                                finalMinutes +
                                " мин "}
                        </div>
                    </Typography>
                </AccordionSummary>
                {moduleContent?.map((el: ModuleContentType) => {
                    return (
                        <div className={classes.root} key={el._id}>
                            <LeaningCourseLessons
                                links={el.linksToResources}
                                key={el._id}
                                lessonId={el._id}
                                lessonTime={el.lessonTime}
                                fileVideo={el.fileVideo}
                                lesson={el.lesson}
                                moduleId={moduleId}
                            />
                        </div>
                    );
                })}
            </Accordion>
        </div >
    )
}
