import { useRouter } from 'next/navigation';

export const updateUrl = (searchParams: URLSearchParams, params: Record<string, any>) => {
  const router = useRouter();
  const newParams = new URLSearchParams(searchParams.toString());

  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      newParams.set(key, String(value));
    } else {
      newParams.delete(key);
    }
  });
  router.replace(`?${newParams.toString()}`);
};
