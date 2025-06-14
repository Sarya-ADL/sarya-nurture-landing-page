import { useState, useCallback } from 'react';

interface LoadingState<T> {
  isLoading: boolean;
  error: Error | null;
  data: T | null;
}

interface UseLoadingStateOptions<T> {
  initialData?: T;
  onError?: (error: Error) => void;
}

export const useLoadingState = <T>(options: UseLoadingStateOptions<T> = {}) => {
  const [state, setState] = useState<LoadingState<T>>({
    isLoading: false,
    error: null,
    data: options.initialData || null,
  });

  const execute = useCallback(async (promise: Promise<T>) => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    try {
      const data = await promise;
      setState({ isLoading: false, error: null, data });
      return data;
    } catch (error) {
      const errorObj = error instanceof Error ? error : new Error(String(error));
      setState(prev => ({ ...prev, isLoading: false, error: errorObj }));
      options.onError?.(errorObj);
      throw errorObj;
    }
  }, [options.onError]);

  const reset = useCallback(() => {
    setState({
      isLoading: false,
      error: null,
      data: options.initialData || null,
    });
  }, [options.initialData]);

  return {
    ...state,
    execute,
    reset,
  };
}; 