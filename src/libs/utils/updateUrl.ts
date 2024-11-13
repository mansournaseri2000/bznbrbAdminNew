export const updateURLWithQueryParams = (router: any, searchParams: URLSearchParams, params: Record<string, any>): void => {
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
