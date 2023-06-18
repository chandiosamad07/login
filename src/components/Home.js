import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
function Home() {
    const location = useLocation()
  return (
    <div>
      <h1>Hello {location.state.id} welcome to Home page</h1>
    </div>
  )
}

export default Home
