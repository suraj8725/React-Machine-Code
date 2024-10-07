import DataTable from 'react-data-table-component'
import { Link } from "react-router-dom"
import { columns, DepartmentButtons } from '../../utils/DepartmentHelper'
import { useEffect, useState } from 'react'
import axios from 'axios'
function DepartmentList() {
const [departments,setDepartments]=useState([]);
const[depLoading,setDepLoading]=useState(false);
  useEffect(()=>{

const fetchDepartmetns= async()=>{
  setDepLoading(true);
try{
const response= await axios.get('http://localhost:5000/api/department',{
  headers:{
    "Authorization": `Bearer ${localStorage.getItem('token')}`
}
})
if(response.data.success){
  let sno=1;
const data= await response.data.departments.map((dep)=>({
  _id : dep._id,
   sno : sno++,
   dep_name: dep.dep_name,
   action :(<DepartmentButtons DepId={dep._id}/>)
}))
setDepartments(data)
}
}catch(error){
  console.log(error);
  if(error.response && !error.response.data.success){
    alert(error.response.data.error||"An unexpected error occurred")
}
}finally{
  setDepLoading(false)
}
}
fetchDepartmetns();
  },[])
  return (
    <>{depLoading ? <div>Loading...</div> :
    <div className="p-5">
      <div className="text-center">
        <h3 className="text-4xl font-bold">Manage Departments</h3>
      </div>
      <div className="flex m-4 justify-between items-center">
        <input type="text" placeholder="Serach by Dep Name" className="px-10 py-3 ml-3 " />
        <Link to="/admin-dashboard/add-department" className="px-10 py-3 bg-teal-600 rounded text-white mr-5 hover:bg-teal-950">Add New Department</Link>
      </div>
      <div className='mt-6'>
<DataTable columns={columns} data={departments}/>
      </div>
    </div>
}
 </>   
  )
}

export default DepartmentList