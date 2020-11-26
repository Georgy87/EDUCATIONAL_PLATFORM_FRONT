import React, { Component } from 'react';
import ReactWebMediaPlayer from 'react-web-media-player';

export class MediaPlayer extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return <ReactWebMediaPlayer
        style={{width: '700px'}}
        title="Иван Петриченко"
        video={this.props.videoName != '' ? `http://localhost:5000/${this.props.videoName}` : ''}
        // thumbnail="https://any-link.com/video-thumbnail.jpg"
        width={1000}
        height={570}
    />
  }
}
