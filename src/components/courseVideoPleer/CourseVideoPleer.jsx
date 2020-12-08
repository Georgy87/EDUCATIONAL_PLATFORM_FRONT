import React, { Component } from "react";
import CurrentTime from "./CurrentTime";
import { Media, Player, controls } from "react-media-player";
import "./CourseVideoPleer.css";
import { useDispatch } from "react-redux";
import { setTimeModuleAndLessons } from "../../actions/contentCourses";
const { Duration, Progress, SeekBar } = controls;

export const MediaPlayer = (props) => {
    const dispatch = useDispatch();
    const onTimeHendler = (time) => {
        const { courseId, moduleId, lessonId } = props.lessonTime;

        // let hours = Math.trunc(67 / 60);
        // let minutes = 67 % 60;
        // let seconds = 100 / 60;

        // let finalMinutes = minutes + Math.floor(seconds);
        // dispatch(setTimeModuleAndLessons(hours + ":" + finalMinutes + ":" + Math.floor(seconds)));
        // console.log(Number(time.substring(3, 5)));
        // console.log(Number(time.substring(6, 8)));
        // console.log(hours + ":" + finalMinutes + ":" + Math.floor(seconds));
        dispatch(setTimeModuleAndLessons(
            courseId,
            moduleId,
            lessonId,
            Number(time.substring(0, 2)),
            Number(time.substring(3, 5)),
            Number(time.substring(6, 8)))
        );
    };
    return (
        <Media>
            <div className="media">
                <div className="media-player">
                    <Player
                        src={
                            props.videoName != ""
                                ? `http://localhost:5000/${props.videoName}`
                                : "http://localhost:5000/14.  js с нуля, ваще с нуля (addEventListener, события, events).mp4"
                        }
                    />
                    {/* <PlayPause /> */}
                    <div className="media-player-content">
                        <CurrentTime
                            onTimeHendler={(time) => onTimeHendler(time)}
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
