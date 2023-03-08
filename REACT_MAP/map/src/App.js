import React from 'react';
import MapComponent from './Map';

function App() {
  return (
    <div className="App">
     <MapComponent location={{ latitude: 36.4534, longitude: 10.7331 }} />
    </div>
  );
}

export default App;

