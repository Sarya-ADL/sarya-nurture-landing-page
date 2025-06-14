import { useState, useEffect, useCallback } from 'react';

type StorageValue<T> = T | null;

interface UseLocalStorageOptions<T> {
  serializer?: (value: T) => string;
  deserializer?: (value: string) => T;
  onError?: (error: Error) => void;
}

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
  options: UseLocalStorageOptions<T> = {}
) {
  const {
    serializer = JSON.stringify,
    deserializer = JSON.parse,
    onError = console.error,
  } = options;

  // Get from local storage then
  // parse stored json or return initialValue
  const readValue = useCallback((): StorageValue<T> => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? deserializer(item) : initialValue;
    } catch (error) {
      onError(error instanceof Error ? error : new Error(String(error)));
      return initialValue;
    }
  }, [key, initialValue, deserializer, onError]);

  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState<StorageValue<T>>(readValue);

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = useCallback(
    (value: T | ((val: StorageValue<T>) => T)) => {
      try {
        // Allow value to be a function so we have same API as useState
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        
        // Save state
        setStoredValue(valueToStore);
        
        // Save to local storage
        window.localStorage.setItem(key, serializer(valueToStore));
      } catch (error) {
        onError(error instanceof Error ? error : new Error(String(error)));
      }
    },
    [key, serializer, storedValue, onError]
  );

  // Listen for changes to this localStorage key in other tabs/windows
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key && e.newValue !== null) {
        try {
          setStoredValue(deserializer(e.newValue));
        } catch (error) {
          onError(error instanceof Error ? error : new Error(String(error)));
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [key, deserializer, onError]);

  return [storedValue, setValue] as const;
} 