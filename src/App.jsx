import {Outlet} from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react";

function App() {

  return (
      <ChakraProvider resetCSS={false}>
        <Outlet/>
      </ChakraProvider>
  )
}

export default App
