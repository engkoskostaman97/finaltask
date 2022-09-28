
import './App.css';
import { Route, Routes } from "react-router-dom";

import Landing from './pages/Landing';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Mycollection from './pages/Mycollection';
import Addliterature from './pages/Addliterature';

function App() {
  return (

    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/home' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/mycollection' element={<Mycollection />} />
      <Route path='/addliterature' element={<Addliterature />} />
    </Routes>

  );
}

export default App;
