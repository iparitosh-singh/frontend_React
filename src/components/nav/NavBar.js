import React from 'react'
import {
    Route,
    NavLink
} from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <NavLink to = "/signIn">Login</NavLink>
            <NavLink to = "/signUp">Register</NavLink>
        </div>
    )
}

export default Navbar
