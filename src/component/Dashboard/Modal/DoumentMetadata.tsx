import { VStack, Button, Center, CircularProgress, FormControl, FormHelperText, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, StackDivider, Textarea, InputGroup, InputLeftAddon, HStack } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { updateDocumentInCollection } from "src/api/firebase";
import { AuthStateContext } from "src/hooks/Auth";
import { AuthState } from "src/hooks/Auth/AuthState";
import { Action, ActionResult } from "src/hooks/Common/Action";
import { ActionType } from "src/hooks/Common/Types";
import { DashReducerContext, DashState, DashStateContext } from "src/hooks/Dashboard";
import { DocumentMetadata, InitialDocumentMetadata } from "src/modals/DocumentMetadata";


export const DocumentMetadataForm = () => {
    const dispatch: React.Dispatch<Action> = useContext(DashReducerContext);
    const dashState: DashState = useContext(DashStateContext);
    const authState: AuthState = useContext(AuthStateContext);

    const [startDate, setStartDate] = useState(new Date());
    const [docMetaState, setDocMetaState] = useState({
        title: "",
        description: "",
        startDate: "2020-01-01",
        dueDate: "2021-01-01"
    });

    useEffect(() => {
        if(docMetaState !== null){
            console.log(docMetaState);
        }
    }, [docMetaState]);

    const handleSubmit = async () => {
        if(dashState.currentDocumentId){
            dispatch(new ActionResult(ActionType.ShowDashSpinner));
            let path = `data/${authState.currentUser.id}/documents`;
            await updateDocumentInCollection(path, dashState.currentDocumentId, docMetaState)
            .then(() => {
                dispatch(new ActionResult(ActionType.ResetDashModal));
            }).catch((error) => {});
        }
    }

    return (
        <ModalContent>
            <ModalHeader>Enter Details</ModalHeader>
            <ModalCloseButton  onClick={() => dispatch(new ActionResult(ActionType.ResetDashModal))}  />
            <ModalBody pb={6}>
                <VStack
                    divider={<StackDivider borderColor="gray.200" />}
                    spacing={4}
                    align="stretch"
                >
                    <FormControl id="text">
                        <FormLabel>Title</FormLabel>
                        <Input onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setDocMetaState({...docMetaState, title: event.target.value});
                        }} type="text" />
                        <FormHelperText>Nice and simple title</FormHelperText>
                    </FormControl>

                    <FormControl id="text">
                        <FormLabel>Description</FormLabel>
                        <Textarea onChange={(event) => {
                            setDocMetaState({...docMetaState, description: event.target.value});
                        }} placeholder="Brief description about your worksheet" />
                    </FormControl>

                    <HStack>

                        <FormControl id="text">
                            <FormLabel>Start Date</FormLabel>
                            <input type="date" id="start" name="trip-start" onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                
                                setDocMetaState({...docMetaState, startDate: event.target.value});

                            }} value={docMetaState.startDate} min={"2020-01-01"} max={"2022-01-01"} />
                        </FormControl>


                        <FormControl id="text">
                            <FormLabel>Due Date</FormLabel>
                            <input type="date" id="start" name="trip-start" onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                
                                setDocMetaState({...docMetaState, dueDate: event.target.value});

                            }} value={docMetaState.startDate} min={"2020-01-01"} max={"2022-01-01"} />
                        </FormControl>
                    </HStack>

                    <Button onClick={() => handleSubmit()} w="150px" size="lg" mt={4} colorScheme="teal" type="submit">
                        Submit
                    </Button>

                </VStack>
            </ModalBody>
        </ModalContent>);
}
