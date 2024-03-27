/**
 * Base language item interface
 *
 * @template T The type of the unique value
 */
export interface LanguageOption<T = string> {
  /** The unique value of the element */
  value: T;
  /** The displayed value of the element */
  label: string;
}
