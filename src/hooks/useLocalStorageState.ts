import { useEffect, useState } from "react";

export function useLocalStorageState(
  defaultValue: boolean,
  key: string
): [boolean, React.Dispatch<React.SetStateAction<boolean>>] {
  const [state, setState] = useState(() => {
    const storedValue = window.localStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
}
