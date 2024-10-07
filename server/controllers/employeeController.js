import Employee from "../models/Employee.js";
import User from "../models/User.js";
import bcrypt from 'bcrypt';
import multer from 'multer';
import path from "path";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/uploads");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

const addEmployee = async (req, res) => {
    try {
        const { name, email, employeeId, dob, gender, department, salary, role, password } = req.body;
        console.log(req.body);
        console.log(req.file); // Debugging: Ensure multer is working and file is uploaded

        // Check if user already exists
        const user = await User.findOne({ email });
        if (user) {
            return res.status(200).json({ success: false, error: "User already registered" });
        }

        // Hash password
        const hashPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({
            name,
            email,
            password: hashPassword,
            role,
            profileImage: req.file ? req.file.filename : " " // Check if file is uploaded
        });
        const savedUser = await newUser.save();

        // Create new employee
        const newEmployee = new Employee({
            userId: savedUser._id,
            employeeId,
            dob,
            gender,
            department, // Ensure this is the ObjectId of the department
            salary
        });
        await newEmployee.save();

        // Success response
        return res.status(200).json({ success: true, message: "Employee created" });
    } catch (error) {
        console.error("Error in adding employee:", error); // Log error for debugging
        return res.status(500).json({ success: false, error: "Server error in adding employee" });
    }
};

export { addEmployee, upload };
