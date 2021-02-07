import React, {FC} from "react";
import {Text} from "@chakra-ui/react";
import CustomGridItem from "../../../util/CustomGridItem";
import _ from "lodash";

interface IProps {
    text: string;
    size: string;
    fontFamily?: string;
    placement?: string;
}
export const NavText: FC<IProps> = ({...props}) => {
    return <Text
        fontFamily={props.fontFamily}          
        align="center"
        // align={_.isString(props.placement) ? props.placement : "center"}
        // align={_.isString(props.placement) ? props.placement : "center"}
        fontWeight="bold"
        fontSize={props.size}
        color="text.white"
    >
        {props.text}
    </Text>
}