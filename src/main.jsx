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
                        element: <PaginaPrincipal title={"Página Principal"}/>,
                    },
                    {
                        path:"eventos",
                        element: <Eventos title={"Eventos"}/>,
                    },
                    {
                        path:"meus-ingressos",
                        element: <MeusIngressos title={"Meus Ingressos"}/>,
                    },
                    {
                        path:"comprar-ingresso/:idEvento",
                        element: <ComprarIngresso title={"Comprar Ingresso"}/>
                    }
                ]
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
