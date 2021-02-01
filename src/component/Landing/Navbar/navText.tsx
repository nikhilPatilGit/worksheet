import React, {FC} from "react";
import {Text} from "@chakra-ui/react";
import CustomGridItem from "../../../util/CustomGridItem";

interface IProps {
    text: string;
    size: string
}
export const NavText: FC<IProps> = ({...props}) => {
    return <Text
        align="center"
        fontWeight="bold"
        fontSize={props.size}
        color="text.white"
    >
        {props.text}
    </Text>
}