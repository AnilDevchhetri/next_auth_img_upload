import { useSession } from 'next-auth/react'
import Image from 'next/image';
import React from 'react'

const edit = () => {
  const { data } = useSession();
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-black text-white px-4'>
      <div className='w-full max-w-md border-2 border-white rounded-2xl p-8 shadow-lg'>
        <h1 className='text-2xl font-semibold text-center mb-2'>Edit Profile</h1>
        <form className='spacy-y-2 flex flex-col w-full items-center'>
          <div className='w-[100px] h-[100px] rounded-full border-2 flex justify-center items-center border-white transition-all hover:border-blue-500 text-white hover:text-blue-500 cursor-pointer overflow-hidden relative'>

          </div>
        </form>
      </div>
    </div>
  )
}

export default edit