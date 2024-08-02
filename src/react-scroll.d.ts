declare module 'react-scroll' {
  import * as React from 'react';

  export interface LinkProps {
    to: string;
    spy?: boolean;
    smooth?: boolean;
    hashSpy?: boolean;
    offset?: number;
    delay?: number;
    isDynamic?: boolean;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    duration?: number | 'auto';
    containerId?: string;
    activeClass?: string;
    className?: string;
    activeStyle?: React.CSSProperties;
    role?: string;
    tabIndex?: number;
    onSetActive?: () => void;
    onSetInactive?: () => void;
    ignoreCancelEvents?: boolean;
    children?: React.ReactNode;
  }

  export class Link extends React.Component<LinkProps> {}

  export interface ElementProps {
    name: string;
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
  }

  export class Element extends React.Component<ElementProps> {}
}
