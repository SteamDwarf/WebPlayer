import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import './App.scss';
import { useDispatch} from 'react-redux';
import { useTypedSelector } from './hooks/useTypedSelector';
import { setAuthStateAction } from './store/actions/UserActions';
import AppRoute from './components/AppRoute';
import Header from './components/Header';

function App() {
  const dispatch = useDispatch();
  const user = useTypedSelector(state => state.user);

  useEffect(() => {
    setAuthState();
  }, []);

  const setAuthState = () => {
    let isAuth = localStorage.getItem('isAuth');
    dispatch(setAuthStateAction(isAuth));
  };

  return (
    <BrowserRouter>
      <Header />
      <AppRoute />
    </BrowserRouter>
  );
}

export default App;
