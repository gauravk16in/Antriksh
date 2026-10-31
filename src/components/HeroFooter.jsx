import { useState } from 'react';
import { site } from '../data/db.js';
import Icon from './Icon.jsx';
export default function HeroFooter() {
  const [muted, setMuted] = useState(true);
  return <footer className="hero-footer" id="teammates">
    <div className="rnsit-badge"><span className="rnsit-emblem">✦</span><span><strong>RNSIT</strong><small>Bengaluru</small></span></div>
    <a className="teammates-link" href="mailto:?subject=Antriksh%20teammates"><Icon name="Search" size={18}/>{site.searchPrompt}<Icon name="ArrowRight" size={18}/></a>
    <button className="sound-button" type="button" aria-label={muted ? 'Unmute sound' : 'Mute sound'} aria-pressed={!muted} onClick={() => setMuted(value => !value)}><Icon name={muted ? 'VolumeX' : 'Volume2'} size={21}/></button>
  </footer>;
}
