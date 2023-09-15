import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Test from './Test';
import LineAndBarChart from './LineAndBarChart';
import { Link } from 'react-router-dom';

const TradeCodesDropdown = () => {

    const[tradeCodes,setTradeCodes] = useState([]);
    const [selectedTradeCode, setSelectedTradeCode] = useState('');
    const handleTradeCodeChange = (event) => {
      const newTradeCode = event.target.value;
      setSelectedTradeCode(newTradeCode);
    };
    useEffect(()=>{
      console.log("useEffect is running")
        const getCodes = async ()=>{
           try{
            const response = await axios.get(`http://localhost:8000/api/?trade_code=all`);
            if(response.status === 200){
                // const uniqueTradeCodes = [...new Set(response.data.map(item => item.trade_code))];
                setTradeCodes(response.data)
                // console.log(response.data)
            }
           }
           catch(error){
            console.log(error)
           }
        }
        getCodes()
    },[])


  return (
    <>
    <div className=' w-full flex md:flex-row flex-col justify-around bg-blue-950 items-center'>
     
    <select className="select select-primary w-full max-w-xs my-3"  value={selectedTradeCode} onChange={handleTradeCodeChange}>
        <option value="">Select Trade Code</option>
        {tradeCodes.map((tradeCode) => (
          <option key={tradeCode} value={tradeCode}>
            {tradeCode}
          </option>
        ))}
      </select>
      
      <Link
        to={`/addstock`} className=' w-[20%] text-xl bg-transparent text-white hover:text-purple-400'>
          Add Stock
        </Link>
      </div>
      <LineAndBarChart selectedTradeCode={selectedTradeCode} />
    </>
  )
}

export default TradeCodesDropdown