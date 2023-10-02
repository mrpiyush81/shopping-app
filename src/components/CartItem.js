import React from 'react'
import {MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import {remove} from '../redux/Slices/CartSlices'
function CartItem({item,index}) {

    const dispatch=useDispatch();
    function removeitem(){
           dispatch(remove(item.id));
           toast.error("Item removed from Cart")
    }
    console.log(item);
  return (
    <div className='border-b-4'>
         <div className='flex mr-6 mb-2 mt-1 '>
            <div className='h-[200px] mt-2 w-[140px] '>
                <img src={item.image} className='w-full h-full' alt="" />
            </div>
            <div className='ml-20 w-[350px] '>
               <h1 className='mt-3 mb-4 font-semibold'>{item.title}</h1> 
               <h1>{item.description.split(' ').slice(0,17).join(' ')+"..."}</h1>
               <div className='flex justify-between mt-5 items-center'>
                  <p className='text-green-600 font-semibold text-[15px]' >${item.price}</p>
               <div  onClick={removeitem} className=' cursor-pointer mr-10 h-9 w-9 rounded-full bg-red-300 flex justify-center items-center'><MdDelete className='text-red-800 text-[18px]' /></div>
               </div>
            </div>
         </div>
      
    </div>
  )
}

export default CartItem
