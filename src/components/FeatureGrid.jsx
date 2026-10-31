import { featureCards } from '../data/db.js';
import FeatureCard from './FeatureCard.jsx';
export default function FeatureGrid() {
  return <section className="feature-grid" id="join" aria-label="Explore Antriksh">{featureCards.map(card => <FeatureCard key={card.title} {...card}/>)}</section>;
}
