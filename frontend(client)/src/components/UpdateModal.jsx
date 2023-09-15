import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from "react-router-dom"
const UpdateModal = () => {
  const {sid} = useParams();
  const [initialStockDetails, setInitialStockDetails] = useState([]);
   const navigate = useNavigate()
  useEffect(() => {
    const fetchDataById = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/${sid}/`);
        if (response.status === 200) {
          setInitialStockDetails(response.data);
          console.log(response.data)
          
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataById();

   
  }, []);

  const {id,date, trade_code,high,low,open,close,volume} = initialStockDetails

  const handleUpdate =async e => {
    e.preventDefault();
   
    const id = e.target.id.value;
    const  date = e.target.date.value;

    const send = {
      trade_code: e.target.trade_code.value,
      high: e.target.high.value,
      low: e.target.low.value,
      open:e.target.open.value,
      close:e.target.close.value,
      volume: e.target.volume.value 
    }

  // console.log(id,date, trade_code,high,low,open,close,volume)

   
  
  try{
  const response = await axios.put(`http://localhost:8000/api/${sid}/`,send);
   if(response.status === 200){
    alert("Data Updated Successfully!")
    navigate("/");
   }
  }
  catch(error){
    console.log(error)
  }
  }


  return (
   <div className='grid grid-cols-3 place-items-center gap-2 md:px-10 py-10 object-cover md:h-screen h-full' style={{backgroundImage: 'url(https://img.freepik.com/free-photo/working-with-graphs-man-working-office-staying-late-night_155003-40818.jpg?w=996&t=st=1694774267~exp=1694774867~hmac=f73382a0f2578fb68c2f56f8c0b1abf8c8a07cabe31dcd48eec53bc64d1bb60b)'}}>
    {/* <div className='md:col-span-1 col-span-3 order-2'>
      <h1>Update Your Data</h1></div> */}
    <div className="card  w-[90%]  col-span-3 mx-5 shadow-2xl bg-slate-800 opacity-90  text-white">
      <form className="card-body" onSubmit={handleUpdate}>
        
        <div className='flex md:flex-row flex-col justify-around w-full  md:space-x-10'>
        <div className="form-control md:w-1/2 w-full">
          <label className="label">
            <span className="label-text text-white">Id</span>
          </label>
          <input type="number" placeholder="id" name="id" defaultValue={id} className="text-white text-xl input input-bordered bg-transparent" readOnly/>
        </div>
        <div className="form-control md:w-1/2 w-full">
          <label className="label">
            <span className="label-text text-white">Date</span>
          </label>
          <input type="datetime" placeholder="date" name="date" defaultValue={date} className="text-white text-xl input input-bordered bg-transparent" readOnly />
        </div>
        </div>

{/* second row */}
        <div className='flex md:flex-row flex-col justify-around w-full  md:space-x-10'>
        <div className="form-control md:w-1/2 w-full">
          <label className="label">
            <span className="label-text text-white">Trade Code</span>
          </label>
          <input type="text" placeholder="trade_code" name="trade_code" defaultValue={trade_code} className="text-black input input-bordered"  />
        </div>
        <div className="form-control md:w-1/2 w-full">
          <label className="label">
            <span className="label-text text-white">High</span>
          </label>
          <input type="number" step="0.1" name="high" placeholder="high" defaultValue={high} className="text-black input input-bordered" />
        </div>
        </div>

        <div className='flex md:flex-row flex-col justify-around w-full  md:space-x-10'>
        <div className="form-control md:w-1/2 w-full">
          <label className="label">
            <span className="label-text text-white">Low</span>
          </label>
          <input  type="number" step="0.1" name="low" placeholder="low" defaultValue={low} className="text-black input input-bordered" />
        </div>
        <div className="form-control md:w-1/2 w-full">
          <label className="label">
            <span className="label-text text-white">Open</span>
          </label>
          <input  type="number" step="0.1" name="open" placeholder="open" defaultValue={open} className="text-black input input-bordered" />
        </div>
        </div>
        <div className='flex md:flex-row flex-col justify-around w-full  md:space-x-10'>
        <div className="form-control md:w-1/2 w-full">
          <label className="label">
            <span className="label-text text-white">Close</span>
          </label>
          <input type="number" step="0.1" name="close" placeholder="close" defaultValue={close} className="text-black input input-bordered" />
        </div>
        <div className="form-control md:w-1/2 w-full">
          <label className="label">
            <span className="label-text text-white">Volume</span>
          </label>
          <input type="number" name="volume" placeholder="volume" defaultValue={volume} className="text-black input input-bordered" />
        </div>
        </div>
        
        <div className="form-control mt-6 w-[50%] mx-auto">
          <button type='submit' className="btn border-0 text-lg text-white" style={{background:"salmon"}}>Update</button>
        </div>
      </form>
    </div>

   
  </div>

   
  
  )
}

export default UpdateModal