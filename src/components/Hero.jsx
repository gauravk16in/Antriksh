import Navbar from './Navbar.jsx';
import MapCanvas from './MapCanvas.jsx';
import HeroRail from './HeroRail.jsx';
import HeroFooter from './HeroFooter.jsx';
export default function Hero() {
  return <section className="hero-scene" id="home" aria-label="Antriksh space club hero"><div className="pixel-frame" aria-hidden="true"/><Navbar/><HeroRail/><MapCanvas/><HeroFooter/><span id="missions" className="anchor-target"/></section>;
}
