import { navigation, site } from '../data/db.js';
import Icon from './Icon.jsx';

export default function Navbar() {
  return <header className="site-header">
    <div className="masthead">
      <a className="observatory-mark" href="#home" aria-label="Antriksh home"><Icon name="Telescope" size={35}/></a>
      <a className="brand" href="#home"><span className="brand-name">✦ {site.name} ✦</span><span className="brand-subtitle">{site.subtitle}</span><span className="brand-institute">{site.institute}</span></a>
      <div className="masthead-motto">{site.motto}</div>
      <a className="info-mark" href="#about" aria-label="About Antriksh"><Icon name="Info" size={29}/></a>
    </div>
    <nav className="nav-bar" aria-label="Main navigation">{navigation.map(({ label, icon, href }, index) => <a key={label} className={`nav-link ${index === 0 ? 'active' : ''} ${label === 'Hackathon' ? 'nav-gold' : ''}`} href={href}><Icon name={icon} size={20}/><span>{label}</span></a>)}</nav>
  </header>;
}
