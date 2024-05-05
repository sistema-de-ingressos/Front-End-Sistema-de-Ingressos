import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Container} from "./components/Container/Container.jsx";
import {PaginaPrincipal} from "./pages/PaginaPrincipal/PaginaPrincipal.jsx";
import {Eventos} from "./pages/Eventos/Eventos.jsx";
import {MeusIngressos} from "./pages/MeusIngressos/MeusIngressos.jsx";
import {ComprarIngresso} from "./pages/ComprarIngresso/ComprarIngresso.jsx";
import {Login} from "./pages/Login/Login.jsx";
import {Cadastro} from "./pages/Cadastro/Cadastro.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "",
                element: <Container/>,
                children: [
                    {
                        path:"",
                        element: <PaginaPrincipal/>,
                    },
                    {
                        path:"eventos",
                        element: <Eventos/>,
                    },
                    {
                        path:"meus-ingressos",
                        element: <MeusIngressos/>,
                    },
                    {
                        path:"comprar-ingresso/:idEvento",
                        element: <ComprarIngresso/>
                    }
                ]
            },
            {
                path: "login",
                element: <Login/>,
            },
            {
                path: "cadastro",
                element: <Cadastro/>
            },
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
