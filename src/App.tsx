
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Featured from './components/Featured';
import Footer from './components/Footer';

function App() {
  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Hero />
        <Body />
        <Featured />
        <Footer />
      </Router >
    </div>
  )


}

export default App
