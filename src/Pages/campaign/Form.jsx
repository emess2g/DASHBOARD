function Form({ onValChange, formObject, onFormSubmit }) {
    return (
      <div className=" z-[11]  absolute shadow-md rounded  w-[70%] m-5 p-4 right-[3rem]  bg-[#f1f1f1] xl: top-[5rem] xl:right-[5rem]">
      <div className="grid grid-cols-2 gap-2">
        <div className="mb-3">
          <input
            type="text"
            className="w-full rounded  p-1"
            placeholder="Title"
            onChange={onValChange}
            value={formObject.title}
            name="title"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="w-full rounded  p-1"
            placeholder="Body"
            onChange={onValChange}
            value={formObject.body}
            name="body"
          />
        </div>
     
        <div className="mb-3">
          <input
            type="text"
            className="w-full rounded  p-1"
            placeholder="Category"
            onChange={onValChange}
            value={formObject.category}
            name="category"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="w-full rounded  p-1 "
            placeholder="Goal"
            onChange={onValChange}
            value={formObject.goal}
            name="goal"
          />
        </div>
        <div className="mb-3">
          <input
            type="date"
            className="w-full rounded  p-1"
            placeholder="Date"
            onChange={onValChange}
            value={formObject.date}
            name="date"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="w-full rounded  p-1"
            placeholder="Organizer"
            onChange={onValChange}
            value={formObject.organizer}
            name="organizer"
          />
        </div>
        <div className="mb-3">
          <input
            type="file"
            className="w-full rounded  p-1"
            placeholder="Campagin Photo"
            onChange={onValChange}
            value={formObject.photo}
            name="photo"
          />
        </div>
        <div className="mb-3">
          <input
            type="file"
            className="w-full rounded  p-1"
            placeholder="Profile Photo"
            onChange={onValChange}
            value={formObject.profileUrl}
            name="profileUrl"
          />
        </div>   
       
      </div>
      <div className="d-grid">
          <input
            type="submit"
            className='w-full bg-[orange] text-white p-2 font-semibold rounded shadow-lg'
            onClick={onFormSubmit}
         
          />
        </div>
      </div>
    );
  }
  export default Form;