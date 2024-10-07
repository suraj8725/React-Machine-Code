import { useNavigate } from "react-router-dom";


export const columns = [
  {
    name: "S No",
    selector: (row) => row.sno,
  },
  {
    name: "Department Name",
    selector: (row) => row.dep_name,
  },
  {
    name: "Action",
    selector: (row) => row.action,
  },
];

// eslint-disable-next-line react/prop-types
export const DepartmentButtons = ({DepId}) => {
  const navigate=useNavigate();
  return (
    <div className="flex space-x-4">
      <button className="px-5 py-2 bg-teal-600 text-white"
      onClick={()=>
   navigate(`/admin-dashboard/department/${DepId}`)
      }
      >Edit</button>
      <button className="px-3 py-2 bg-red-600 text-white">Delete</button>
    </div>
  );
};
