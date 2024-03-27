import { InputHTMLAttributes } from 'react';

import { cl } from '../../lib/utils';

import styles from './Radio.module.scss';

interface IRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  /** The displayed label of the element */
  label?: string;
}

/** This component is used to select a specific option */
export const Radio = ({
  label,
  name,
  checked,
  className,
  ...rest
}: IRadioProps) => {
  return (
    <label className={cl(styles.container, className)} htmlFor={name}>
      <input
        className={styles.input}
        checked={checked}
        type="radio"
        name={name}
        {...rest}
      />
      <span className={styles.check}></span>
      {label ? <span className={styles.label}>{label}</span> : null}
    </label>
  );
};
