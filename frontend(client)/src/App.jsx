import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StockTable from './components/StockTable'
import TradeCodesDropdown from './components/TradeCodesDropdown'
import { DataProvider } from './provider/DataContext'
import LineAndBarChart from './components/LineAndBarChart'

function App() {
 

  return (

   < >
   <DataProvider>

    <div>
      <TradeCodesDropdown/>
      {/* <LineAndBarChart/> */}
      <StockTable/>
    </div>
   </DataProvider>
   </>
  )
}

export default App
