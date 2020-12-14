import React from "react";
import ReactPlayer from "react-player";
import ReactWebMediaPlayer from "react-web-media-player";
import "./Modal.css";

const Modal = ({ active, setActive, video}) => {
    console.log(video);
    return (
        <>
            <div
                className={active ? "modal-course active" : "modal-course"}
                onClick={() => setActive(false)}
            >
                <div
                    className={
                        active
                            ? "modal-course-content active"
                            : "modal-course-content"
                    }
                    onClick={(e) => e.stopPropagation()}
                >
                    <ReactWebMediaPlayer
                        title="My own video player"
                        video={`http://localhost:5000/${video}`}
                    />
                </div>
            </div>
        </>
    );
};
export default Modal;
