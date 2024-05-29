import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    useDisclosure
} from "@chakra-ui/react";
import {IoIosCloseCircleOutline} from "react-icons/io";
import {ImageContainer, Image} from "./styles.js";
import {cloneElement} from "react";


export function QRCodeImage({button, qrCodeLink}) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            {cloneElement(button, {onClick: onOpen})}

            <Modal isOpen={isOpen} size={"xl"} isCentered scrollBehavior={"inside"} onClose={onClose}>
                <ModalOverlay />
                <ModalContent borderRadius={20}>
                    <ModalHeader>QRCode do Ingresso</ModalHeader>
                    <ModalCloseButton my={1} mx={3} size={"lg"}>
                        <IoIosCloseCircleOutline size={25} />
                    </ModalCloseButton>
                    <ModalBody>
                        <ImageContainer>
                            <Image src={qrCodeLink} alt={"QRCode do ingresso"}/>
                        </ImageContainer>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}