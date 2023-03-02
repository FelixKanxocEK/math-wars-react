import React from 'react'
import { Outlet } from 'react-router-dom'

const GameLayout = () => {
  return (
    <>
        <main>
            <Outlet />
        </main>
    </>
  )
}

export default GameLayout