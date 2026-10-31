import { useState } from 'react';
import { menuItems, site } from '../data/db.js';
import Icon from './Icon.jsx';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="hero-header">
    <button className="menu-button" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(value => !value)}><Icon name={open ? 'X' : 'Menu'} size={25}/></button>
    <a className="brand-badge" href="#home"><small>{site.institute}</small><strong>{site.name}</strong><span>{site.subtitle}</span></a>
    <a className="missions-button" href="#missions">MISSIONS</a>
    {open && <nav className="menu-panel" aria-label="Main navigation">{menuItems.map(item => <a key={item.label} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}</nav>}
  </header>;
}
