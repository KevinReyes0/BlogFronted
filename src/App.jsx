import './App.css'
import { useRoutes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import routes from "./routes.jsx"
import { Provider } from "./components/ui/provider"

function App() {
  
  let element = useRoutes(routes);

  return (
    <>
      <Provider>
        {element}  
        <Toaster  
          position="bottonm-right"
          reverseOrder = {false}
        />  
      </Provider>
    </>
  )
}

export default App
