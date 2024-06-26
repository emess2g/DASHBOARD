import React, {useState} from 'react'
import DataTable, {createTheme} from 'react-data-table-component'
import { FiEdit } from 'react-icons/fi'

const Alldonations = () => {

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
          name: " Details",
          selector: row => row.details
        } 
    ];

        const rows = [
        {
            name: "Siddiq Mohammed",
            location: "Norway",
            item: "MacBook Pro",
            contact: '23355000000',
            details: "view"
        },
        {
            name: "Siddiq Mohammed",
            location: "Norway",
            item: "MacBook Pro",
            contact: '23355000000',
            details: "view"
        },
        {
            name: "Siddiq Mohammed",
            location: "Norway",
            item: "MacBook Pro",
            contact: '23355000000',
            details: "view"
        }
    ]


  return (
    <div id='main' className='m-4'>
      <DataTable 
      className='dataTables_scrollBody '
      columns={columns} 
      data={rows}
      customStyles={customStyles}
      // theme={'solarized'}
      fixedHeader
      // title="All Dontations"
      />
    </div>
  )
}

export default Alldonations

