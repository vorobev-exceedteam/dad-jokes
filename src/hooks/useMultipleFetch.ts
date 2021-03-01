import { useCallback, useEffect, useState } from 'react';

function useMultipleFetch<T>(
  fetchFunc: Function,
  numberOfData: number = 20,
  initialDataState: T[] = []
): [T[], boolean] {
  type State = {
    isLoading: boolean;
    result: T[];
  };

  const [state, setState] = useState<State>({
    result: initialDataState,
    isLoading: true
  });

  const fetchData = useCallback(async () => {
    const promises: Promise<T>[] = [];
    for (let i = 0; i < numberOfData; i++) {
      promises.push(fetchFunc());
    }
    const result = (await Promise.allSettled(promises)).filter(
      ({ status }) => status === 'fulfilled'
    ) as PromiseFulfilledResult<T>[];

    setState({
      result: result.map(({ value }) => value),
      isLoading: false
    });
  }, [fetchFunc, numberOfData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [state.result, state.isLoading];
}

export default useMultipleFetch;
