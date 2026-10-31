import { markers } from '../data/db.js';
export default function TrackerPanel({ selected, onClose }) {
  const marker = markers.find(item => item.id === selected);
  if (!marker) return null;
  return <aside className="tracker-panel" aria-label={`${marker.title} details`}><div className="tracker-panel-heading"><span>FIELD REPORT / {marker.category.toUpperCase()}</span><button type="button" onClick={onClose} aria-label="Close details">×</button></div><div className="panel-image" aria-hidden="true"><span>☾</span><span>✦</span></div><div className="panel-status">{marker.status}</div><h2>{marker.title}</h2><p>{marker.description}</p><dl><div><dt>DATE</dt><dd>{marker.date}</dd></div><div><dt>LOCATION</dt><dd>{marker.location}</dd></div></dl><button className="panel-return" type="button" onClick={onClose}>← BACK TO MAP</button></aside>;
}
