import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function SemiPrivateRoutes() {
    let auth = false
    const user = {
        activated: false,
    }
    return (
        !auth ? (
            <Navigate to='/' />
        ) : (
            auth && !user.activated ? <Outlet /> : <Navigate to='/rooms' />
        )
    )
}

export default SemiPrivateRoutes