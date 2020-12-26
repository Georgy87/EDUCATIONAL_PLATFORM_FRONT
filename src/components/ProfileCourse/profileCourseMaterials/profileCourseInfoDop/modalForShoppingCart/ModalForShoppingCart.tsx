import React from "react";
import Modal, { PropsModalType } from "../../../../modals/Modal"

export const ModalForShoppingCart: React.FC<PropsModalType> = (props) => {
    return (
        <div>
            <Modal {...props}>
                <div className="shopping-cart-modal">
                    Hello
                </div>
                <button>Hello</button>
            </Modal>
        </div>
    )
}
