import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
// import Index from './components/Index'

// import { createBrowserRouter, RouterProvider} from "react-router-dom";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Index/>
    

//   },
// ]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
</BrowserRouter>

)
 