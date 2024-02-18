import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom'

const GuestRoutes = () => {
    const { isAuth } = useSelector((state) => state.authSlice);
    
    return (
        isAuth ? <Navigate to='/rooms' /> : <Outlet />
    )
}

export default GuestRoutes