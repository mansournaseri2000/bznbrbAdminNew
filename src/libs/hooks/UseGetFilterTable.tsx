import { PlacesDetail } from '@/types/place/place-list';
import { useMemo } from 'react';


// Define a type for search criteria
interface SearchCriteria {
  placeName?: string; // Optional type
  province?: string; // Optional type
  city?: string; // Optional type
}

const useFilteredData = (searchCriteria: SearchCriteria, data: PlacesDetail[]): PlacesDetail[] => {
  const { placeName = '', province = '', city = '' } = searchCriteria; // Provide default values to avoid undefined

  const filteredData = useMemo(() => {
    return data.filter(item => {
      // Check each filter criterion and apply filtering
      const matchesPlaceName = placeName.trim() === '' || item.name.includes(placeName.trim());
      const matchesProvince =
        province.trim() === '' || (item.province && item.province.includes(province.trim()));
      const matchesCity = city.trim() === '' || (item.city && item.city.includes(city.trim()));

      return matchesPlaceName && matchesProvince && matchesCity;
    });
  }, [placeName, province, city, data]);

  return filteredData;
};

export default useFilteredData;
