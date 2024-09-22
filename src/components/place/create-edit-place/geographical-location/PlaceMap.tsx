import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

type Props = {
  location: number[];
};

const PlaceMap = ({ location }: Props) => {
  console.log(location, 'locationlocation');

  return (
    <MapContainer
      doubleClickZoom={false}
      attributionControl={false}
      scrollWheelZoom={false}
      center={[32.4279, 53.688]}
      zoom={5}
      style={{ height: '400px', width: '100%', borderRadius: '8px', zIndex: 1 }}
    >
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker key={'index'} position={location as any}>
        <Popup>df</Popup>
      </Marker>
    </MapContainer>
  );
};

export default PlaceMap;
