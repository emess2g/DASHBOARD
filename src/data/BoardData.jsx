import React from 'react'
import DataTable, {createTheme} from 'react-data-table-component'

const BoardData = () => {
    //  Internally, customStyles will deep merges your customStyles with the default styling.
const customStyles = {
	rows: {
		style: {
			minHeight: '72px', // override the row height
		},
	},
	headCells: {
		style: {
			paddingLeft: '5px', // override the cell padding for head cells
			paddingRight: '5px',
		},
	},
	cells: {
		style: {
			paddingLeft: '5px', // override the cell padding for data cells
			paddingRight: '5px',
		}
	},
};



// createTheme('solarized', {
//     text: {
//       primary: '#268bd2',
//       secondary: '#2aa198',
//     },
//     background: {
//       default: '#002b36',
//     },
//     context: {
//       background: '#cb4b16',
//       text: '#FFFFFF',
//     },
//     divider: {
//       default: '#073642',
//     },
//     action: {
//       button: 'rgba(0,0,0,.54)',
//       hover: 'rgba(0,0,0,.08)',
//       disabled: 'rgba(0,0,0,.12)',
//     },
//   }, 'dark');

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
            selector: row => row.details
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
      className='dataTables_scrollBody'
      columns={columns} 
      data={rows}
      customStyles={customStyles}
    //   theme={'solarized'}
      fixedHeader
      title="Incoming Donations."
      />
    </div>
  )
}

export default BoardData
