import React from "react";
import { VideoProfileForModal } from "../profileCourse/profileCourseMaterials/profileCourseInfoDop/VideoProfileForModal";

import "./Modal.css";

type PropsType = {
    active: boolean;
    setActive: (active: boolean) => void;
    video: string;
    children?: React.ReactNode
}

export const Modal: React.FC<PropsType> = ({ active, setActive, video, children}): React.ReactElement => {
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
                    {children}
                </div>
            </div>
        </>
    );
};

export const CreateModal: React.FC<PropsType> = (props) => {
    return (
        <div>
            <Modal {...props}>
                <VideoProfileForModal {...props} />
            </Modal>
        </div>
    )
}

export default Modal;

