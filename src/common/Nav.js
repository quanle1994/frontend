import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
    return (
      <div>
        <Link to="/login">
          <button className="btn">Logout</button>
        </Link>
      </div>
    )
  }