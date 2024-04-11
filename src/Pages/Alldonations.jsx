

// const OrderHistory = () => {
//   return (
//     <div id="main" >
//       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum libero non, laboriosam ad blanditiis, repellat totam cupiditate harum voluptates cumque corrupti error, consequatur eius similique. Velit neque doloremque facilis, adipisci aliquid ea fugiat? Nostrum aliquam voluptatum a natus animi eum!</p>
//     </div>
//   )
// }

// export default OrderHistory;
import React from 'react'
import DataTable, {createTheme} from 'react-data-table-component'

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



createTheme('solarized', {
    text: {
      primary: '#268bd2',
      secondary: '#2aa198',
    },
    background: {
      default: '#002b36',
    },
    context: {
      background: '#cb4b16',
      text: '#FFFFFF',
    },
    divider: {
      default: '#073642',
    },
    action: {
      button: 'rgba(0,0,0,.54)',
      hover: 'rgba(0,0,0,.08)',
      disabled: 'rgba(0,0,0,.12)',
    },
  }, 'dark');


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
            status: "🕢",
            details: "view"
        },
        {
            name: "Siddiq Mohammed",
            location: "Norway",
            item: "MacBook Pro",
            status: "🕢",
            details: "view"
        },
        {
            name: "Siddiq Mohammed",
            location: "Norway",
            item: "MacBook Pro",
            status: "🕢",
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

