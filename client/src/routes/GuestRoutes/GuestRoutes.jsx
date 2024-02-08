import { Outlet, Navigate } from 'react-router-dom'

const GuestRoutes = () => {
    let auth = false
    return (
        auth ? <Navigate to='/rooms' /> : <Outlet />
    )
}

export default GuestRoutes