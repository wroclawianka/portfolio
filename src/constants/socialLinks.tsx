import { Link } from '../types';
import {
  AngelListIcon,
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon
} from '../components';

export const socialLinks: Link[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dorotazelga',
    children: <LinkedInIcon />
  },
  {
    label: 'GitHiub',
    href: 'https://github.com/wroclawianka',
    children: <GitHubIcon />
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/dorotazelga',
    children: <TwitterIcon />
  },
  {
    label: 'Angel List',
    href: 'https://angel.co/dorota-zelga',
    children: <AngelListIcon />
  }
];
