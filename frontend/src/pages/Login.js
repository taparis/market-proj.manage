import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login(){
 const [form,setForm] = useState({});
 const navigate = useNavigate();

 const handleChange = (e)=>{
   setForm({...form,[e.target.name]:e.target.value});
 }

 const submit = async ()=>{
   try{
     const res = await axios.post(
       "http://localhost:5000/api/auth/login",
       form
     );

     localStorage.setItem("token",res.data.token);
     localStorage.setItem("user",JSON.stringify(res.data.user));

     alert("Login Success");
     navigate("/home");
   }catch(err){
     alert("Login Failed");
   }
 }

 return(
  <div>
    <h2>Login</h2>

    <input name="email" placeholder="Email" onChange={handleChange}/><br/>
    <input name="password" type="password" placeholder="Password" onChange={handleChange}/><br/>

    <button onClick={submit}>Login</button>

    <p>
      No account?
      <Link to="/register"> Register</Link>
    </p>
  </div>
 )
}

export default Login;
