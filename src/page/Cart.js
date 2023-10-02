import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import CartItem from '../components/CartItem'

function Cart() {
  const {cart}=useSelector((state)=> state)

  const [totalAmount,settotalAmount]=useState(0);

useEffect(()=>{
  settotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0))
},[cart])

  return (
    <div className='max-w-4xl mx-auto mt-6' >
      {
        cart.length>0?(
          
            <div className='flex gap-x-4'>
              <div>

              {
                cart.map((item,index)=>{
                  return (<CartItem item={item} index={index} key={item.id} />)
                })
              }
              </div>

              <div className='flex flex-col mt-14'>
                <div>

                   <div className='text-green-700 font-semibold uppercase'>Your cart</div>
                   <div className='text-green-700 uppercase font-bold text-[30px]'>Summery</div>
                   <p className='mt-3'> <span className='font-semibold mt-10'>Total Item: {cart.length} </span> </p>
              </div>
              <div className='mt-10 w-full'>
                <p className='font-semibold'>Total Amount: ${totalAmount}</p> 
                <button className='bg-green-700 w-full py-2 px-20 text-white rounded-md mt-2'>Checkout Now</button>
              </div>
            </div>
                </div>

          
          
        ):(
          <div className='flex items-center flex-col justify-center mt-40'>
             <h1 className='text-[18px]'>Cart is Empty</h1>
             <Link to='/'><button className='bg-green-700 w-full py-2 px-20 text-white rounded-md mt-2' >Shone Now</button></Link>
          </div>
        )
      }
      
    </div>
  )
}

export default Cart
