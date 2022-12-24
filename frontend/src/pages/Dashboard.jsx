import React from 'react'
import { useEffect } from 'react'
import {useNavigate} from'react-router-dom'
import {useSelector} from 'react-redux'

function Dashboard() {

  const navigate = useNavigate()

  const{user} = useSelector((state) => state.auth)
  console.log(user,"idhar")
  useEffect(()=>{
      if(!user){
        navigate('/login')
      }
  },[user,navigate])

  return (
    <>Welcome {user && user.name}</>
  )
}

export default Dashboard