import Icon from './Icon.jsx';
export default function HeroRail() {
  return <aside className="hero-rail" aria-label="Mission shortcuts"><a className="rail-button rail-green" href="#missions" aria-label="Missions"><Icon name="Shield" size={17}/></a><a className="rail-button rail-gold" href="#teammates" aria-label="Find teammates"><Icon name="Compass" size={17}/></a></aside>;
}
