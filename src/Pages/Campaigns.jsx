import React, {useState} from 'react'
import DataTable, {createTheme} from 'react-data-table-component'
import AddModal from './AddModal'
import { FiEdit } from 'react-icons/fi'

const Campaigns = () => {
  const [isOpen, setIsOpen] = useState(false);


    //  Internally, customStyles will deep merges your customStyles with the default styling.
const customStyles = {
  header: {
    style: {
     fontSize: '16px',
     margin: '0px',
     background: 'red',
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
      zIndex : 0,
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
            status: <FiEdit className='text-[18px]'/>,
            details: "view"
        },
        {
            name: "Siddiq Mohammed",
            location: "Norway",
            item: "MacBook Pro",
            status: <FiEdit className='text-[18px]'/>,
            details: "view"
        },
        {
            name: "Siddiq Mohammed",
            location: "Norway",
            item: "MacBook Pro",
            status: <FiEdit className='text-[18px]'/>,
            details: "view"
        }
    ]


  return (
    <div id='main' className='m-4'>
        <div className="flex justify-end items-end">
        <button className='underline'
        onClick={() => setIsOpen(true)}
        >Add Campaigns</button>
        </div>
      <DataTable 
      className='dataTables_scrollBody '
      columns={columns} 
      data={rows}
      customStyles={customStyles}
      // theme={'solarized'}
      fixedHeader
      // title="All Dontations"
      />
      {isOpen && <AddModal setIsOpen={setIsOpen} />}
    </div>
  )
}

export default Campaigns

