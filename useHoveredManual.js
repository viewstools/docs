import { useState } from 'react';

export default function useHoveredManual(isDisabled = false) {
  let [isHoveredManual, setIsHoveredManual] = useState(false);

  return {
    isHoveredManual: !isDisabled && isHoveredManual,
    onMouseEnter: () => setIsHoveredManual(true),
    onMouseLeave: () => setIsHoveredManual(false),
  };
}
