import { useRef } from 'react';

/**
 * This hook is used to check whether a component is mounted or not
 *
 * @returns A boolean value indicating whether the component is mounted or not when called
 */
export const useIsMounted = () => {
  const isMounted = useRef(false);

  if (!isMounted.current) {
    isMounted.current = true;

    return false;
  }

  return isMounted.current;
};
