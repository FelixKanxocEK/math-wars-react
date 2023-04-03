import { useState } from 'react'
import { Route, Routes, useRoutes } from 'react-router-dom'
import GameLayout from './layout/GameLayout'
import PanelLayout from './layout/PanelLayout'
import StartScreen from './layout/StartScreen'
import Inicio from './views/Inicio'
import AgregarProblema from './views/panel/AgregarProblema'
import Panel from './views/panel/Panel'
import PantallaInicio2 from './views/PantallaInicio'
import Inicio2 from './views/inicio2'



function App() {

  let router = useRoutes([
    {
      path: '/',
      element: <GameLayout />,
      children: [
        {
          path: '/',
          element: <Inicio />
        },
        {
          path: '/inicio2',
          element: <Inicio2 />
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
          element: <PantallaInicio2 />
        }
      ]
      
    }
  ])

  return router
}

export default App
