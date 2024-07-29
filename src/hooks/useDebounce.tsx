import { useEffect, useState } from "react";

const useDebounce = (
  initialValue: any,
  delay = 500,
  handleChange?: (value: string) => Promise<void>,
) => {
  const [inputValue, setInputValue] = useState(initialValue);

  useEffect(() => {
    const debounceTimer = setTimeout(async () => {
      await handleChange?.(inputValue);
    }, delay);

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [inputValue, delay]);

  const handleInputChange = (value: any) => {
    setInputValue(value);
  };

  return [handleInputChange];
};

export default useDebounce;
