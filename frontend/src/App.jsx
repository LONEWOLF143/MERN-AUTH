import { Container } from "react-bootstrap"
import { Outlet } from "react-router-dom"
import Header from "./components/Header"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {


  return (
    <>
      <Header/>
      <ToastContainer />
      <Container class="my-2">
      <Outlet />
      </Container>
       
    </>
  )
}

export default App
