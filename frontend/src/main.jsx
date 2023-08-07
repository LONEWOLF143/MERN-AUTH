import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux"
import store from "./store"
import {
  createBrowserRouter,
   createRoutesFromElements,
    Route,
     RouterProvider
    } from "react-router-dom"
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import HomeScreen from './components/screens/HomeScreen.jsx';
import LoginScreen from './components/screens/LoginScreen.jsx';
import RegisterScreen from './components/screens/RegisterScreen.jsx';
import ProfileScreen from './components/screens/ProfileScreen'
import PrivateRoute from './components/PrivateRoute'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />}/>
      <Route  path="/login" element={<LoginScreen />}/>
      <Route  path="/register" element={<RegisterScreen />}/>
      <Route  element={<PrivateRoute />}>
      <Route  path="/profile" element={<ProfileScreen />}/>
      </Route>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
  </Provider>
)
