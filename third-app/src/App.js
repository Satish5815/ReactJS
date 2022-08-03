import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { LandingPage } from './components/LandingPage';
import { Cards } from './components/Cards';
import { InfoBox } from './components/InfoBox';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingPage />
      <Cards/>
      <InfoBox/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
