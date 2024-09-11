import { useEffect, useState } from 'react';

import { Data } from '@/types/point';

const useFilteredData = (searchText: string, data: Data[]) => {
  const [filteredData, setFilteredData] = useState<Data[]>([]);

  useEffect(() => {
    if (searchText) {
      // Filter data based on the search text
      const newData = data.filter(item => item.pointName.includes(searchText));
      setFilteredData(newData);
    } else {
      // If no search text is provided, return all data
      setFilteredData(data);
    }
  }, [searchText, data]);

  return filteredData;
};

export default useFilteredData;
