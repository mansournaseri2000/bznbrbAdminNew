import { useMemo } from 'react';

export function useResolveIdsToNames(paramsId: number | undefined, data: any[]): string {
  const resolvedName = useMemo(() => {
    if (!paramsId || !data?.length) return '';
    const match = data.find(item => item.id === paramsId);
    return match ? match.name : '';
  }, [paramsId, data]);

  return resolvedName;
}
