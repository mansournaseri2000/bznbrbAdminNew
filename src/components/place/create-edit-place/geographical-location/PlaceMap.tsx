import { useEffect, useMemo } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

type Props = {
  location?: [number, number]; // Allow undefined
};

const MapUpdater = ({ location }: { location?: [number, number] }) => {
  const map = useMap();

  useEffect(() => {
    if (location && location[0] !== undefined && location[1] !== undefined) {
      map.setView(location, map.getZoom() + 3, { animate: true });
    }
  }, [location, map]);

  return null;
};

const PlaceMap = ({ location }: Props) => {
  const defaultCenter: [number, number] = [32.4279, 53.688];
  const defaultZoom = 5;

  const initialCenter = useMemo(() => (location ? location : defaultCenter), [location]);

  return (
    <MapContainer
      doubleClickZoom={false}
      attributionControl={false}
      scrollWheelZoom={true}
      center={initialCenter}
      zoom={defaultZoom}
      style={{ height: '600px', width: '100%', borderRadius: '8px', zIndex: 1 }}
    >
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />

      {/* Update map center dynamically */}
      <MapUpdater location={location} />

      {location && location[0] !== undefined && location[1] !== undefined && (
        <Marker position={location}>
          <Popup>{`Lat: ${location[0]}, Lng: ${location[1]}`}</Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default PlaceMap;
