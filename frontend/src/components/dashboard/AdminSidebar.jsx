import { NavLink } from "react-router-dom";
import { GiTeapotLeaves } from "react-icons/gi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { FaBuilding, FaTachometerAlt, FaUsers } from "react-icons/fa";
const AdminSidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen fixed left-0 top-0 bottom-0 space-y-3 w-64 ">
      <div className="bg-teal-600 flex items-center justify-center">
        <h2 className="text-3xl text-center font-pacific m-2">Employee MS</h2>
      </div>
      <div className="px-4 pt-2">
        <NavLink to="/admin-dashboard"
        className={({isActive})=>`${isActive ?"bg-teal-500 ":""}   flex items-center space-x-5 block py-3 px-5 rounded`}
        end
        >
          <FaTachometerAlt />
          <span className="text-2xl">Dashboard</span>
        </NavLink>
        <NavLink to="/admin-dashboard/employees"
         className={({isActive})=>`${isActive ?"bg-teal-500 ":""}   flex items-center space-x-5 block py-3 px-5 rounded`}
         end
         >
          <FaUsers />
          <span className="text-2xl">Employee</span>
        </NavLink>
        <NavLink to="/admin-dashboard/departments"
        className={({isActive})=>`${isActive ?"bg-teal-500 ":""}   flex items-center space-x-5 block py-3 px-5 rounded`}
        >
          <FaBuilding />
          <span className="text-2xl">Department</span>
        </NavLink>
        <NavLink to="/admin-dashboard"
        className="flex items-center space-x-5 block py-3 px-5 rounded"
        >
        <GiTeapotLeaves />
          <span className="text-2xl">Leave</span>
        </NavLink>
        <NavLink to="/admin-dashboard"
        className="flex items-center space-x-5 block py-3 px-5 rounded"
        >
        <FaMoneyBillTrendUp />
          <span className="text-2xl">Salary</span>
        </NavLink>
        <NavLink to="/admin-dashboard"
        className="flex items-center space-x-5 block py-3 px-5 rounded"
        >
        <IoSettingsOutline />
          <span className="text-2xl">Setting</span>
        </NavLink>
      </div>
    </div>
  );
};

export default AdminSidebar;
