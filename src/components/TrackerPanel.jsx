import { markers, categories } from '../data/db.js';
import PixelIcon from './PixelIcon.jsx';
export default function TrackerPanel({ selected, activeCategory, onSelect, onBack, onClose }) {
  const marker = markers.find(item => item.id === selected);
  const category = categories.find(item => item.id === (marker ? marker.category : activeCategory));
  if (!category) return null;
  const heading = <div className="tracker-panel-heading"><span className={`panel-tag tag-${category.id}`}><PixelIcon name={category.id} size={18}/>{category.label.toUpperCase()}</span><button type="button" onClick={onClose} aria-label="Close details">×</button></div>;
  if (!marker) {
    const items = markers.filter(item => item.category === category.id);
    return <aside className="tracker-panel" aria-label={`${category.label} list`}>{heading}<h2>{category.label}</h2><p>{category.blurb}</p><div className="panel-list">{items.map(item => <button key={item.id} type="button" className="panel-item" onClick={() => onSelect(item.id)}><strong>{item.title}</strong><small>{item.status} · {item.date}</small></button>)}</div><button className="panel-return" type="button" onClick={onClose}>← BACK TO MAP</button></aside>;
  }
  return <aside className="tracker-panel" aria-label={`${marker.title} details`}>{heading}<div className="panel-image" aria-hidden="true"><span>☾</span><span>✦</span></div><div className="panel-status">{marker.status}</div><h2>{marker.title}</h2><p>{marker.description}</p><dl><div><dt>DATE</dt><dd>{marker.date}</dd></div><div><dt>LOCATION</dt><dd>{marker.location}</dd></div></dl><button className="panel-return" type="button" onClick={onBack}>← BACK TO {category.label.toUpperCase()}</button></aside>;
}