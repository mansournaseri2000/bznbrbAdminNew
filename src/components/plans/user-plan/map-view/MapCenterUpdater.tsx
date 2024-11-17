'use client';

import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

import L from 'leaflet';
import { MapView } from '@/types/plans/trip';


const MapCenterUpdater: React.FC<{ locations: MapView[] }> = ({ locations }) => {
  const map = useMap();

  useEffect(() => {
    if (locations.length === 1) {
      const singleLocation = locations[0];
      const lat = parseFloat(String(singleLocation.lat));
      const lng = parseFloat(String(singleLocation.lng));

      // Only update the map if lat/lng are valid numbers
      if (!isNaN(lat) && !isNaN(lng)) {
        map.setView([lat, lng], 15, {
          animate: true,
        });
      } else {
        console.error('Invalid LatLng for single location:', { lat, lng });
      }
    } else if (locations.length > 1) {
      const latlngs: [number, number][] = locations
        .map(item => {
          const lat = parseFloat(String(item.lat));
          const lng = parseFloat(String(item.lng));
          // Ensure both lat and lng are valid numbers
          if (!isNaN(lat) && !isNaN(lng)) {
            return [lat, lng] as [number, number];
          }
          console.error('Invalid LatLng for location:', { lat, lng });
          return null;
        })
        .filter((item): item is [number, number] => item !== null); // Type guard to remove null values

      // If there are valid latlngs, fly to bounds
      if (latlngs.length > 0) {
        try {
          const bounds = L.latLngBounds(latlngs);

          // Ensure bounds are valid before applying them to the map
          if (bounds.isValid()) {
            map.flyToBounds(bounds, {
              animate: true,
              duration: 1.0,
            });
          } else {
            console.error('Invalid bounds detected, skipping flyToBounds');
          }
        } catch (error) {
          console.error('Error calculating bounds:', error);
        }
      } else {
        console.error('No valid locations to create bounds.');
      }
    }
  }, [locations, map]);

  return null;
};

export default MapCenterUpdater;
