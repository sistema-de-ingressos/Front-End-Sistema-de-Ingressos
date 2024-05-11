import {Outlet} from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

function App() {
    const client = new QueryClient()

    return (
        <QueryClientProvider client={client} >
            <ChakraProvider resetCSS={false}>
                <Outlet/>
            </ChakraProvider>
        </QueryClientProvider>
    )
}

export default App
