import Department from "../models/Department.js";

const getDepartments= async(req,res)=>{
    const{id}=req.params;
    try{
const departments = await Department.find()


return res.status(200).json({success:true, departments});
    }catch(error){
        console.log(error,"error fetching departments");
        return res.status(500).json({success:false,error:"get department server error" })
        
    }
}
const addDepartment=async(req,res)=>{
try{
 const{dep_name,description}=req.body;
 const newDep=new Department({
    dep_name,
    description
 })
 if (!dep_name || !description) {
    return res.status(400).json({ success: false, error: "Department name and description are required." });
}
await newDep.save();
 return res.status(201).json({success:true, department:newDep});
}catch(error){
    console.error("Error adding department:", error)
    return res.status(500).json({success:false, error :"add department server error"})
}
}

const getDepartment= async(req,res)=>{
    try{
        const {id}=req.params;
        const department=await Department.findById({_id:id});
        return res.status(200).json({success:true, department});
    }catch(error){
        console.log(error,"error fetching departments");
        return res.status(500).json({success:false,error:"get department server error" })
        
    }
}

const updateDepartment=async (req,res)=>{
try{
    const {id}=req.params;
const {dep_name,description}=req.body;
const updateDep=await Department.findByIdAndUpdate({_id:id},{
    dep_name:dep_name,description:description
})
return res.status(200).json({success:true, department});
}catch(error){
    console.log(error,"error fetching departments");
    return res.status(500).json({success:false,error:"edit department server error" })
    
}
}

export {addDepartment,getDepartments,getDepartment,updateDepartment}
