import { Menu, X, Volume2, VolumeX, Shield, Compass, Satellite, Search, ArrowRight } from 'lucide-react';
const icons = { Menu, X, Volume2, VolumeX, Shield, Compass, Satellite, Search, ArrowRight };
export default function Icon({ name, size = 20, ...props }) {
  const Component = icons[name];
  return Component ? <Component size={size} strokeWidth={2} aria-hidden="true" {...props} /> : null;
}
