import { useAuth } from "../../context/authContext"


const Navbar = () => {
    const {user}=useAuth();
  return (
    <div className="flex items-center justify-between h-12 bg-teal-600 text-white px-5">
       <p className="text-2xl font-pacific">Welcome- {user.name}</p>
       <button className="px-3 py-2 bg-teal-700 rounded hover:bg-teal-950">Logout</button>
    </div>
  )
}

export default Navbar