import { useEffect, useState } from 'react';

import { Marker } from '@react-google-maps/api';

import CurrentMarkerMan from './../../svg/man_marker.svg';
// import { ILocation } from '../../interface';
const CurrentMarker = ({ center }: { center: google.maps.LatLngLiteral }) => {
  console.log('center', center);
  const [position, setPosition] = useState(center);
  useEffect(() => {
    console.log('cdjncnjdncj');
    setPosition(center);
  }, [center]);

  console.log('position', position);
  return <Marker icon={CurrentMarkerMan} position={position} />;
};

export default CurrentMarker;
