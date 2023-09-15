import React, { Suspense, lazy } from 'react'
import { DataProvider } from '../provider/DataContext'
import TradeCodesDropdown from './TradeCodesDropdown'

// import LineAndBarChart from './components/LineAndBarChart'
import StockTable from './StockTable'
import Loading from './Loading';

const LazyTableComponent = lazy(() => import('./StockTable'));
const Home = () => {
  
  return (
    <div><DataProvider>

    <div>
    <Suspense fallback={<Loading/>}>
      <TradeCodesDropdown/>
      
      <StockTable/></Suspense>
    </div>
   </DataProvider></div>
  )
}

export default Home