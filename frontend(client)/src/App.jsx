import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StockTable from './components/StockTable'
import TradeCodesDropdown from './components/TradeCodesDropdown'
import { DataProvider } from './provider/DataContext'

function App() {
 

  return (

   <>
   <DataProvider>

   <TradeCodesDropdown/>
   <StockTable/>
   </DataProvider>
   </>
  )
}

export default App
