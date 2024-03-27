/** Base radio item interface */
export interface RadioOptionType<T = string> {
  /** The displayed value of the element */
  label: string;
  /** The unique value of the element */
  value: T;
}
