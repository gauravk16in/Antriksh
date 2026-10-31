import Navbar from './components/Navbar.jsx';
import ScreenFrame from './components/ScreenFrame.jsx';
import Hero from './components/Hero.jsx';
import DestinationMap from './components/DestinationMap.jsx';
export default function App() {
  return <div className="app-shell" id="home"><Navbar /><main className="page-main"><ScreenFrame><div className="main-grid"><Hero /><DestinationMap /></div></ScreenFrame></main></div>;
}
