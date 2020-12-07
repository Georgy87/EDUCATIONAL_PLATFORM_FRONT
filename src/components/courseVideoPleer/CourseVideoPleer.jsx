import React, { Component } from "react";
import CurrentTime from "./CurrentTime";
import { Media, Player, controls } from "react-media-player";
import "./CourseVideoPleer.css";
const { Duration, Progress, SeekBar } = controls;

export class MediaPlayer extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    onTimeHendler = (time) => {
        const { courseId, moduleId, lessonId } = this.props.lessonTime;

        let hours = Math.trunc(48 / 60);
        let minutes = 48 % 60;
        let seconds = (500 / 60);

        let finalMinutes = minutes + Math.floor(seconds);
        console.log(hours + ":" + finalMinutes + ":" + Math.floor(seconds));
        // console.log(Number(time.substring(3, 5)));
        // console.log(Number(time.substring(6, 8)));
        console.log(
            courseId,
            moduleId,
            lessonId,
            Number(time.substring(3, 5)),
            Number(time.substring(6, 8))
        );
    };
    render() {
        return (
            <Media>
                <div className="media">
                    <div className="media-player">
                        <Player
                            src={
                                this.props.videoName != ""
                                    ? `http://localhost:5000/${this.props.videoName}`
                                    : "http://localhost:5000/14.  js с нуля, ваще с нуля (addEventListener, события, events).mp4"
                            }
                        />
                        {/* <PlayPause /> */}
                        <div className="media-player-content">
                            <CurrentTime
                                onTimeHendler={(time) =>
                                    this.onTimeHendler(time)
                                }
                            />
                            <SeekBar />
                            <Duration />
                        </div>
                    </div>
                    <div className="media-controls"></div>
                </div>
            </Media>
        );
    }
}

// src={this.props.videoName != '' ? `http://localhost:5000/${this.props.videoName}` : ''}
