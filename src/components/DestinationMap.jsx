import { destinations } from '../data/db.js';
import Icon from './Icon.jsx';

export default function DestinationMap() {
  return <section className="destination-map" id="destinations" aria-label="Explore destinations">
    <div className="galaxy" aria-hidden="true"><div className="galaxy-core"/></div>
    <div className="constellation constellation-one" aria-hidden="true"/><div className="constellation constellation-two" aria-hidden="true"/>
    {destinations.map(({ label, icon, href, tone }) => <a className={`destination destination-${label.toLowerCase()} tone-${tone}`} href={href} key={label}><span className="destination-icon"><Icon name={icon} size={33}/></span><span className="destination-label">{label}</span></a>)}
    <div className="destination-caption"><Icon name="ChevronLeft" size={16}/><span>Select a destination</span><Icon name="ChevronRight" size={16}/></div>
  </section>;
}
