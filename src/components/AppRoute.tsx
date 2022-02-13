import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector'
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';

const AppRoute = () => {
    const user = useTypedSelector(state => state.user);

    return (
        user.isAuth === 'true'
        ?
            <Routes>
                <Route index element={<Home />} />
                <Route path='/login' element={<Login />}/>
            </Routes>
        :
            <Routes>
                <Route index element={<Login />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/register' element={<SignUp />} />
            </Routes>
    )
}

export default AppRoute