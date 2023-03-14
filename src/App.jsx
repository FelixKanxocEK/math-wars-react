import { useState } from 'react'
import { Route, Routes, useRoutes } from 'react-router-dom'
import GameLayout from './layout/GameLayout'
import PanelLayout from './layout/PanelLayout'
import Inicio from './views/Inicio'
import AgregarProblema from './views/panel/AgregarProblema'
import Panel from './views/panel/Panel'

function App() {

  let router = useRoutes([
    {
      path: '/',
      element: <GameLayout />,
      children: [
        {
          path: '/',
          element: <Inicio />
        }
      ]
    },
    {
      path: '/panel',
      element: <PanelLayout />,
      children: [
        {
          path: '/panel',
          element: <Panel />
        },
        {
          path: 'agregar-problema',
          element: <AgregarProblema />
        }
      ]
    }
  ])

  return router
}

export default App
