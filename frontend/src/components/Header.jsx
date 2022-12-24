import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
import {logout,reset} from '../features/auth/authSlice'

function Header() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector( (state) => state.auth )

    const onLogout = () =>{
        dispatch(logout())
        dispatch(reset())
        navigate('/login')
    }

  return (
    <header className='header'>
        <div className="logo">
            <Link to= '/login'>GoalSetter</Link>
        </div>
        <ul>
            {user ? 
            <>
            <li>
                <button  onClick={onLogout}>
                <Link to={'/login'}>
                    LOGOUT
                </Link>
                </button>
                
            </li>
           
            </> 
            : 
            <>
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
            </>}
            
        
        </ul>
        </header>
  )
}

export default Header