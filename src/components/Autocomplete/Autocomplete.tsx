import React, { useEffect } from 'react';

import useOnclickOutside from 'react-cool-onclickoutside';
import usePlacesAutocomplete, { getGeocode, getLatLng, Suggestion } from 'use-places-autocomplete';

const Autocomplete = ({
  isLoaded,
  onSelect,
}: {
  isLoaded: boolean;
  onSelect: (container: { lat: number; lng: number }) => void;
}) => {
  const {
    ready,
    value,
    init,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    debounce: 300,
    initOnMount: false,
  });

  const ref = useOnclickOutside(() => {
    clearSuggestions();
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSelect = (suggestion: Suggestion) => () => {
    setValue(suggestion.description, false);
    clearSuggestions();

    getGeocode({ address: suggestion.description }).then((results) => {
      const { lat, lng } = getLatLng(results[0]);
      onSelect({ lat, lng });
    });
  };

  const renderSuggestions = () =>
    data.map((suggestion: Suggestion) => {
      const {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        place_id,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li key={place_id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  useEffect(() => {
    if (isLoaded) {
      init();
    }
  }, [isLoaded, init]);

  return (
    <div className="mx-auto w-[100%]" ref={ref}>
      <input
        className="w-[100%] rounded-lg border-2 border-blue-600 bg-gray-200 py-7 pl-10 pr-32"
        disabled={!ready}
        placeholder="Where are you going?"
        type="text"
        value={value}
        onChange={handleInput}
      />
      {status === 'OK' && (
        <ul className=" z-20 rounded-b-lg bg-gray-200 py-10">{renderSuggestions()}</ul>
      )}
    </div>
  );
};

export default Autocomplete;
