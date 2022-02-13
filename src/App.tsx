import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import './App.scss';
import { useDispatch} from 'react-redux';
import { useTypedSelector } from './hooks/useTypedSelector';
import { setAuthStateAction } from './store/actions/UserActions';

function App() {
  const dispatch = useDispatch();
  const user = useTypedSelector(state => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    setAuthState();
  }, []);

  const setAuthState = () => {
    let isAuth = localStorage.getItem('isAuth');
    dispatch(setAuthStateAction(isAuth));

/*     if(isAuth === 'true') {
      navigate('/');
    } else {
      navigate('/login');
    } */
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
