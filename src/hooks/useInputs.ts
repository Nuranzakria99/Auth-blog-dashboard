import { useState, ChangeEvent } from "react";

export function useInput<T extends HTMLInputElement | HTMLTextAreaElement = HTMLInputElement>(initialValue: string) {
  const [value, setValue] = useState(initialValue);

  function onChange(e: ChangeEvent<T>) {
    setValue(e.target.value);
  }

  return { value, onChange };
}
