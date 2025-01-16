export const updateURLWithQueryParams = (router: any, searchParams: URLSearchParams, params: Record<string, any>): void => {
  const newParams = new URLSearchParams(searchParams.toString());
  if (Object.keys(params).length === 0) {
    newParams.forEach((_, key) => newParams.delete(key));
  } else {
    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        newParams.set(key, String(value));
      } else {
        newParams.delete(key);
      }
    });
  }

  router.replace(`?${newParams.toString()}`);
};
