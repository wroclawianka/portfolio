import { ReactElement } from 'react';

export type Link = {
  href: string;
  label: string;
  children?: ReactElement;
};
