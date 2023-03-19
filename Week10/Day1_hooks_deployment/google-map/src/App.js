import logo from './logo.svg';
import './App.css';
import GoogleMapReact from 'google-map-react';
const ApiKey = 'AIzaSyAnvjQD1GtUzZDb9RN9BB1MtHnHgo3_Fjo'

function App() {
  console.log(GoogleMapReact)
    const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };
  return (
    <div style={{ height: '100vh', width: '100%' }}> 
    <GoogleMapReact  bootstrapURLKeys={{ key: ApiKey }}
                      defaultCenter={defaultProps.center}
                      defaultZoom={defaultProps.zoom}>

    </GoogleMapReact>
    </div>
  );
}

export default App;
