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
      fontSize: '14px',
      zIndex : 0,
			paddingLeft: '0px', // override the cell padding for head cells
			paddingRight: '0px',
      padding: 'px',
      // background: 'red',
      // margin: '5px',
      textAlign: 'center',
      textDecoration: 'underline'
		}
	},
	cells: {
		style: {
			paddingLeft: '5px', // override the cell padding for data cells
			paddingRight: '5px',
      // width: '5rem',
		}
	},
};


    const columns = [
        {
            name: "Body",
            selector: row => row.body
        },
        {
            name: "Image",
            selector: row => row.campaingImage
        },
        {
            name: "Category",
            selector: row => row.category
        },
        {
          name: " Date",
          selector: row => row.date_created 
        },
        {
            name: "Goal",
            selector: row => row.goal
        },
        {
           name: "Organizer",
           selector: row => row.organizer
        },   
        {
           name: "Profile",
           selector: row => row.profileURL
        },   
        {
           name: "Reference",
           selector: row => row.reference
        },   
        {
           name: "Title",
           selector: row => row.title
        },   
    ];

        const rows = [
        {
            body: "Body",
            campaingImage: "Norway",
            category: "Education",
            date_created: "March 21, 2020",
            goal: "100 billion",
            organizer: 'Citizen Raf',
            profileURL: 'profileUrl',
            reference: 'Ch!',
            title: 'Second Campaign'
        }
    ]


  return (
    <div id='main' className=' bg-blue-200  '>
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
      // title="All Dontations"
      />
      {isOpen && <AddModal setIsOpen={setIsOpen} />}
    </div>
  )
}

export default Campaigns

