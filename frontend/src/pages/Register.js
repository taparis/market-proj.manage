import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Register(){
 const [form,setForm] = useState({});

 const handleChange = (e)=>{
   setForm({...form,[e.target.name]:e.target.value});
 }

 const submit = async ()=>{
   try{
     await axios.post("http://localhost:5000/api/auth/register",form);
     alert("Register Success");
   }catch(err){
     alert("Register Failed");
   }
 }

 return(
  <div>
    <h2>Register</h2>

    <input name="username" placeholder="Username" onChange={handleChange}/><br/>
    <input name="email" placeholder="Email" onChange={handleChange}/><br/>
    <input name="password" type="password" placeholder="Password" onChange={handleChange}/><br/>

    <select name="role" onChange={handleChange}>
      <option value="student">Student</option>
      <option value="staff">Staff</option>
      <option value="shop">Shop</option>
    </select><br/>

    <button onClick={submit}>Register</button>

    <p>
      Already have account? 
      <Link to="/"> Login</Link>
    </p>
  </div>
 )
}

export default Register;
