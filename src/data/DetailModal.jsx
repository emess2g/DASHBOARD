import React from 'react'
import DataTable, {createTheme} from 'react-data-table-component'
import { CgCloseO } from "react-icons/cg";
import { FiEdit } from 'react-icons/fi'

const DetailModal = ({setIsOpen}) => {
        //  Internally, customStyles will deep merges your customStyles with the default styling.
const customStyles = {
    header: {
      style: {
       fontSize: '16px',
       margin: '0px',
       background: '',
      },
    },
      rows: {
          style: {
  
              minHeight: '52px', // override the row height
        margin: 'rem',
        fontSize: '14px'
          },
      },
      headCells: {
          style: {
        fontSize: '16px',
              paddingLeft: '5px', // override the cell padding for head cells
              paddingRight: '5px',
        // background: 'red',
        // margin: '5px'
          },
      },
      cells: {
          style: {
              paddingLeft: '5px', // override the cell padding for data cells
              paddingRight: '5px',
        width: '5rem',
          }
      },
  };
  
  
      const columns = [
          {
              name: "Sender Name",
              selector: row => row.name
          },
          {
              name: "Location",
              selector: row => row.location
          },
          {
              name: "Item(s)",
              selector: row => row.item
          },
          {
            name: " Details",
            selector: row => row.details
          },
          {
              name: "Update",
              selector: row => row.status
          }     
      ];
  
          const rows = [
          {
              name: "Siddiq Mohammed",
              location: "Norway",
              item: "MacBook Pro",
              status: <FiEdit/>,
              details: "view"
          },
          {
              name: "Siddiq Mohammed",
              location: "Norway",
              item: "MacBook Pro",
              status: <FiEdit/>,
              details: "view"
          },
          {
              name: "Siddiq Mohammed",
              location: "Norway",
              item: "MacBook Pro",
              status: <FiEdit/>,
              details: "view"
          }
      ]
  

  return (
    <div>
    <div id='main' className=' fixed absolute shadow-md   text-center w-[70%] m-5 p-2 right-[3rem] top-[5rem] bg-[#555] xl: top-[8rem] xl:right-[5rem]'>
    <div className='flex justify-between text-white'> 
     <h1>Detail Modal </h1> 
     <button onClick={() => setIsOpen(false)}>
        <CgCloseO/>
     </button>
     </div>
      <DataTable 
      className='dataTables_scrollBody  '
      columns={columns} 
      data={rows}
      customStyles={customStyles}
      // theme={'solarized'}
      fixedHeader
      // title="Donor Details"
      />
      <div className="bg-blue-400 w-full p-2 text-white font-semibold">
        <p>Pending</p>
      </div>
    </div>
     
    </div>
  )
}

export default DetailModal
