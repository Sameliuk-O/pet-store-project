import React, { useEffect, useRef, useState } from 'react';

import { GoogleMap, Marker } from '@react-google-maps/api';

import { defaultOptions } from 'utils/defaultOptionsMaps';

import HomeSvg from './../../svg/home.svg';
import CurrentMarkerMan from './../../svg/man_marker.svg';

const containerStyle = {
  height: '800px',
  width: '100%',
};

export const MODES = {
  MOVE: 0,
  SET_MARKER: 1,
};

const Maps = ({
  center,
  mode,
  markers,
  onMarkerAdd,
  currentLocation,
}: {
  center: { lat: number; lng: number };
  currentLocation: { lat: number; lng: number };
  markers: { lat: number; lng: number }[];
  mode: number;
  onMarkerAdd: (coordinates: { lat: number; lng: number }) => void;
}) => {
  const mapRef = useRef<google.maps.Map | null>(null);
  const directionsRendererRef = useRef<google.maps.DirectionsRenderer | null>(null);
  const [locationToDrive, setLocationToDrive] = useState<{ lat: number; lng: number }>(
    currentLocation
  );
  const [distance, setDistance] = useState<number | null>();

  const onLoad = (map: google.maps.Map) => {
    mapRef.current = map;
  };

  const onUnmount = () => {
    mapRef.current = null;
  };

  const onClick = (loc: google.maps.MouseEvent) => {
    if (mode === MODES.SET_MARKER) {
      const lat: number | null = loc.latLng?.lat() || null;
      const lng: number | null = loc.latLng?.lng() || null;
      if (lat !== null && lng !== null) {
        onMarkerAdd({ lat, lng });
      }
    }
  };

  const calculateDistance = ({ lat, lng }: { lat: number; lng: number }) => {
    if (window.google.maps.geometry) {
      const from = new window.google.maps.LatLng(currentLocation.lat, currentLocation.lng);
      const to = new window.google.maps.LatLng(lat, lng);
      return window.google.maps.geometry.spherical.computeDistanceBetween(from, to) / 1000;
    }
  };

  useEffect(() => {
    if (directionsRendererRef.current) {
      directionsRendererRef.current.setMap(null);
    }

    const directionsService = new window.google.maps.DirectionsService();
    const directionsRenderer = new window.google.maps.DirectionsRenderer();

    directionsRenderer.setMap(mapRef.current);
    directionsRendererRef.current = directionsRenderer;

    const request = {
      destination: locationToDrive,
      origin: currentLocation,
      travelMode: window.google.maps.TravelMode.DRIVING,
    };
    directionsService.route(request, (result, status) => {
      if (status === window.google.maps.DirectionsStatus.OK) {
        directionsRenderer.setDirections(result);
      }
    });

    calculateDistance(locationToDrive);
    const distances = calculateDistance(locationToDrive);
    setDistance(distances);
  }, [locationToDrive]);

  return (
    <div className="mt-5 ">
      <GoogleMap
        center={center}
        mapContainerStyle={containerStyle}
        options={defaultOptions}
        zoom={14}
        onClick={onClick}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {[currentLocation, ...markers].map((el) => (
          <div key={Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1}>
            {center !== currentLocation ? (
              <Marker label={'text'} position={center} onClick={() => setLocationToDrive(center)} />
            ) : (
              <></>
            )}
            <Marker
              icon={el === currentLocation ? CurrentMarkerMan : HomeSvg}
              position={el}
              onClick={() => setLocationToDrive(el)}
            />
          </div>
        ))}
      </GoogleMap>
      <p>{distance?.toFixed(1)}</p>
    </div>
  );
};

export default Maps;
