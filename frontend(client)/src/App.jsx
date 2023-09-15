import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StockTable from './components/StockTable'

import { Outlet } from 'react-router-dom'

function App() {
 

  return (

   < >
   <Outlet></Outlet>
   
   </>
  )
}

export default App
