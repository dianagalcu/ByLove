import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Inicio from "./Inicio"
import SeccionP from "./SeccionP"
import Contactanos from "./Contactanos"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />
  },
  {
    path: "/productos",
    element: <SeccionP />
  },

  {
    path: "/contactanos",
    element: <Contactanos />
  },

])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App