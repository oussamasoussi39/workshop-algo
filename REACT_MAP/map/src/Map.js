import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

function MapComponent({ location }) {
  const center = { lat: location.latitude, lng: location.longitude };
  const containerStyle = { width: '100%', height: '400px' };
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'YOUR_API_KEY_HERE'
  });

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
      <Marker position={center} />
    </GoogleMap>
  ) : <div>Loading Map...</div>;
}

export default MapComponent;