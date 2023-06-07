import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

const RootLayout = () => {
    return (
        <div className="root-layout">
            <header>
                <nav className="navbar">
                    <img src="" alt="logo" />
                    <div className="nav-links">
                        <NavLink className="nav-link" to="/">
                            Hem
                        </NavLink>
                        <NavLink className="nav-link" to="about">
                            om oss
                        </NavLink>
                    </div>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout
