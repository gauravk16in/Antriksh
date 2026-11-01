// Placeholder presentation data. Replace this collection with events fetched from the API later.
export const categories = [
  { id: 'events', label: 'Events', symbol: '✦', color: 'blue', blurb: 'Talks, stargazing nights and hackathons by Antriksh.' },
  { id: 'projects', label: 'Projects', symbol: '✣', color: 'green', blurb: 'Explore what our club is building.' },
  { id: 'crew', label: 'Crew', symbol: '✧', color: 'red', blurb: 'Meet the people behind Antriksh.' },
  { id: 'gallery', label: 'Gallery', symbol: '▣', color: 'yellow', blurb: 'Photos and moments from our club events.' },
];
export const markers = [
  { id: 'moonwatch', category: 'events', x: 53, y: 32, title: 'Moonwatch', location: 'RNSIT campus', description: 'A night of lunar observing.', status: 'Planned session', date: 'Date to be announced' },
  { id: 'space-builds', category: 'projects', x: 63, y: 57, title: 'Space Builds', location: 'RNSIT campus', description: 'Explore what our club is building.', status: 'In progress', date: 'Updates coming soon' },
  { id: 'meet-crew', category: 'crew', x: 39, y: 48, title: 'Meet the Crew', location: 'RNSIT campus', description: 'Meet the people behind Antriksh.', status: 'Club crew', date: 'Profiles coming soon' },
  { id: 'gallery-wall', category: 'gallery', x: 66, y: 36, title: 'Club Gallery', location: 'RNSIT campus', description: 'Photos and moments from our club events.', status: 'Photos soon', date: 'Updated after every event' },
];
export const tickerMessages = ['EXPLORE THE ANTRIKSH MAP', 'SELECT A MARKER TO LEARN MORE', 'STUDENTS ✦ SPACE ✦ BIGGER TOMORROWS'];