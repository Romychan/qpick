import { cl } from '../../lib/utils';
import { Radio } from '../Radio/Radio';

import { RadioOptionType } from './types';
import styles from './RadioGroup.module.scss';

interface IRadioGroupProps {
  /** List of options to display */
  options: RadioOptionType[];
  /** The current selected value */
  selectedValue?: string;
  /** Additional class for the component */
  className?: string;
  /**
   * The direction of the radio items
   *
   * @default 'horizontal'
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * The callback that will be called when the radio item is selected
   *
   * @param value Selected value
   */
  onChange: (value: string) => void;
}

/** This component is used to select one option from a list of all options */
export const RadioGroup = ({
  options,
  selectedValue,
  direction = 'horizontal',
  className,
  onChange,
}: IRadioGroupProps) => {
  return (
    <div
      className={cl(styles.container, styles[direction], className)}
      data-testid="radio-group"
    >
      {options.map(({ value, label }) => (
        <Radio
          key={value}
          id={value}
          name={value}
          value={value}
          label={label}
          checked={value === selectedValue}
          onChange={(event) => onChange(event.target.value)}
        />
      ))}
    </div>
  );
};
