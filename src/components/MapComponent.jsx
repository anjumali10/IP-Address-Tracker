import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = ({ ipData }) => {
  const defaultPosition = [37.386, -122.0838]; // Default to Google’s HQ (Mountain View, CA)
  const position = ipData?.location ? [ipData.location.lat, ipData.location.lng] : defaultPosition;

  return (
    <MapContainer center={position} zoom={1} className="h-[400px] w-full absolute top-[238px] z-0">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
      <Marker position={position}>
        <Popup>
          {ipData?.location?.city}, {ipData?.location?.country}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
