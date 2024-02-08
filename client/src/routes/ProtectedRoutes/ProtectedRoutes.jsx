import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoutes() {
    let auth = false
    const user = {
        activated: false,
    }
    return (

        !auth ? (
            <Navigate to='/' />
        ) : (
            auth && user.activated ? <Outlet /> : <Navigate to='/activate' />
        )
    )
}

export default ProtectedRoutes