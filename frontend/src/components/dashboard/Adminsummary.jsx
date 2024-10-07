import { FaBuilding, FaCheckCircle, FaFileAlt, FaTimesCircle } from "react-icons/fa"
import SummaryCard from "./SummaryCard"
import { FaHourglassHalf, FaMoneyBill1Wave, FaUser } from "react-icons/fa6"

const Adminsummary = () => {
  return (
    <div className="p-8">
        <h2 className="text-3xl font-bold ">Dashboard Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-7">
           <SummaryCard icon={<FaUser/>} text="Total Empoyees" number={13} color="bg-pink-600"/> 
           <SummaryCard icon={<FaBuilding/>} text="Total Departments" number={13} color="bg-yellow-600"/> 
           <SummaryCard icon={<FaMoneyBill1Wave/>} text="Monthly Salary" number={13} color="bg-purple-600"/> 
        </div>
        <div className="mt-3">
            <h3 className="text-center text-2xl  font-bold">Leave Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <SummaryCard icon={<FaFileAlt/>} text="Leave Applied" number={2} color="bg-teal-600"/> 
            <SummaryCard icon={<FaCheckCircle/>} text="Leave Approved" number={12} color="bg-indigo-600"/> 
            <SummaryCard icon={<FaHourglassHalf/>} text="Leave Pending" number={20} color="bg-yellow-600"/> 
            <SummaryCard icon={<FaTimesCircle/>} text="Leave Rejected" number={4} color="bg-orange-600"/> 
            </div>
        </div>
    </div>
  )
}

export default Adminsummary