import Icon from './Icon.jsx';

export default function MapCanvas() {
  return <div className="map-canvas" role="img" aria-label="Dark mission map grid with a satellite marker and glowing navigation points">
    <div className="map-ruler map-ruler-top" aria-hidden="true"/><div className="map-ruler map-ruler-left" aria-hidden="true"/>
    <span className="map-point map-point-one" aria-hidden="true"/><span className="map-point map-point-two" aria-hidden="true"/><span className="map-ring" aria-hidden="true"/>
    <div className="satellite-marker" aria-hidden="true"><Icon name="Satellite" size={76}/></div>
  </div>;
}
