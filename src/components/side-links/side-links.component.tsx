import {
  Box,
  Grid,
  IconButton,
  Link,
  useMultiStyleConfig
} from '@chakra-ui/react';
import { socialLinks } from '../../constants';

export const SideLinks = () => {
  const style = useMultiStyleConfig('sideLinks', {});

  return (
    <Grid sx={style.root}>
      {/* {socialLinks.map(({ href, label, children: icon }) => (
        <Link href={href} about="blank" key={label}>
          <IconButton
            size="lg"
            variant="ghost"
            aria-label={label}
            colorScheme="teal"
            icon={icon}
          />
        </Link>
      ))} */}
      <Box sx={style.line} />
    </Grid>
  );
};
