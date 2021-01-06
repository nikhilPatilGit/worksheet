import { Image, Skeleton } from "@chakra-ui/react";
import { FC, SyntheticEvent, useEffect, useState } from "react";


interface IProps {
  src: string;
}

const ImageLoader: FC<IProps> = ({ ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Skeleton isLoaded={isLoaded}>
      <Image
        width="816px"
        height="1056px"
        minH="1056px"
        minW="816px"
        src={props.src}
        alt="Segun Adebayo"
        onLoad={(event: SyntheticEvent<HTMLImageElement, Event>) => {
          setIsLoaded(true);
        }}
      />
    </Skeleton>
  );
};

export default ImageLoader;
