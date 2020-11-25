import React, { Component } from "react";
import { Media, Player, controls } from "react-media-player";
const {
    PlayPause,
    CurrentTime,
    Progress,
    SeekBar,
    Duration,
    MuteUnmute,
    Volume,
    Fullscreen,
} = controls;

export class MediaPlayer extends Component {
    render() {
        return (
            <Media>
                <div className="media" >
                    <div className="media-player" >
                        <Player style={{width: '300px', height: '300px'}} src="http://localhost:5000/A$AP%20Ferg%20-%20Plain%20Jane%20-%20Dirty%20Acapella%20BMP%2085.mp4" />
                    </div>
                    <div className="media-controls">
                        <PlayPause />
                        <CurrentTime />
                        <Progress />
                        <SeekBar />
                        <Duration />
                        <MuteUnmute />
                        <Volume />
                        <Fullscreen />
                    </div>
                </div>
            </Media>
        );
    }
}
