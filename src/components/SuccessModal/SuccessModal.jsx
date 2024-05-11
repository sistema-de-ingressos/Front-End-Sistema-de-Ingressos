import {ModalWrapper} from "./styles.js";
import {FaRegCircleCheck} from "react-icons/fa6";
import {Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay} from "@chakra-ui/react";

export function SuccessModal( {isOpen, onClose, text} ) {

    return (
        <Modal
            onClose={onClose}
            isOpen={isOpen}
            isCentered
        >
            <ModalOverlay />

            <ModalContent>
                <ModalHeader>Sucesso!</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <ModalWrapper>
                        <FaRegCircleCheck/>
                        <h1>{text}</h1>
                    </ModalWrapper>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}