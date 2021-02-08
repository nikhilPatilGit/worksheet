import {
    useDisclosure,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    Box,
    Grid,
    Text,
    Link,
} from "@chakra-ui/react";
import {LoginWithGoogle} from "./SocialButtons";
import {signInWithGoogle} from "../../api/firebaseAuth";
import React, {useContext, useEffect} from "react";
import {Action} from "../../hooks/Common/Action";
import {ActionType} from "../../hooks/Common/Types";
import {createActionResult} from "../../helper/Factories";
import {AuthState} from "../../hooks/Auth/AuthState";
import {DocumentState} from "../../hooks/DocumentProvider/DocumentState";
import {DocumentStateContext} from "../../hooks/DocumentProvider";
import {useRouter} from "next/router";
import {firebase} from "../../config/firebase";

export const LoginModal = () => {


    const {isOpen, onOpen, onClose} = useDisclosure();

    const primaryColor = "primary.green";
    const primaryLightColor = "primary.lightGreen";
    const router = useRouter();

    return (
        <>
            <Button
                onClick={onOpen}
                fontSize={["xs", "lg", "sm", "md"]}
                fontWeight="bold"
                size="sm"
                _hover={{ bg: primaryLightColor }}
                backgroundColor={primaryColor}         
                textColor="text.white"   
                _active={{
                    bg: primaryLightColor,
                    transform: "scale(0.98)",
                    borderColor: "#bec3c9"                
                }}
                _focus={{
                    outline: 0,
                }}
                outline={0}
                variant="solid"
            >
                Login
            </Button>
            <Modal
                blockScrollOnMount={true}
                onClose={onClose}
                isOpen={isOpen}
                isCentered
                size="xs"
            >
                <ModalOverlay />
                <ModalContent
                    bg="white"
                    borderRadius={8}
                    borderTopWidth={5}
                    borderTopColor="primary.green"
                    pb={5}
                >
                    <ModalHeader>
                        <Box>
                            <Text color="black">Welcome,</Text>
                            <Text color="grey">Sign in to continue!</Text>
                        </Box>
                    </ModalHeader>
                    <ModalCloseButton color="black" />
                    <ModalBody>
                        <Grid gap={2}>
                            <Link
                                onClick={async () => {
                                    await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).finally(() => {
                                        onClose
                                    });
                                }}
                            >
                                <LoginWithGoogle />
                            </Link>
                        </Grid>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );

};