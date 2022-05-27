import './App.css';
import Header from './components/Header';
import Feature from './components/Feature';
import Sponsored from './components/Sponsor';
import Interface from './components/Interface';
import Download from './components/Download';
import Footer from './components/Footer';
import Aboutus from './components/About';

function App() {
  return (
    <div className="App">
      <Header/>
      <Feature/>
      <Interface/>
      <Sponsored/>
      <Download/>
      <Aboutus/>
      <Footer/>
    </div>
  );
}

export default App;
