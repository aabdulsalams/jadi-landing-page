import './App.css';
import Header from './components/Header';
import Feature from './components/Feature';
import Sponsored from './components/Sponsor';
import Interface from './components/Interface';
import Download from './components/Download';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Feature/>
      <Interface/>
      <Sponsored/>
      <Download/>
      <Footer/>
    </div>
  );
}

export default App;
