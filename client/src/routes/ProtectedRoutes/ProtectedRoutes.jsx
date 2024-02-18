import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoutes() {
    const { isAuth, user } = useSelector((state) => state.authSlice);

    return (

        !isAuth ? (
            <Navigate to='/' />
        ) : (
            isAuth && user.activated ? <Outlet /> : <Navigate to='/activate' />
        )
    )
}

export default ProtectedRoutes