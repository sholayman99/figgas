import './App.css';
import {Routes , Route} from 'react-router-dom'
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Navbar from './Pages/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home />}></Route>
        <Route path='/about' element={ <About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
