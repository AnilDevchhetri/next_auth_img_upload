"use client"

import { userDataContext } from '@/context/UserContext';
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react'
import { FaPencilAlt } from "react-icons/fa";
const page = () => {
  // console.log(global);
  const data = useContext(userDataContext)
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleSignOut = async () => {
    setLoading(true)
    try {
      await signOut();
      setLoading(false)
    } catch {
      setLoading(false)
    }
  }
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-black text-white px-4'>
      {data &&
        <div className='w-full max-w-md border-2 border-white rounded-2xl p-8 shadow-lg text-center relative flex flex-col items-center'>
          <FaPencilAlt size={22} color='white' className='absolute right-[20px] cursor-pointer' onClick={() => router.push('/edit')} />

          {data.user?.image && <div className='relative w-[200px] h-[200px] rounded-full border-2 border-white overflow-hidden'><Image src={data.user.image} fill alt='userimage' className='' /></div>}
          <h1 className='py-4 text-3xl'>Welcome,{data.user?.name}</h1>
          <button onClick={() => { handleSignOut() }} className='w-full py-2 px-4 bg-white text-black font-semibold rounded-2xl hover:bg-gray-200 transition-colors cursor-pointer'>Sign Out</button>
        </div>}
      {!data && <div className='text-white text-2xl'>loading...</div>}
    </div>
  )
}

export default page

