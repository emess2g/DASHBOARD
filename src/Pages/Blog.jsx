import React, {useState} from 'react'
import DataTable, {createTheme} from 'react-data-table-component'
import AddModal from './AddModal'
import { FiEdit } from 'react-icons/fi'

const Blog = () => {
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
            name: "Author",
            selector: row => row.author
        },
        {
            name: "Body",
            selector: row => row.body
        },
        {
            name: "Date",
            selector: row => row.date_created
        },
        {
          name: "Image",
          selector: row => row.image
        },
        {
            name: "Title",
            selector: row => row.title
        }     
    ];

        const rows = [
        {
            author: "Siddiq Mohammed",
            body: "fgifefpojfwpojvkvlkadfewafpoewpojewpoijewf",
            date_created: "May 21, 2020",
            image:"💟" ,
            title: "Vaccination"
        },
    ]


  return (
    <div id='main' className='m-4'>
        <div className="flex justify-end items-end">
        <button className='underline'
        onClick={() => setIsOpen(true)}
        >Add Blog</button>
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

export default Blog
