import React from "react";
import Modal, { PropsModalType } from "../../../../modals/Modal";
import { VideoProfileForModal } from "./VideoProfileForModal";

export type PropsType = {
    active: boolean;
    setActive: (active: boolean) => void;
    video: string;
    children?: React.ReactNode;
}

export const ModalVideoForProfileCourse: React.FC<PropsModalType> = (props) => {
    return (
        <div>
            <Modal {...props}>
                <VideoProfileForModal {...props} />
            </Modal>
        </div>
    )
}

