import React from "react";
import CurrentTime from "./CurrentTime";
//@ts-ignore
import { Media, Player, controls } from "react-media-player";

import { useDispatch } from "react-redux";
import { setTimeModuleAndLessons } from "../../store/ducks/contentCourses/saga";

import "./CourseVideoPleer.css";

const { Duration, SeekBar } = controls;

type PropsType = {
    courseId: any;
    moduleId: string | undefined;
    lessonId: string | undefined;
    videoName: string | undefined;
}
export const MediaPlayer: React.FC<PropsType> = ({courseId, moduleId, lessonId, videoName }) => {
    console.log(videoName);
    const dispatch = useDispatch();

    const onTimeHendler = (time: string) => {
        dispatch(setTimeModuleAndLessons(
            courseId,
            moduleId,
            lessonId,
            Number(time.substring(0, 2)),
            Number(time.substring(3, 5)),
            Number(time.substring(6, 8))),
        );
    };
    return (
        <Media>
            <div className="media">
                <div className="media-player">
                    <Player
                        src={
                            videoName != ""
                                ? `http://localhost:5000/${videoName}`
                                : "http://localhost:5000/14.  js с нуля, ваще с нуля (addEventListener, события, events).mp4"
                        }
                    />
                    {/* <PlayPause /> */}
                    <div className="media-player-content">
                        <CurrentTime
                            onTimeHendler={(time: string) => onTimeHendler(time)}
                        />
                        <SeekBar />
                        <Duration />
                    </div>
                </div>
                <div className="media-controls"></div>
            </div>
        </Media>
    );
};

// src={this.props.videoName != '' ? `http://localhost:5000/${this.props.videoName}` : ''}
