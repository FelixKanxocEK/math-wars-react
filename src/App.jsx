import { useState } from 'react'
import { Route, Routes, useRoutes } from 'react-router-dom'
import GameLayout from './layout/GameLayout'
import PanelLayout from './layout/PanelLayout'
import StartScreen from './layout/StartScreen'
import Inicio from './views/Inicio'
import AgregarProblema from './views/panel/AgregarProblema'
import Panel from './views/panel/Panel'
import PantallaInicio from './views/PantallaInicio'



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
    },
    {
      path: '/',
      element: <StartScreen/>,
      children: [
        {
          path: '/pantallainicio',
          element: <PantallaInicio/>
        }
      ]
      
    }
  ])

  return router
}

export default App
