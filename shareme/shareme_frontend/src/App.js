import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './components/Login'
import Home from './containers/Home'


export default function App() {
  return (
   <Routes>
      <Route path='login' element={<Login />} />
      <Route path='/*' element={<Home />} />
   </Routes>
  )
}
