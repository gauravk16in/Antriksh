# Antriksh Tracker

A React and JavaScript prototype for the Antriksh club activity map. It follows the tracker-style layout requested for the Events experience while using original Antriksh branding and placeholder club content.

## Run

```bash
npm install
npm run dev
```

Use `npm run build` to check the production bundle.

## Structure

- `src/components/TrackerShell.jsx`: frame, filters, menu, intro, ticker, and sound preference.
- `src/components/TrackerMap.jsx`: map presentation, marker controls, and zoom controls.
- `src/components/TrackerPanel.jsx`: selected marker details.
- `src/components/Astronaut.jsx`: original club mascot artwork.
- `src/data/db.js`: placeholder categories, markers, and ticker copy.
- `src/index.css`: theme and responsive layout.

The map is currently an illustrative preview. Live Google Maps and event fetching can be wired in when API credentials and a data source are available. No unconfirmed date is presented as final.
