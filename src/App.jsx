import './App.css'
import { useRoutes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import routes from "./routes.jsx"
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  
  let element = useRoutes(routes);

  return (
    <>
    <ChakraProvider>
      {element}  
        <Toaster  
          position="bottom-right"
          reverseOrder = {false}
        />
    </ChakraProvider>
    </>
  )
}

export default App
