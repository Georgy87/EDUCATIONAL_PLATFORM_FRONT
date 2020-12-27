import React from "react";
import Modal, { PropsModalType } from "../../../../modals/Modal";
import { VideoProfileForModal } from "./VideoProfileForModal";

export const ModalVideoForProfileCourse: React.FC<PropsModalType> = (props) => {
    return (
        <div>
            <Modal {...props}>
                <VideoProfileForModal {...props} />
            </Modal>
        </div>
    )
}

