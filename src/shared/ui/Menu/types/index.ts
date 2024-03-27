import { ReactNode } from 'react';

/** Base menu item interface */
export interface MenuItemOption {
  /** Route link */
  link: string;
  /** The displayed value of the element */
  label: string;
}

/** Base menu component interface */
export interface MenuBaseProps {
  /**
   * The direction of the menu items
   *
   * @default 'horizontal'
   */
  direction?: 'horizontal' | 'vertical';
  /** Additional class for the component */
  className?: string;
}

/** The type for the menu component without children elements */
export type MenuWithoutChildren = {
  /** List of menu items. If the list is empty, the `children` props will be displayed */
  items: MenuItemOption[];
  /** The content of the component */
  children?: undefined;
} & MenuBaseProps;

/** The type for the menu component with children elements */
export type MenuWithChildren = {
  /** List of menu items. If the list is empty, the `children` props will be displayed */
  items?: undefined;
  /** The content of the component */
  children: ReactNode;
};
