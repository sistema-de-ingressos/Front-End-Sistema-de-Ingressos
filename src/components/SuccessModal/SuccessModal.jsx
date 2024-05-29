import {ModalWrapper} from "./styles.js";
import {FaRegCircleCheck} from "react-icons/fa6";
import {Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay} from "@chakra-ui/react";
import {IoIosCloseCircleOutline} from "react-icons/io";

export function SuccessModal( {isOpen, onClose, text} ) {

    return (
        <Modal
            onClose={onClose}
            isOpen={isOpen}
            isCentered
        >
            <ModalOverlay />

            <ModalContent borderRadius={20}>
                <ModalHeader>Sucesso!</ModalHeader>
                <ModalCloseButton my={1} mx={3} size={"lg"}>
                    <IoIosCloseCircleOutline size={25} />
                </ModalCloseButton>
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