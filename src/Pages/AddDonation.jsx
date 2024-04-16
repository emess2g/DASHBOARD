import React from 'react'
import { CgCloseO } from 'react-icons/cg'
import { FiUpload } from 'react-icons/fi'

const AddDonation = ({setIsOpen}) => {
  return (
    <div className=' z-[11]  absolute shadow-md rounded  w-[70%] m-5 p-2 right-[3rem] top-0 bg-[#f1f1f1] xl: top-[5rem] xl:right-[5rem]'>
    <div className="m-2 flex flex-col gap-4">
    <div className="flex  justify-between items-center">
     <p>Add donation</p>
      <CgCloseO onClick={() => setIsOpen(false)}/>
     </div>
     <label className="flex gap-2  flex-col">
        <input type="text"
        className='rounded   p-1 '
        placeholder='Donor Name'
         />
        <input type="text"
        className='rounded p-1'
        placeholder='Donor Details'
         />
         <textarea name="" id="" cols="10" rows="10" placeholder='Donor Description'
         className='p-1 h-[100px]'
         ></textarea>
     </label>
     <div className="flex  flex-col gap-1">
        <p className='underline inline-block'>update image</p>
        <div className='flex flex-col items-center justify-center text-center  w-[28%] h-[120px] shadow bg-[#fff]'>
            <FiUpload/>
            <p>img</p>
        </div>
     </div>
     <button 
     type='submit'
     onClick={() => setIsOpen(false)}
     className='bg-[orange] text-white p-2 rounded shadow-lg'>upload</button>
    </div>

    </div>
  )
}

export default AddDonation
