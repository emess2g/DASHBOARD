import React from 'react'
import { CgCloseO } from 'react-icons/cg'

const AddDonation = ({setIsOpen}) => {
  return (
    <div className=' z-10 fixed absolute shadow-md rounded  w-[70%] m-5 p-2 right-[3rem] top-[3rem] bg-[#f1f1f1] xl: top-[8rem] xl:right-[5rem]'>
    <div className="m-2 flex flex-col gap-4">
    <div className="flex  justify-between items-center">
     <p>Add donation</p>
      <CgCloseO onClick={() => setIsOpen(false)}/>
     </div>
     <label className="flex gap-2  flex-col">
        <input type="text"
        className=' w-[60%] p-1'
        placeholder='Donor Name'
         />
        <input type="text"
        className='m w-[60%] p-1'
        placeholder='Donor Details'
         />
     </label>
     <div className="flex  flex-col gap-4">
        <p className='underline inline-block'>update image</p>
        <div className='w-[25%] h-[100px] bg-[#fff]'>
            img
        </div>
     </div>
     <button 
     onClick={() => setIsOpen(false)}
     className='bg-[orange] text-white p-2 rounded shadow-lg'>upload</button>
    </div>

    </div>
  )
}

export default AddDonation
