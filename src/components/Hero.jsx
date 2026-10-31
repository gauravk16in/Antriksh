import { hero, site } from '../data/db.js';
import Icon from './Icon.jsx';
import Stat from './Stat.jsx';

export default function Hero() {
  return <section className="hero" aria-labelledby="hero-title">
    <span className="eyebrow">{hero.eyebrow}</span>
    <h1 id="hero-title">{site.name}</h1>
    <p className="hero-subtitle">{site.subtitle}</p>
    <p className="hero-motto">{site.motto}</p>
    <p className="hero-description">{hero.description}</p>
    <div className="hero-actions"><a className="button button-gold" href="#destinations">Explore club <Icon name="ArrowRight"/></a><a className="button button-outline" href="#join">Join club</a></div>
    <div className="stats" aria-label="Club at a glance">{hero.stats.map(stat => <Stat key={stat.label} {...stat}/>)}</div>
  </section>;
}
