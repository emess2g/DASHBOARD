function Table({ tableData }) {
    return (
      <table className="table-fixed w-full ">
        <thead>
          <tr>
            <th>Title</th>
            <th>Body</th>
            <th>Photo</th>
            <th>Category</th>
            <th>Goal</th>
            <th>Date</th>
            <th>Organizer</th>
            <th>Profile Photo</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data.title}</td>
                <td>{data.body}</td>
                <td> {data.profileUrl}</td>
                <td>{data.category}</td>
                <td>{data.goal}</td>
                <td>{data.date}</td>
                <td>{data.organizer}</td>
                <td>{data.profileUrl} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
  export default Table;