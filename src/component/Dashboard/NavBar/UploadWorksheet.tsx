import { Button, Icon } from "@chakra-ui/react"
import React, { createRef } from "react"
import { MdFileUpload } from "react-icons/md"


export const UploadWorksheet = () => {

    let inputFileRef = createRef<HTMLInputElement>();

    const handleImageUpload = async (event) => {
        const files = event.target.files;
        let formData = new FormData();
        formData.append('file', files[0]);
        
        await fetch('http://localhost:8080/uploadFile', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.error(error)
        });
      }

     const triggerInputFile = () => {
        if (inputFileRef.current != undefined && inputFileRef.current.click != undefined){
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