import { GridItem, Center, Box } from "@chakra-ui/react";
import { FC } from "react";

interface IProps {
    gridAreaM: string,
    gridAreaD: string,
    displayStatus?: string[]
}

const CustomGridItem: FC<IProps> = ({...props}) => {
return <GridItem alignSelf={"center"} display={props.displayStatus}  gridArea={[props.gridAreaM, props.gridAreaM, props.gridAreaD, props.gridAreaD]}>
    {props.children}
</GridItem>
};

export default CustomGridItem;

