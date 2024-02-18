import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';


function SemiPrivateRoutes() {
    const { isAuth, user } = useSelector((state) => state.authSlice);
    return (
        !isAuth ? (
            <Navigate to='/' />
        ) : (
            isAuth && !user.activated ? <Outlet /> : <Navigate to='/rooms' />
        )
    )
}

export default SemiPrivateRoutes