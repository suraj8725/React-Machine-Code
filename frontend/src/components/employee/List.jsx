
import { Link } from "react-router-dom"
const List = () => {
  return (
    <div>
        <div className="p-6">
    <div className="text-center">
      <h3 className="text-4xl font-bold">Manage Employee </h3>
    </div>
    <div className="flex m-4 justify-between items-center">
      <input type="text" placeholder="Serach by Dep Name" className="px-10 py-3 ml-3 " />
      <Link to="/admin-dashboard/add-employee" className="px-10 py-3 bg-teal-600 rounded text-white mr-5 hover:bg-teal-950">Add New Employee</Link>
    </div>
   
  </div></div>
  )
}

export default List