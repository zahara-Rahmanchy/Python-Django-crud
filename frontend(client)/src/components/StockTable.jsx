import axios from 'axios'
import React, { useEffect, useState } from 'react'

const StockTable = () => {

    const[stocks,setStocks] = useState([])

    const getData = async()=>{
        const response = await axios.get("http://127.0.0.1:8000/get-stock-market-jsondata/");
        console.log(response.data)
        setStocks(response.data)
    }

   useEffect(()=>{
    getData()
   },[])
  return (
    <div>StockTable: {stocks.length}</div>
  )
}

export default StockTable