import { VStack, Button, Center, CircularProgress, FormControl, FormHelperText, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, StackDivider, Textarea, InputGroup, InputLeftAddon, HStack } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import { Action, ActionResult } from "src/hooks/Common/Action";
import { ActionType } from "src/hooks/Common/Types";
import { DashReducerContext, DashState, DashStateContext } from "src/hooks/Dashboard";

export const Spinner = ({ ...props }) => {
    const dispatch: React.Dispatch<Action> = useContext(DashReducerContext);
    return (
        <ModalContent>
            <ModalHeader>Processing your worksheet</ModalHeader>
            <ModalCloseButton onClick={() => dispatch(new ActionResult(ActionType.ResetDashModal))} />
            <ModalBody pb={6}>
                <Center>
                    <CircularProgress isIndeterminate value={80} />
                </Center>
            </ModalBody>
        </ModalContent>);
}
