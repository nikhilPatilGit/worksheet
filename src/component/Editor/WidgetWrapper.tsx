import { Box } from "@chakra-ui/react";
import React, { FC } from "react";

export const WidgetWrapper: FC = ({ ...props }) => {

  return <Box>{props.children}</Box>;
};
