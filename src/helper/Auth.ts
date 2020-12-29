import { auth, googleProvider } from "../../config/firebase";

export const signIn = () => {
    return auth.signInWithPopup(googleProvider).then((result) => {
        auth.currentUser.sendEmailVerification();
     return result.user;
   }).catch((error) => {return error;});
 };