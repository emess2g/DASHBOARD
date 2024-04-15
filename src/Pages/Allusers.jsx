import React from 'react'
import DataTable, {createTheme} from 'react-data-table-component'

const Allusers = () => {

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
              paddingLeft: '0px', // override the cell padding for data cells
              paddingRight: '0px',
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
              name: "Email",
              selector: row => row.email
          },
          {
            name: "Location",
            selector: row => row.location
          },
     
      ];
  
          const rows = [
          {
              name: "Siddiq Mohammed",
              location: "Norway",
              email: "siddiqmo99@gmail.com",     
          },
          {
              name: "Siddiq Mohammed",
              location: "Norway",
              email: "siddiqmo99@gmail.com",
          },
          {
              name: "Siddiq Mohammed",
              location: "Norway",
              email: "siddiqmo99@gmail.com",
          }
      ]
  

  return (
    <div id='main' className='m-5'> 
        <DataTable 
      className='dataTables_scrollBody '
      data={rows}
      columns={columns}    
      customStyles={customStyles}
      // theme={'solarized'}
      fixedHeader
      title="All Users"
      />
    </div>
  )
}

export default Allusers
