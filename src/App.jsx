import Navbar from "./Component/Navbar"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Component/Home"
import AboutMe from "./Component/AboutMe"
import Skills from "./Component/Skills"
import Project from "./Component/Project"



const App = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <>
        <Navbar /> <Home />
      </>
    },
    {
      path: "/about",
      element: <>
        <Navbar /> <AboutMe />
      </>
    },
    {
      path: "/skills",
      element: <>
        <Navbar /> <Skills />
      </>
    },
    {
      path: "/projects",
      element: <>
        <Navbar /> <Project />
      </>
    }
  ])
  return (
    <div className='bg-[#121212] w-screen h-screen text-white'>

      <RouterProvider router={route} />

    </div>
  )
}

export default App