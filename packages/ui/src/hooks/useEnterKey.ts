import { useCallback, useEffect } from "react";

export const useEnterKey = (target: HTMLElement, callback?: () => void) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        e.preventDefault();
        callback?.();
      }
    },
    [callback]
  );
  useEffect(() => {
    target?.addEventListener("keydown", handleKeyDown);
    return () => {
      target?.removeEventListener("keydown", handleKeyDown);
    };
  }, [target, handleKeyDown]);
};
