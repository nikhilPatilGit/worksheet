import React, {FC} from "react";
import {Box, Flex, flexbox, Link, ResponsiveValue, SystemProps, Text} from "@chakra-ui/react";
import CustomGridItem from "../../../util/CustomGridItem";
import _ from "lodash";

interface IProps {
    text: string;
    size: string;
    fontFamily?: string;
    placement?: string;
    url?: string;
}
export const NavText: FC<IProps> = ({...props}) => {

    return <Text
    as={Link}    
    href={props.url}
align="center"
fontFamily={props.fontFamily}       
fontWeight="bold"
fontSize={props.size}
color="text.white"
>
{props.text}
</Text>
}