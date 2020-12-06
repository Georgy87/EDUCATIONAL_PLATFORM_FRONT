import React, { Component } from "react";
import CurrentTime from "./CurrentTime";
import { Media, Player, controls } from "react-media-player";
import "./CourseVideoPleer.css";
const { Duration, Progress,  SeekBar } = controls;

export class MediaPlayer extends Component {
    onTimeHendler = (time) => {
        console.log(time);
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
                                    : "http://localhost:5000/Делегирование событий на JavaScript.mp4"
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
