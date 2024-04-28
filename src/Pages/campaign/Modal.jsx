// import React from 'react'
//  import Form from './Form.jsx'

// const Modal = () => {
 
//   const [tableData, setTableData] = useState([]);
//   const [formObject, setFormObject] = useState({
//     name: "",
//     email: "",
//     profile: "",
//   });
//   const onValChange = (event) => {
//     const value = (res) => ({
//       ...res,
//       [event.target.name]: event.target.value,
//     });
//     setFormObject(value);
//   };
//   const onFormSubmit = (event) => {
//     event.preventDefault();
//     const checkVal = !Object.values(formObject).every((res) => res === "");
//     if (checkVal) {
//       const dataObj = (data) => [...data, formObject];
//       setTableData(dataObj);
//       const isEmpty = { name: "", email: "", profile: "" };
//       setFormObject(isEmpty);
//     }
//   };

//   return (
//     <div>
//       <Form
//         onValChange={onValChange}
//         formObject={formObject}
//         onFormSubmit={onFormSubmit}
//       />
//     </div>
//   )
// }

// export default Modal
