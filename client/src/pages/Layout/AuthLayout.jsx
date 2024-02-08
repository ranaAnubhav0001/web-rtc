import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <>
        <Navigation/>
        <Outlet/>
    </>
  )
}

export default AuthLayout