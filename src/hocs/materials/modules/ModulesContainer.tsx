import React from 'react'
import { CircularProgress, makeStyles } from '@material-ui/core';
import { timeFunction } from '../../../utils/helpers/helpers';
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { ModuleContentType } from '../../../store/ducks/contentCourses/reducer';
import { LessonsBlockContainer } from "../lessons/LessonsContainer";

import "./ModulesContainer.css";

export type PropsModulesType = {
    module: string;
    moduleHours: number;
    moduleMinutes: number;
    moduleSeconds: number;
    moduleContent: any;
    moduleId: string;
    countVideo: number;
}

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

export const MaterialsBlockContainer: React.FC<PropsModulesType> = ({ children, ...props }) => {
    const { module, moduleHours, moduleMinutes, moduleSeconds, moduleContent, moduleId, countVideo } = props;
    const { newHours, finalMinutes } = timeFunction(moduleHours, moduleMinutes, moduleSeconds);

    const classes = useStyles();

    return (
        <div>
            {children}
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
                                <LessonsBlockContainer
                                    countVideo={countVideo}
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
            </div>
        </div>
    )
}



