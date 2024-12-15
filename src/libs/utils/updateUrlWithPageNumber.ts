const updateUrlWithPageNumber = (pageNumber: number) => {
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    params.set('page', pageNumber.toString());

    const pathname = window.location.pathname;
    window.history.pushState({}, '', `${pathname}?${params.toString()}`);
  }
};

export default updateUrlWithPageNumber;
