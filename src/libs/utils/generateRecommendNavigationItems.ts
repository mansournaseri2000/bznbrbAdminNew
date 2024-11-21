import { PlaceResponse } from '@/types/data-management/point';

export function generateRecommendNavigationItems(place: PlaceResponse) {
  // Transport descriptions map
  const transportDescriptions: { [key in keyof any]: { title: string } } = {
    taxi: {
      title: 'تاکسی',
    },
    subway: {
      title: 'مترو',
    },
    bus: {
      title: 'اتوبوس',
    },
    airplane: {
      title: 'هواپیما',
    },
    car: {
      title: 'خودرو',
    },
    hike: {
      title: 'پیاده‌روی',
    },
    ship: {
      title: 'کشتی',
    },
    train: {
      title: 'قطار',
    },
  };

  const transportTypes: (keyof PlaceResponse)[] = ['taxi', 'subway', 'bus', 'airplane', 'car', 'hike', 'ship', 'train'];

  // Iterate over the transport types, check if they exist and are not null
  const recommendations = transportTypes
    .filter(type => Boolean(place[type]) !== false)
    .map(type => ({
      title: transportDescriptions[type]?.title,
      description: place[type], // Use the description from place
      type,
    }));

  return recommendations;
}
