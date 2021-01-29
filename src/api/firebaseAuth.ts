import {auth, firebase} from "src/config/firebase";
import React from "react";
import {Action} from "../hooks/Common/Action";
import {createActionResult} from "../helper/Factories";
import {User} from "../modals/User";
import {ActionType} from "../hooks/Common/Types";
import {DummyUser} from "../util/DummyData";

export const onAuthStateChanged = (dispatch: React.Dispatch<Action>): firebase.Unsubscribe =>  {
    return auth.onAuthStateChanged((user) => {
        if (user) {
            let currentUser: User = new User(user.uid, user.displayName, user.email, user.photoURL);
            dispatch(createActionResult<User>(ActionType.SignIn, currentUser));
        }
    }, (error) => {
        if(error){
            dispatch(createActionResult(ActionType.ErrorThrown, new Error(`Failed to get the current user ${error}`)));
        }
    });
}

export const signInWithGoogle = async (dispatch: React.Dispatch<Action>): Promise<void>  => {
     return auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((result) => {
         if(result.user){
             let user = result.user;
             let currentUser: User = new User(user.uid, user.displayName, user.email, user.photoURL);
             dispatch(createActionResult<User>(ActionType.SignIn, currentUser));
         }
     }).catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         dispatch(createActionResult(ActionType.ErrorThrown, new Error(`Failed to sign in with Google error-code :- ${errorCode}, error-message:- ${errorMessage}`)));
     });
};

export const signOutUser = async (dispatch: React.Dispatch<Action>): Promise<void> => {
    return auth.signOut().then(()=>{}).catch((error)=>{
        dispatch(createActionResult(ActionType.ErrorThrown, new Error(`Failed to get the current user ${error}`)));
    });
};