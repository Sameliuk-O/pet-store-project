interface ILocation {
  lat: number;
  lng: number;
}

const defaultCenter = {
  lat: 49.444433,
  lng: 32.059767,
};

export const getBrowserLocation = (): Promise<ILocation> => {
  return new Promise((resolve, reject) => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude: lat, longitude: lng } = pos.coords;
          resolve({ lat, lng });
        },
        () => {
          reject(defaultCenter);
        }
      );
    } else {
      reject(defaultCenter);
    }
  });
};
