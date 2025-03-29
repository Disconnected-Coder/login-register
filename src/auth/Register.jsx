import React from "react";
import Form from "./components/form/Form";
import axios from "axios";
function Register(){
  const handleRegister=async (data)=>{
    const response=await axios.post("https://react30.onrender.com/api/user/register",data)
    console.log(response);

  }
    return (
      <Form  type="Register" onSubmit={handleRegister}/>
    )
}

export default Register;