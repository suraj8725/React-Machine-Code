import { useEffect ,useState} from "react";
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios";




const EditDepartment = () => {
    const navigate=useNavigate();
    const {id}=useParams();
    console.log("Department id is : ",id);
    const [department,setDepartment]=useState([])
    const[depLoading,setDepLoading]=useState(false);
    useEffect(()=>{

        const fetchDepartmetns= async()=>{
if(!id){
    console.log("invalid id");
    return;
    
}

          setDepLoading(true);
        try{
            console.log("Fetching department with ID :",id);
            
        const response= await axios.get(`http://localhost:5000/api/department/${id}`,{
          headers:{
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
        });
        console.log("Response data is ",response.data);
        if(response.data.success){
          setDepartment(response.data.department)
        }else{
            alert("Failed to fetch department")
        }
        }catch(error){
            console.log("Error fetching Department");
            
          console.log(error);
          if(error.response && !error.response.data.success){
            alert(error.response.data.error||"An unexpected error occurred in Edit Department jsx")
        }
        }finally{
          setDepLoading(false)
        }
        }
        fetchDepartmetns();
          },[id]);
          const handleChange=(e)=>{
            const{name,value}=e.target;
            setDepartment({...department,[name]:value})
        }
        const handleSubmit=async (e)=>{
            e.preventDefault();
            try{
                const response=await axios.put(`http://localhost:5000/api/department/${id}`,department,{
                    headers:{
                        "Authorization":`Bearer ${localStorage.getItem('token')}`
                    }
                });
                if(response.data.success){
                    navigate("/admin-dashboard/departments")
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
    <>{depLoading ? <div>Loading...</div>:
    <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md w-96">
            <h2 className="text-3xl font-bold mb-6">Edit Department</h2>
            <form  onSubmit={handleSubmit}>
               <div>
                <label htmlFor="dep_name"
                className="text-1.5xl font-medium text-gray-800"
                >Department Name</label>
                <input type="text" 
                name="dep_name"
                onChange={handleChange}
                value={department.dep_name}
                placeholder="Department Name" 
                className="mt-1 w-full p-2 border border- border-gray-300 rounded-md"
                required
                />
                </div> 
                <div className="mt-4">
                    <label htmlFor="description"
                    className="block text-1.5xl 
                    font-medium
                    text-gray-700"
                    >Description</label>
                    <textarea name="description" id=""placeholder="Description"
                     onChange={handleChange}
                     value={department.description}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                    rows="4"
                    ></textarea>
                </div>
                <button type="submit"
                className="w-full mt-6 bg-teal-600 hover:bg-teal-950 text-white font-bold py-3 px-4 rounded"
                >Edit Department</button>
            </form>
        </div>
         }</>
  )
}

export default EditDepartment