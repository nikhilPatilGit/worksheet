import { Button, Icon } from "@chakra-ui/react"
import React, { createRef, useContext } from "react"
import { MdFileUpload } from "react-icons/md"
import { parseCookies } from 'nookies'
import { DashReducerContext } from "src/hooks/Dashboard"
import { Action, ActionResult } from "src/hooks/Common/Action"
import { ActionType } from "src/hooks/Common/Types"
import { UploadPdf } from "src/api/pdfService"


export const UploadWorksheet = () => {

  const dispatch: React.Dispatch<Action> = useContext(DashReducerContext);

  let inputFileRef = createRef<HTMLInputElement>();

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {

    dispatch(new ActionResult(ActionType.ShowDashSpinner));

    const files = event.target.files;

    let formData = new FormData();
    formData.append('file', files[0]);

    await UploadPdf(formData)
    .then((result: string) => {
      dispatch(new ActionResult<string>(ActionType.SetCurrentDocumentId, result));
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const triggerInputFile = () => {      
    if (inputFileRef.current != undefined && inputFileRef.current.click != undefined) {
      inputFileRef.current.click();
    }
  }

  return <>
    <Button onClick={() => triggerInputFile()} leftIcon={<Icon as={MdFileUpload} />} colorScheme="teal" variant="solid">
      Add Worksheet
        </Button>
    <input hidden onChange={handleImageUpload} ref={inputFileRef} type="file" id="fileUpload" />
  </>
}