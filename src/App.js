import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing';
import SearchPokemon from './components/SearchPokemon';
import Cardpage from './components/Cardpage';
import Navbar from './components/Navbar';
import LikedAndUnliked from './components/LikedAndUnliked';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Cardpage/>} />
          <Route path='/list' element={<Home/>} />
          {/* <Route path='/list' element={<Landing/>} /> */}
          <Route path='/liked' element={<LikedAndUnliked/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
