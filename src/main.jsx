import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Erro 404 (Página não existe)</h1>,
    children: [
      {
        path: "/",
        element: <h1>Pagina de Inicio</h1>,
      },
      {
        path: "/sobre",
        element: <h1>Pagina de Sobre</h1>,
      },
      {
        path: "/tarefas",
        element: <h1>Pagina de Tarefas</h1>,
      },
      {
        path: "/contato",
        element: <h1>Pagina de Contato</h1>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
