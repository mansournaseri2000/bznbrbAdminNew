'use client';

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import { Theme } from '@radix-ui/themes';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { styled } from 'styled-components';

import PopupCard from '@/components/plans/user-plan/map-view/PopupCard';
import { PlaceResponse } from '@/types/data-management/point';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});
/**
 * props
 * _______________________________________________________________________________
 */
type Props = {
  data: PlaceResponse;
};

const Map = ({ data }: Props) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */

  /**
   * useEffect
   * _______________________________________________________________________________
   */

  /**
   * hooks and methods
   * _______________________________________________________________________________
   */

  /**
   * template
   * _______________________________________________________________________________
   */
  return (
    <Root
      doubleClickZoom={false}
      attributionControl={false}
      center={[Number(data.lat), Number(data.lng)]} // Centering map around Iran
      scrollWheelZoom={false}
      zoom={12}
      style={{ height: '100%', width: '100%', borderRadius: '8px', zIndex: 1 }}
      zoomControl={true}
    >
      <TileLayer url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png' />
      <Theme>
        <Marker key={'index'} position={[Number(data.lat), Number(data.lng)]}>
          <Popup>
            <PopupCard id={data.id} description={data.description} imageUrl={data.pictures[0]?.path} lat={Number(data.lat)} lng={Number(data.lng)} title={data.name} />
          </Popup>
        </Marker>
      </Theme>
    </Root>
  );
};

export default Map;

/**
 * styled-component
 * _______________________________________________________________________________
 */

const Root = styled(MapContainer)`
  font-family: var(--sans-font) !important;
  min-height: 460px;
  & .leaflet-popup-close-button {
    display: none;
  }

  & .leaflet-popup-content {
    margin: 8px;
    direction: rtl;
    text-align: right;
  }

  & .leaflet-popup-close-button {
    display: none;
  }

  & .leaflet-popup-content-wrapper {
    width: max-content;
  }
`;
