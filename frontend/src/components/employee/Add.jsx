import { useEffect, useState } from "react";
import { fetchDepartments } from "../../utils/EmployeeHelper";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = () => {
    const navigate=useNavigate()
const[departments,setDepartments]
=useState([])
const[formData,setFormData]=useState({})
   useEffect(()=>{
    const getDeaprtments=async()=>{
        const departments=await fetchDepartments();
        setDepartments(departments);
        // setDepartments(fetchDepartments||[])
    }
    getDeaprtments();

   },[]) 
  const handleChange=(e)=>{
    const{name,value,files}=e.target;
    if(name==="image"){
        setFormData((prevData)=>
       ({...prevData,[name]:files[0]})
        )
    }else{
        setFormData((prevData)=>
            ({...prevData,[name]:value})
             )
    }
  }
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const fromDataObj=new FormData()
    Object.keys(formData).forEach((key)=>{
        fromDataObj.append(key,formData[key])
    })
    try{
        const response=await axios.post('http://localhost:5000/api/employee/add',fromDataObj,{
            headers:{
                "Authorization":`Bearer ${localStorage.getItem('token')}`
            }
        });
        if(response.data.success){
            navigate("/admin-dashboard/employees")
        }
    }catch(error){

        if(error.response){
            console.error("error response",error.response.data);
            alert(error.response.data.error ||"unexpected error")
        }else{
            console.error(error.message);
        }
        if(error.response && !error.response.data.success){
            alert(error.response.data.error||"An unexpected error occurred")
        }
    }

  }

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md">
      <h2 className="text-3xl font-bold mb-6">Add New Employee</h2>

      <form action="" onSubmit={handleSubmit}>
        <div className="gird grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              placeholder="Insert Name"
              className="mt-2 p-3 bolck w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          {/* Email */}

          <div>
            <label
              htmlFor=""
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Insert Email"
              className="mt-2 p-3 block w-full border border-gray rounded-md"
              required
            />
          </div>
          {/* EmployeeId */}

          <div>
            <label
              htmlFor=""
              className="block text-sm font-medium text-gray-700"
            >
              Employee ID
            </label>
            <input
              type="text"
              name="employeeId"
              onChange={handleChange}
              placeholder="Employee Id"
              className="mt-2 p-3 block w-full border border-gray rounded-md"
              required
            />
          </div>
          {/* {Date of birth} */}
          <div>
            <label
              htmlFor=""
              className="block text-sm font-medium text-gray-700"
            >
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              onChange={handleChange}
              className="mt-2 p-3 block w-full border border-gray rounded-md"
              required
            />
          </div>
          {/* Gender  */}
          <div>
            <label
              htmlFor=""
              className="block text-sm font-medium text-gray-700"
            >
              Gender
            </label>
            <select
              name="gender"
              onChange={handleChange}
              id=""
              className="mt-1 p-4 w-full border border-gray-300 rounded-md"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

  {/* Department  */}
  <div>
            <label
              htmlFor=""
              className="block text-sm font-medium text-gray-700"
            >
              Department
            </label>
            <select
              name="department"
              onChange={handleChange}
              id=""
              className="mt-1 p-4 w-full border border-gray-300 rounded-md"
              required
            >
              <option value="">Select Department</option >
              {departments.map((dep)=>{
              return <option key={dep._id} value={dep._id}>{dep.dep_name}</option>
              })
            }
              
            </select>
          </div>
          {/* salry  */}

          <div>
            <label htmlFor=""className="block text-sm font-medium text-gray-700">Salary</label>
            <input type="number"
            name="salary"
            onChange={handleChange}
            placeholder="Salary"
            className="mt-2 p-3 block w-full border border-gray-300 rounded-md"
            required
            
            />

          </div>
{/* Role  */}
<div>
            <label
              htmlFor=""
              className="block text-sm font-medium text-gray-700"
            >
             Role
            </label>
            <select
              name="role"
              onChange={handleChange}
              id=""
              className="mt-1 p-4 w-full border border-gray-300 rounded-md"
              required
            >
              <option value="admin">Select Role</option>
              <option value="admin">Admin</option>
              <option value="employee">Employee</option>
              
            </select>
          </div>

          {/* Image Upload  */}
          <div>
            <label htmlFor=""className=" block text-sm font-medium text-gray-700">Upload Image</label>
            <input type="file"
            name="image"
            onChange={handleChange}
            placeholder="Upload Image"
            accept="image/*"
            className="mt-2 p-3 block w-full border border-gray-300 rounded-md"
            />
          </div>






        </div>
        <button type="submit"
        className="w-full mt-6 bg-teal-600 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded"
        >Add Employee</button>
      </form>
    </div>
  );
};

export default Add;
