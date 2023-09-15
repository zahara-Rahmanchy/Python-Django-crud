import axios from 'axios';
import React from 'react'
import {  useNavigate } from 'react-router-dom';

const AddStockData = () => {
    const navigate = useNavigate()
    const handleUpdate =async e => {
        e.preventDefault();
       
        // const id = e.target.id.value;
        const  date = e.target.date.value;
    
        const send = {
          date: e.target.date.value,
          trade_code: e.target.trade_code.value,
          high: e.target.high.value,
          low: e.target.low.value,
          open:e.target.open.value,
          close:e.target.close.value,
          volume: e.target.volume.value 
        }
    
        console.log(send)
      // console.log(id,date, trade_code,high,low,open,close,volume)
    
       
      
      try{
      const response = await axios.post(`http://localhost:8000/api/`,send);
       if(response){
        alert("Data Updated Successfully!")
        navigate("/");
       }
      }
      catch(error){
        console.log(error)
      }
      }
  return (
    <div className='md:px-10 px-3 py-10 object-cover md:h-screen h-full' style={{backgroundImage: 'url(https://img.freepik.com/free-photo/financial-forex-business-chart-report_53876-133614.jpg?w=1380&t=st=1694774376~exp=1694774976~hmac=1ffd5159186c711a9b5e359d7ebaf3a3e99665ebea5cac68b1fa1dd499324629)',backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "left-bottom",}}>
    
    <div className="card  md:w-[90%]   mx-auto shadow-2xl bg-slate-800 opacity-90  text-white">
      <form className="card-body" onSubmit={handleUpdate}>
        
        <div className='flex md:flex-row flex-col justify-around w-full  space-x-10'>
       
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-white">Date</span>
          </label>
          <input type="date" placeholder="date" name="date"  className="text-black text-xl input input-bordered " />
        </div>
        </div>

{/* second row */}
        <div className='flex md:flex-row flex-col justify-around w-full  md:space-x-10'>
        <div className="form-control md:w-1/2 w-full">
          <label className="label">
            <span className="label-text text-white">Trade Code</span>
          </label>
          <input type="text" placeholder="trade_code" name="trade_code"  className="text-black input input-bordered"  />
        </div>
        <div className="form-control md:w-1/2 w-full">
          <label className="label">
            <span className="label-text text-white">High</span>
          </label>
          <input type="number" step="0.1" name="high" placeholder="high" className="text-black input input-bordered" />
        </div>
        </div>

        <div className='flex md:flex-row flex-col justify-around w-full  md:space-x-10'>
        <div className="form-control md:w-1/2 w-full">
          <label className="label">
            <span className="label-text text-white">Low</span>
          </label>
          <input  type="number" step="0.1" name="low" placeholder="low"  className="text-black input input-bordered" />
        </div>
        <div className="form-control md:w-1/2 w-full">
          <label className="label">
            <span className="label-text text-white">Open</span>
          </label>
          <input  type="number" step="0.1" name="open" placeholder="open"  className="text-black input input-bordered" />
        </div>
        </div>
        <div className='flex md:flex-row flex-col justify-around w-full  md:space-x-10'>
        <div className="form-control md:w-1/2 w-full">
          <label className="label">
            <span className="label-text text-white">Close</span>
          </label>
          <input type="number" step="0.1" name="close" placeholder="close"  className="text-black input input-bordered" />
        </div>
        <div className="form-control md:w-1/2 w-full">
          <label className="label">
            <span className="label-text text-white">Volume</span>
          </label>
          <input type="number" name="volume" placeholder="volume" className="text-black input input-bordered" />
        </div>
        </div>
        
        <div className="form-control mt-6 md:w-[50%] mx-auto">
          <button type='submit' className="btn border-0 text-lg text-white" style={{background:"salmon"}}>Add Stocks</button>
        </div>
      </form>
    </div>

   
  </div>
  )
}

export default AddStockData