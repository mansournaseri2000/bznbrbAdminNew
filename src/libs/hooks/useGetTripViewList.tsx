import { useMemo } from 'react';

import { Day } from '@/types/plans/trip';

export function useGetTripViewList(dayID: number | null, tripData: Day[]) {
  const dayViews = useMemo(() => {
    if (dayID === null || tripData?.length === 0) {
      return {
        mapViewListItem: [],
        commonViewListItem: [],
      };
    }
    const day = tripData?.find(d => d.day_id === dayID);
    if (!day) {
      return {
        mapViewListItem: [],
        commonViewListItem: [],
      };
    }

    const mapViewListItem = day.mapView.filter(location => location.point_id !== 0 && location.lat !== undefined && location.lng !== undefined);

    return {
      mapViewListItem,
      commonViewListItem: day.commonView,
    };
  }, [dayID, tripData]);

  return dayViews;
}
