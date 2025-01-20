'use client';

import { MapContainer, Marker, Polyline, Popup, TileLayer } from 'react-leaflet';

import { Theme } from '@radix-ui/themes';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';

import { Boxshadow, colorPalette } from '@/theme';
import { MapView } from '@/types/plans/trip';

// import { breakpoints } from '@/theme';
import MapCenterUpdater from './MapCenterUpdater';
import PopupCard from './PopupCard';

// Fix for default marker icon issue in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

type Props = {
  locations: MapView[];
  center: any;
  isEmpty: boolean;
};

const TripMapView: React.FC<Props> = ({ locations, center, isEmpty }) => {
  const latlngs = isEmpty ? [] : locations.map(item => [Number(item.lat), Number(item.lng)]);

  return (
    <>
      {isEmpty === true ? (
        <StyledMapContainer
          center={locations as any}
          zoom={15}
          minZoom={1}
          maxZoom={50}
          scrollWheelZoom={false}
          doubleClickZoom={false}
          attributionControl={false}
          style={{ height: '100%', width: '100%', borderRadius: '8px', zIndex: 1 }}
        >
          <TileLayer url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png' />
        </StyledMapContainer>
      ) : (
        <StyledMapContainer
          center={center}
          zoom={15}
          minZoom={1}
          maxZoom={50}
          scrollWheelZoom={false}
          doubleClickZoom={false}
          attributionControl={false}
          style={{ height: '100%', width: '100%', borderRadius: '8px', zIndex: 1 }}
        >
          <TileLayer url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png' />

          <Polyline positions={latlngs as any} color='#0DAFFC' weight={3} opacity={0.6} />
          {locations.map((item, index) => (
            <Marker
              key={index}
              position={Boolean(item.lat) && Boolean(item.lng) ? [Number(item.lat), Number(item.lng)] : [0, 0]}
              icon={L.divIcon({
                html: `
              <div style="position: relative; display: inline-block;">
                <img src="https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png" 
                     style="display: block;" />
                <div style="position: absolute; top: -25px; left: 48%; transform: translateX(-50%);
                            background-color: white; border-radius: 50%; width: 20px; height: 20px;
                            display: flex; justify-content: center; align-items: center;
                            font-size: 12px; font-weight: bold; color: black; border: 1px solid black;">
                  ${index + 1}
                </div>
              </div>`,
                className: '',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
              })}
            >
              <Popup>
                <Theme style={{ direction: 'rtl' }}>
                  <PopupCard
                    description={item?.description}
                    imageUrl={Boolean(item.pic) ? item?.pic[0]?.path : ''}
                    lat={Boolean(item.lat) ? item?.lat : 0}
                    lng={Boolean(item.lng) ? item?.lng : 0}
                    title={item?.title}
                    key={index}
                    id={item?.point_id}
                  />
                </Theme>
              </Popup>
            </Marker>
          ))}

          {/* Component to update map center and zoom based on location changes */}
          <MapCenterUpdater locations={locations} />
        </StyledMapContainer>
      )}
    </>
  );
};

export default TripMapView;

const StyledMapContainer = styled(MapContainer)`
  position: absolute;
  inset: 0;
  height: 100%;
  box-shadow: ${Boxshadow.shadow1};
  border: 1px solid ${colorPalette.gray[4]};

  & .leaflet-popup-close-button {
    display: none;
  }

  & .leaflet-popup-content-wrapper {
    width: max-content;
  }
`;
