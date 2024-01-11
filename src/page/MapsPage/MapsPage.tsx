import { useCallback, useEffect, useState } from 'react';

import { Libraries, useJsApiLoader } from '@react-google-maps/api';

import { Autocomplete } from 'components/Autocomplete';
import { MODES } from 'components/Maps/Maps';

import { Maps } from '../../components/Maps';
import { getBrowserLocation } from '../../utils/geo';

const libraries: Libraries | undefined = ['places'];
export const MapsPage: React.FC = () => {
  const API_KEY = process.env.REACT_APP_API_MAPS;
  const defaultCenter = {
    lat: 49.444433,
    lng: 32.059767,
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: `${API_KEY}`,
    id: 'google-map-script-1',
    libraries,
  });
  const [center, setCenter] = useState<{ lat: number; lng: number }>(defaultCenter);
  const [mode, setMode] = useState(MODES.MOVE);
  const [markers, setMarkers] = useState<{ lat: number; lng: number }[]>([]);
  const onPlaceSelect = useCallback((coordinates: { lat: number; lng: number }) => {
    setCenter(coordinates);
  }, []);
  const [yourLocation, setYourLocation] = useState<{ lat: number; lng: number }>(defaultCenter);

  const toggleMode = useCallback(() => {
    switch (mode) {
      case MODES.MOVE:
        setMode(MODES.SET_MARKER);
        break;
      case MODES.SET_MARKER:
        setMode(MODES.MOVE);
        break;
      default:
        setMode(MODES.MOVE);
    }
  }, [mode]);

  const onMarkerAdd = useCallback((coordinates: { lat: number; lng: number }) => {
    setMarkers((prevMarkers) => [...prevMarkers, coordinates]);
  }, []);

  const clean = () => {
    setMarkers([]);
    setCenter(yourLocation);
  };
  const yourLocationInfo = () => {
    getBrowserLocation()
      .then((curLoc) => {
        setYourLocation(curLoc);
        setCenter(curLoc);
      })
      .catch((defLoc) => {
        setYourLocation(defLoc);
        setCenter(defLoc);
      });
  };

  useEffect(() => {
    yourLocationInfo();
  }, []);

  return (
    <div className="container mx-auto">
      {isLoaded && center ? (
        <div className="mx-auto">
          <Maps
            center={center}
            currentLocation={yourLocation}
            markers={markers}
            mode={mode}
            onMarkerAdd={onMarkerAdd}
          />
          <div>
            <Autocomplete isLoaded={isLoaded} onSelect={onPlaceSelect} />
            <button className="max-h-max bg-sky-400 px-10 py-5 text-stone-50" onClick={toggleMode}>
              Set markers
            </button>
            <button className="ml-10 max-h-max bg-sky-400 px-10 py-5 text-stone-50" onClick={clean}>
              Clean
            </button>
            <button
              className="ml-10 max-h-max bg-sky-400 px-10 py-5 text-stone-50"
              onClick={yourLocationInfo}
            >
              Your Location
            </button>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
