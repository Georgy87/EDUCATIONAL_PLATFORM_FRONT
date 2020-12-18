import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ProfileMaterialsLessons from "./profileMaterialsLessons/ProfileMaterialsLessons";
import { AccordionDetails } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        // width: "100%",
        padding: "1px",
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
        width: 900,
        backgroundColor: "#fbfbf8",
    },
}));

const ProfileMaterialsModules = (props) => {
    const classes = useStyles();
    let newHours;

    let hours = Math.trunc(props.moduleMinutes / 60);
    if (props.moduleHours + hours === 0) {
        newHours = "";
    } else {
        newHours = props.moduleHours + hours + " ч ";
    }

    let minutes = props.moduleMinutes % 60;
    let seconds = props.moduleSeconds / 60;
    let finalMinutes = minutes + Math.floor(seconds);
    return (
        <>
            <Accordion className={classes.root}>
                <AccordionSummary
                    style={{
                        backgroundColor: "#fbfbf8",
                    }}
                    className={classes.accordionSummary}
                    expandIcon={<ExpandMoreIcon style={{ color: "black" }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <div className={classes.heading}>
                        <div className={classes.headingModule}>
                            {props.module}
                        </div>
                        <div className={classes.headingHours}>
                            {newHours + finalMinutes + " мин "}
                        </div>
                    </div>
                </AccordionSummary>
                {props.moduleContent.map((el) => {
                    return (
                        <div className={classes.root} key={el._id}>
                            <ProfileMaterialsLessons
                                courseId={props.courseId}
                                links={el.linksToResources}
                                key={el._id}
                                lessonId={el._id}
                                lessonTime={el.lessonTime}
                                fileVideo={el.fileVideo}
                                lesson={el.lesson}
                                moduleId={props.moduleId}
                            />
                        </div>
                    );
                })}
            </Accordion>
        </>
    );
};
export default ProfileMaterialsModules;
