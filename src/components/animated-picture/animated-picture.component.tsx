import { FunctionComponent } from "react";
import { Image, ImageProps, useMultiStyleConfig } from '@chakra-ui/react';

type Props = Pick<ImageProps, 'src' | 'alt'>

export const AnimatedPicture: FunctionComponent<Props> = ({ src, alt }) => {
    const style = useMultiStyleConfig('animatedPicture')

    return <Image
        src={src}
        alt={alt}
        sx={style.root}
    />
}