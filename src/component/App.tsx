import React from 'react'
import cls from './App.module.scss'
import { Link, Outlet } from 'react-router-dom'
export const App = () => {
    return (
        <div className={cls.rt}>App
            <Link to='/about'>About</Link>
            <Link to='/shop'>shop</Link>
            <Outlet />
        </div>
    )
}

