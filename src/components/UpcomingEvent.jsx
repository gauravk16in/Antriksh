import { upcomingEvent } from '../data/db.js';
import Icon from './Icon.jsx';

export default function UpcomingEvent() {
  const { title, status, description, date, location, audience } = upcomingEvent;
  return <aside className="upcoming-event" id="events" aria-labelledby="upcoming-title">
    <div className="panel-heading"><h2 id="upcoming-title">Upcoming event</h2><Icon name="ArrowRight" size={23}/></div>
    <div className="event-art" aria-hidden="true"><div className="event-moon"/><Icon name="Telescope" size={61}/><span>{status}</span></div>
    <div className="event-body"><h3>{title}</h3><p>{description}</p><ul><li><Icon name="CalendarDays" size={18}/>{date}</li><li><Icon name="MapPin" size={18}/>{location}</li><li><Icon name="UsersRound" size={18}/>{audience}</li></ul><button className="button button-gold event-notify" type="button" disabled title="Event notifications are coming soon">Notify me <Icon name="ArrowRight" size={19}/></button><a className="event-all" href="#events">View all events <Icon name="ArrowRight" size={18}/></a></div>
  </aside>;
}
