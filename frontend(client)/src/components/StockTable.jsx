import axios from 'axios'
import React, { useEffect, useState } from 'react'

const StockTable = () => {

    const[stocks,setStocks] = useState([])

    const getData = async()=>{
        const response = await axios.get("http://127.0.0.1:8000/get-stock-market-jsondata/");
        console.log(response.data)
        setStocks(response.data)
        console.log(...stocks.slice(0,5))
        // setStocks(stocks.slice(0,5))
    }

   useEffect(()=>{
    getData()
   },[])
  return (
    <div>StockTable: {stocks.length}
    <div className="bg-[#FAFAFB] h-full">
        
        <div className="overflow-x-auto ">
        
                <table className="table table-sm rounded-lg">
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
                    {stocks.map((stock, index) => (
                    <tr key={index}
                    className="hover:bg-teal-500 hover:bg-opacity-30">
                        <th>{index}</th> 
                        <td>{stock.date}</td> 
                        <td>{stock.trade_code}</td> 
                        <td>{stock.high}</td> 
                        <td>{stock.low}</td> 
                        <td>{stock.open}</td> 
                        <td>{stock.close}</td>
                        <td>{stock.volume}</td>
                        <td><button>Update</button></td>
                  
                    </tr>))}
                    </tbody> 
                    
                </table>
                </div>
        </div>
    
    
    </div>
  )
}

export default StockTable