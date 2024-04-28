import React, {useState} from 'react'
// import Modal from './Modal';
import Table from './Table'
import Form from './Form'


const Campaigns = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [file, setFile] = useState([]);
  const [formObject, setFormObject] = useState({
    title: "",
    body: "",
    category: "",
  });

  const onValChange = (event) => {
    const value = (res) => ({
      ...res,
      [event.target.name]: event.target.value,
    });
    setFormObject(value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const checkVal = !Object.values(formObject).every((res) => res === "");
    if (checkVal) {
      const dataObj = (data) => [...data, formObject];
      setTableData(dataObj);
      const isEmpty = { name: "", email: "", profile: "" };
      setFormObject(isEmpty);
      setIsOpen(false);
    }
  };
                  
 
  
  return (

    <div id='main' className="">
           <div className="flex ">
        <button className='underline'
        onClick={() => setIsOpen(true)}
        >Add Campaigns</button>
        </div>
        <Table tableData={tableData}/> 
        
        {isOpen && <Form
        onValChange={onValChange}
        formObject={formObject}
        onFormSubmit={onFormSubmit}
        setIsOpen={setIsOpen}
        /> }
    </div>
  )
}

export default Campaigns

