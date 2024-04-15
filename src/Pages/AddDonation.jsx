import React from 'react'
import { CgCloseO } from 'react-icons/cg'

const AddDonation = ({setIsOpen}) => {
  return (
    <div className=' fixed absolute shadow-md rounded  text-center w-[70%] m-5 p-2 right-[3rem] top-[5rem] bg-[#555] xl: top-[8rem] xl:right-[5rem]'>
     <div className="flex justify-between items-center">
     <p>Add donation</p>
      <CgCloseO onClick={() => setIsOpen(false)}/>
     </div>
     <label className="flex flex-col">
        <input type="text"
        className='m-2 w-[60%] p-1'
        placeholder='Donor Name'
         />
        <input type="text"
        className='m-2 w-[60%] p-1'
        placeholder='Donor Details'
         />
     </label>
     <div className="">
        <p>update image</p>
     </div>

    </div>
  )
}

export default AddDonation
