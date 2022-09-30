import React, { useContext, useEffect, useState } from "react";
import { Route, Routes, useNavigate, BrowserRouter } from "react-router-dom";
import './App.css';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Mycollection from './pages/Mycollection';
import Addliterature from './pages/Addliterature';
import Search from './pages/Search';
import Detail from './pages/Detail';
import NotFound from './component/NotFound'
import Admin from './pages/Admin';
import { UserContext } from './context/userContext';
import { API, setAuthToken } from './config/api';

// init token on axios every time the app is refreshed
if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [state, dispatch] = useContext(UserContext);
  // console.clear();
  console.log("ini state", state)

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    console.log(state.isLogin);

    // Redirect Auth
    // if (state.isLogin === false) {
    //   navigate('/auth');
    // } else {
    //   if (state.user.status === 'admin') {
    //     navigate('/homeadmin');
    //   } else if (state.user.status === '') {
    //     navigate('/');
    //   }
    // }
  }, [state]);
 // console.log("bacaaa",isLogin)
  const checkUser = async () => {
    try {
      const response = await API.get('/check-auth');

      // If the token incorrect
      if (response.status === 404) {
        return dispatch({
          type: 'AUTH_ERROR',
        });
      }

      // Get user data
      let payload = response.data.data;

      console.log("ini payload", payload);
      // Get token from local storage
      payload.token = localStorage.token;

      // Send data to useContext
      dispatch({
        type: 'USER_SUCCESS',
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.token) {
      checkUser();
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/mycollection' element={<Mycollection />} />
        <Route path='/addliterature' element={<Addliterature />} />
        <Route path='/search' element={<Search />} />
        <Route path='/detail' element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
