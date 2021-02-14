import { VStack, Button, Center, CircularProgress, FormControl, FormHelperText, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, StackDivider, Textarea, InputGroup, InputLeftAddon, HStack } from "@chakra-ui/react";
import { stat } from "fs";
import React, { useContext, useState } from "react";
import { DashState, DashStateContext } from "src/hooks/Dashboard";
import { DocumentMetadataForm } from "./DoumentMetadata";
import { Spinner } from "./Spinner";


const SwitchModalBody = ({ ...props }) => {
    if (props.modalState == 1) {
        return <Spinner />
    }

    return <DocumentMetadataForm />
}

export const DashboardModal = () => {

    const state: DashState = useContext(DashStateContext);

    return (
        <Modal isCentered={true} size={"lg"} closeOnOverlayClick={false} isOpen={state.modalState !== 0} onClose={() => { }}>
            <ModalOverlay />
            <SwitchModalBody modalState={state.modalState} />
        </Modal>
    );
}