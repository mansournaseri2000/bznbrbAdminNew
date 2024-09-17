const updateUrlWithPageNumber = (pageNumber: number) => {
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    params.set('page', pageNumber.toString());

    window.history.pushState({}, '', `/?${params.toString()}`);
  }
};

export default updateUrlWithPageNumber;
