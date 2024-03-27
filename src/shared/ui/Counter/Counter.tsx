import { Button } from '../Button';
import { Icon } from '../Icon';

import styles from './Counter.module.scss';

interface ICounterProps {
  /** The number to display in the counter */
  count: number;
  /**
   * The minimum value available
   *
   * @default 0
   */
  min?: number;
  /**
   * The maximum value available
   *
   * @default 20
   */
  max?: number;
  /**
   * The callback that will be called when the value increases
   *
   * @param {number} count - New increased count value
   */
  onIncrement: (count: number) => void;
  /**
   * The callback that will be called when the value decreases
   *
   * @param {number} count - New decreased count value
   */
  onDecrement: (count: number) => void;
}

/**
 * This component can be used to display the current value and to change the quantity.
 * For example, the `Counter` allows you to change the number of items in the cart.
 */
export function Counter({
  count,
  min = 1,
  max = 20,
  onIncrement,
  onDecrement,
}: ICounterProps) {
  const handleClickIncrement = () => {
    if (count < max) {
      onIncrement(count + 1);
    }
  };

  const handleClickDecrement = () => {
    if (count > min) {
      onDecrement(count - 1);
    }
  };

  return (
    <div className={styles.container}>
      <Button
        variant="secondary"
        size="sm"
        aria-label="Уменьшение счетчика"
        title="Уменьшить"
        isIconOnly
        className={styles.button}
        onClick={handleClickDecrement}
        disabled={count === min}
        data-testid="counter-decrement"
      >
        <Icon name="minus-filled" />
      </Button>
      <span className={styles.counter} data-testid="counter-count">
        {count}
      </span>
      <Button
        variant="secondary"
        size="sm"
        aria-label="Увеличение счетчика"
        title="Увеличить"
        isIconOnly
        className={styles.button}
        onClick={handleClickIncrement}
        disabled={count === max}
        data-testid="counter-increment"
      >
        <Icon name="plus-filled" />
      </Button>
    </div>
  );
}
