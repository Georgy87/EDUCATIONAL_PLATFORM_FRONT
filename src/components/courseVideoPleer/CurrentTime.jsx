import React, { Component } from "react";
import "./CurrentTime.css";
import { withMediaProps } from "react-media-player";

class CustomPlayPause extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    shouldComponentUpdate({ media }) {
        return this.props.media.isPlaying !== media.isPlaying;
    }
    _handlePlayPause = () => {
        this.props.media.playPause();
    };

    _handleTime = () => {
        let unix_timestamp = this.props.media.duration;
        let date = new Date(unix_timestamp * 1000);
        console.log(unix_timestamp);
        let hours = date.getHours();
        let minutes = "0" + date.getMinutes();
        let seconds = "0" + date.getSeconds();
        var formattedTime =
            "0" +
            (hours - 3) +
            ":" +
            minutes.substr(-2) +
            ":" +
            seconds.substr(-2);

        this.props.onTimeHendler(formattedTime);
    };

    render() {
        const { className, style, media } = this.props;
        console.log(this.props);
        return (
            <div className="play-pause">
                <div
                    style={{
                        display: "flex",
                        border: "none",
                        width: "50px",
                        height: "40px",
                        color: "white",
                        alignItems: "center",
                        marginLeft: "8px",
                        cursor: "pointer",
                    }}
                    onClick={this._handlePlayPause}
                >
                    {media.isPlaying ? <div>Play</div> : <div>Pause</div>}
                </div>
                <div
                    style={{
                        color: "white",
                        display: "flex",
                    }}
                    onClick={this._handleTime}
                >
                    Определитель времени
                </div>
            </div>
        );
    }
}

export default withMediaProps(CustomPlayPause);
