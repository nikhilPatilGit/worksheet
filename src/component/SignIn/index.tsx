import React, {FC, ReactElement} from "react";

interface IProps {
    children(signIn: (()=>void)): React.ReactElement
}

const SignIn: FC<IProps> = ({...props}) => {
    const signIn = () => {
        console.log("comping from children");
    };

    return <div>
        {props.children(() => signIn())}
    </div>
}

export default SignIn;