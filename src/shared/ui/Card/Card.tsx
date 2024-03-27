import { HTMLAttributes } from 'react';

import { cl } from '../../lib/utils';

import styles from './Card.module.scss';

interface ICardProps extends HTMLAttributes<HTMLDivElement> {}

/** This component can be used to create a container around the passed components */
export const Card = ({ children, className, ...rest }: ICardProps) => {
  return (
    <div {...rest} className={cl(styles.container, className)}>
      {children}
    </div>
  );
};
