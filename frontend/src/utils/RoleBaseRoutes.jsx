import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext"


// eslint-disable-next-line react/prop-types
const RoleBaseRoutes = ({children,requiredRole}) => {
    const{user,loading}=useAuth();
    if(loading){
return <div>Loading...</div>
    }
    
    // eslint-disable-next-line react/prop-types
    if(!requiredRole.includes(user.role)){
        <Navigate to="/unauthorized"/>
    }
    
    return  user ? children :<Navigate to='/login'/>
}

export default RoleBaseRoutes