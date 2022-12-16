import './App.css';
import {Routes , Route} from 'react-router-dom'
import Home from './Pages/Home/Home/Home';
import Navbar from './Pages/Navbar/Navbar';
import About from './Pages/About/About/About';
import Menu from './Pages/Menu/Menu';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home />}></Route>
        <Route path='/about' element={ <About />}></Route>
        <Route path='/menu' element={ <Menu />}></Route>
      </Routes>
    </div>
  );
}

export default App;
