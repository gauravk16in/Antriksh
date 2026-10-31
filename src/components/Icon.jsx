import { House, CalendarDays, Satellite, UsersRound, Rocket, Trophy, Telescope, Info, ArrowRight, Sparkles, MapPin, Bell, ChevronLeft, ChevronRight, Orbit, Star } from 'lucide-react';
const icons = { House, CalendarDays, Satellite, UsersRound, Rocket, Trophy, Telescope, Info, ArrowRight, Sparkles, MapPin, Bell, ChevronLeft, ChevronRight, Orbit, Star };
export default function Icon({ name, size = 20, ...props }) {
  const Component = icons[name];
  return Component ? <Component size={size} strokeWidth={2.3} aria-hidden="true" {...props} /> : null;
}
