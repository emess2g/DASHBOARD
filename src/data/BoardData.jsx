import React, { useState } from 'react'
import DataTable, {createTheme} from 'react-data-table-component'
import DetailModal from './DetailModal';


const BoardData = () => {
    const [isOpen, setIsOpen] = useState(false);
    //  Internally, customStyles will deep merges your customStyles with the default styling.
const customStyles = {
    bodyStyle: {
        style: {
           background: 'red'
        }
    },
    header: {
        style: {
            'font-size': '18px',
            'padding' : '0px',
            'margin': '0'
        }
    },
	rows: {
		style: {
			minHeight: '52px', // override the row height
		},
	},
	headCells: {
		style: {
            padding: '0px',
			// paddingLeft: '5px', // override the cell padding for head cells
			// paddingRight: '5px',
		},
	},
	cells: {
		style: {
            padding: '0px',
			// paddingLeft: '5px', // override the cell padding for data cells
			// paddingRight: '5px',
            // border : '1px solid'
		}
	},
};

    const columns = [
        {
            name: "Sender Name",
            selector: row => row.name
        },
        {
            name: "Contact",
            selector: row => row.contact
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
            name: "Pickup Date",
            selector: row => row.pickupDate
        },
        {
            name: "Status",
            selector: row => row.status    
        },       
        {
            name: " Details",
            selector: row =>  <button
             onClick={() => setIsOpen(true)} 
             className='bg-red-400 p-2 rounded-md text-white' >
             {row.details}
             </button>
        }
    ];

        const rows = [
        {
            name: "Siddiq Mohammed",
            contact: 233400000,
            location: "Norway",
            item: "MacBook Pro",
            pickupDate: "March 15, 2024",
            status: "Pending",
            details: "view"
        },
        {
            name: "Siddiq Mohammed",
            contact: 233400000,
            location: "Norway",
            item: "MacBook Pro",
            pickupDate: "March 15, 2024",
            status: "Pending",
            details: "view"
        },
        {
            name: "Siddiq Mohammed",
            contact: 233400000,
            location: "Norway",
            item: "MacBook Pro",
            pickupDate: "March 15, 2024",
            status: "Pending",
            details: "view"
        },
        {
            name: "Siddiq Mohammed",
            contact: 233400000,
            location: "Norway",
            item: "MacBook Pro",
            pickupDate: "March 15, 2024",
            status: "Pending",
            details: "view"
        },
        {
            name: "Siddiq Mohammed",
            contact: 233400000,
            location: "Norway",
            item: "MacBook Pro",
            pickupDate: "March 15, 2024",
            status: "Pending",
            details: "view"
        },
        {
            name: "Siddiq Mohammed",
            contact: 233400000,
            location: "Norway",
            item: "MacBook Pro",
            pickupDate: "March 15, 2024",
            status: "Pending",
            details: "view"
        },
        {
            name: "Siddiq Mohammed",
            contact: 233400000,
            location: "Norway",
            item: "MacBook Pro",
            pickupDate: "March 15, 2024",
            status: "Pending",
            details: "view"
        },
        {
            name: "Siddiq Mohammed",
            contact: 233400000,
            location: "Norway",
            item: "MacBook Pro",
            pickupDate: "March 15, 2024",
            status: "Pending",
            details: "view"
        }
    ]

  return (
    <div className=''>
      <DataTable 
      className='dataTables_scrollBody z-0'
      columns={columns} 
      data={rows}
      customStyles={customStyles}
      fixedHeader
      title="Incoming Donations."
      />
      {isOpen && <DetailModal setIsOpen={setIsOpen} />}
    </div>
  )
}

export default BoardData
