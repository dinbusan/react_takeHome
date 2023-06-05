import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Blog from '../pages/Blog'

const Body = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  )
}

export default Body