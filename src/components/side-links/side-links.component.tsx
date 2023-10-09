import {
  Box,
  Grid,
  IconButton,
  Link,
  useMultiStyleConfig
} from '@chakra-ui/react';
import { Link as LinkType } from '../../types';
import { GitHubIcon, LinkedInIcon, TwitterIcon } from '../icons';

export const SideLinks = () => {
  const style = useMultiStyleConfig('sideLinks', {});

  const socialLinks: LinkType[] = [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dorotazelga',
      children: <LinkedInIcon />
    },
    {
      label: 'GitHiub',
      href: 'https://github.com/wroclawianka',
      children: <GitHubIcon />
    }
  ];

  return (
    <Grid sx={style.root}>
      {socialLinks.map(({ href, label, children: icon }) => (
        <Link href={href} about="blank" key={label}>
          <IconButton
            size="lg"
            variant="ghost"
            aria-label={label}
            colorScheme="teal"
            icon={icon}
          />
        </Link>
      ))}
      <Box sx={style.line} />
    </Grid>
  );
};
