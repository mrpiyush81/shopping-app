import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import toast  from 'react-hot-toast';
import {add,remove} from '../redux/Slices/CartSlices'
function Product({post}) {
  const {cart}= useSelector((state)=>state);
  const dispacth=useDispatch();
 
  function removeitem(){
    dispacth(remove(post.id));
    toast.error("Item removed from Cart")
   
  }
  function additem(){
    dispacth(add(post));
    toast.success('Item added to Cart')

  }
  
  return (
    <div className='flex flex-col items-center shadow-md shadow-slate-600  rounded-md justify-between hover:shadow-slate-900 hover:scale-110 hover:shadow-2xl  transition duration-300 ease-in  gap-3 p-4 mt-10 ml-1'>
          <div>
            <p className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'>{post.title}</p>
          </div>
          <div>
            <p className='w-40 text-gray-400 font-normal text-[10px] text-left'>{post.description.split(' ').slice(0,10).join(' ')+"..."}</p>
          </div>
          <div className='h-[110px]'>
            <img src={post.image} alt="" className='h-full w-full' />
          </div>

          <div className='flex justify-between gap-3 items-center w-full mt-1'>
          <div>
            <p className='text-green-600 font-semibold text-[15px]'>${post.price}</p>
          </div>
          {
            cart.some((p)=>p.id===post.id)?(
              <button className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[10px] p-1 px-3 uppercase hover:text-white transition duration-300 ease-in' onClick={removeitem}>Remove Item</button>
              ):(
                <button className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[10px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in' onClick={additem}>Add to Card</button>
                )
              }
              </div>
    </div>
  )
}

export default Product
