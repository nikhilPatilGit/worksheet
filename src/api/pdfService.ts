import { method } from "lodash";
import { parseCookies } from "nookies";

export const TestGet = async () => {
  return await fetch("http://localhost:8080/hello")
    .then((response) => response.text())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};

export const UploadPdf = async (formData: FormData) => {

const token = parseCookies().token;
  
return await fetch('http://localhost:8080/uploadFile', {
  method: 'POST',
  body: formData,
  headers: new Headers({
    'Authorization': token
  })
})
  .then(response => {
    return response.text();
  })
  .catch(error => {
    throw new Error(error);
  });

};
