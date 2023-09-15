import axios from 'axios'
import React, { useContext, useEffect, useMemo, useState } from 'react'
import Loading from './Loading'
import { DataContext } from '../provider/DataContext';
import {FiEdit, FiTrash} from "react-icons/fi"
import { Link } from 'react-router-dom';

const StockTable = () => {
    const {data,isLoading} = useContext(DataContext);
    
    if (isLoading) {
        return <Loading />;
      }
    
      if (!data || data.length === 0) {
        return <div>No data available.</div>;
      }

   const handleDelete = async(id)=>{
    console.log(id)
    const response = await axios.delete(`http://localhost:8000/api/${id}/`)
    if(response){
      alert("Deleted Successfully!")
    }
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
                        <td className="flex flex-row space-x-2">
                          <Link
                            to={`/update/${stock.id}`} className='btn btn-sm bg-blue-800 text-white hover:bg-purple-700'>
                              <FiEdit className="text-white"/>
                           </Link>

                           <button className='btn btn-sm bg-[#FF7F50] text-white hover:bg-purple-700' onClick={()=>handleDelete(stock.id)}>
                            <FiTrash className="text-white"/>
                            </button>
                           
                        </td>
                  
                    </tr>))}
                    </tbody> 
                    
                </table>
              
                </div>
        </div>
    
    
    </div>
  )
}

export default StockTable