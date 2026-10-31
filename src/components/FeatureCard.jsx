import Icon from './Icon.jsx';
export default function FeatureCard({ title, icon, description, href, tone, art }) {
  return <a className={`feature-card tone-${tone}`} id={title.toLowerCase()} href={href}><div className={`feature-art art-${art}`} aria-hidden="true"><Icon name={icon} size={58}/></div><div className="feature-content"><h3><Icon name={icon} size={21}/>{title}</h3><p>{description}</p><Icon className="feature-arrow" name="ArrowRight" size={21}/></div></a>;
}
