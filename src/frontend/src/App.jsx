import { Box } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"

import Home from "./pages/home"
import Login from "./pages/login"
import Signup from "./pages/signup"

function App() {
  return (
    <Box minH={"100vh"} bg={"#8e9b90"} color={"#F4E9CD"}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </Box>
  )
}

export default App
