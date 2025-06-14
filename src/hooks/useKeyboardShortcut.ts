import { useEffect, useCallback } from 'react';

type KeyCombo = string | string[];
type KeyHandler = (event: KeyboardEvent) => void;

interface UseKeyboardShortcutOptions {
  enabled?: boolean;
  preventDefault?: boolean;
  stopPropagation?: boolean;
}

export const useKeyboardShortcut = (
  keyCombo: KeyCombo,
  callback: KeyHandler,
  options: UseKeyboardShortcutOptions = {}
) => {
  const {
    enabled = true,
    preventDefault = true,
    stopPropagation = false,
  } = options;

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!enabled) return;

      const keys = Array.isArray(keyCombo) ? keyCombo : [keyCombo];
      const pressedKey = event.key.toLowerCase();
      const modifierKeys = {
        ctrl: event.ctrlKey,
        shift: event.shiftKey,
        alt: event.altKey,
        meta: event.metaKey,
      };

      const isMatch = keys.some((key) => {
        const [modifier, mainKey] = key.toLowerCase().split('+');
        return (
          (!modifier || modifierKeys[modifier as keyof typeof modifierKeys]) &&
          (!mainKey || mainKey === pressedKey)
        );
      });

      if (isMatch) {
        if (preventDefault) {
          event.preventDefault();
        }
        if (stopPropagation) {
          event.stopPropagation();
        }
        callback(event);
      }
    },
    [keyCombo, callback, enabled, preventDefault, stopPropagation]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
}; 