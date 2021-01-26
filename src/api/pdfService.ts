import { method } from "lodash";
import { auth } from "src/config/firebase";

export const TestGet = async () => {
  return await fetch("http://localhost:8080/hello")
    .then((response) => response.text())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};

export const TestPost = async () => {


  // return await fetch("http://localhost:8080/helloPost", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify('"name":"Nikhil"'),
  // })
  //   .then((response) => response.text())
  //   .then((data) => console.log(data))
  //   .catch((error) => console.log(error));

};
