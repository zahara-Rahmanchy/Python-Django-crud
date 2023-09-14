import axios from 'axios'
import React, { useContext, useEffect, useMemo, useState } from 'react'
import Loading from './Loading'
import { DataContext } from '../provider/DataContext';

const StockTable = () => {
    const {data,isLoading} = useContext(DataContext);
    if (isLoading) {
        return <Loading />;
      }
    
      if (!data || data.length === 0) {
        return <div>No data available.</div>;
      }


  return (
    <div>
    <div className="bg-[#FAFAFB] h-full mt-10 max-w-7xl mx-auto">
        
        <div className="overflow-x-auto ">
                
                <table className="table table-sm rounded-lg">
                {isLoading && <Loading/>}
                    <thead className='md:text-lg text-lg bg-slate-700 text-green-50 rounded-lg'>
                    <tr>
                        <th></th> 
                        <th>Date</th> 
                        <th>Trade_code</th> 
                        <th>High</th> 
                        <th>Low</th> 
                        <th>Open</th> 
                        <th>Close</th>
                        <th>Volume</th>
                        <th>Update</th>
                    </tr>
                    </thead> 
                    <tbody>
                    {data.map((stock, index) => (
                    <tr key={index}
                    className="hover:bg-sky-500 hover:bg-opacity-30">
                        <th>{index}</th> 
                        <td>{stock.date}</td> 
                        <td>{stock.trade_code}</td> 
                        <td>{stock.high}</td> 
                        <td>{stock.low}</td> 
                        <td>{stock.open}</td> 
                        <td>{stock.close}</td>
                        <td>{stock.volume}</td>
                        <td><button className='btn btn-sm bg-blue-800 text-white'>
                            /</button></td>
                  
                    </tr>))}
                    </tbody> 
                    
                </table>
                </div>
        </div>
    
    
    </div>
  )
}

export default StockTable