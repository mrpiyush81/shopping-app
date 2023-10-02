import React, { useEffect, useState } from 'react'
import Product from '../components/Product';
function Home() {
    const API_URL="https://fakestoreapi.com/products";
  const [loading,setLoading]=useState(false);
  const [posts,setposts]=useState([]);
    async function fetchdata(){
       setLoading(true);
       try {

        const dataa= await fetch(API_URL);
        const data=await dataa.json();
        console.log(data);
         setposts(data);
        console.log(posts);
       } catch (error) {
         console.log(error);
       }
   setLoading(false)

    }
    useEffect(()=>{
        fetchdata();
    },[])
  return (
    <div className='flex items-center justify-center h-full '>
      {loading?<p className='mt-40 text-[15px] font-semibold'>Loading...</p>:( posts.length >0?(
        <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-4xl mx-auto space-x-5 space-y-10 min-h-50vh]'>

         {
        posts.map((post)=> (<Product key={post.id} post={post} />) )
         }
        </div> 

      ):( <div className='flex justify-center items-center'>No Data Found</div> ) )}
    </div>
  )
}

export default Home
