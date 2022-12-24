import React from 'react'
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
        <div className="logo">
            <Link to= '/'>GoalSetter</Link>
        </div>
        <ul>
            <li>
                <Link to={'/login'}>
                    LOGIN
                </Link>
            </li>
            <li>
                <Link to={'/register'}>
                    REGISTER
                </Link>
            </li>
        </ul>
        </header>
  )
}

export default Header