import { render } from '@testing-library/react';

import { useIsMounted } from '../useIsMounted';

const TestComponent = ({ isRerender = false }) => {
  const isMounted = useIsMounted();

  if (isRerender) {
    expect(isMounted).toEqual(true);
  } else {
    expect(isMounted).toEqual(false);
  }

  return <p>Test Component</p>;
};

describe('useIsMounted', () => {
  it('should work correctly', () => {
    const { rerender } = render(<TestComponent />);

    rerender(<TestComponent isRerender />);
    rerender(<TestComponent isRerender />);
  });
});
