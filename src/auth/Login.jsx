import Form from "./components/form/Form";
import axios from "axios";
function Login(){
    const handleLogin=async (data)=>{
        const response=await axios.post("https://react30.onrender.com/api/user/login",data)
        console.log(response)
    }
    return (
        <Form type="Login" onSubmit={handleLogin} />
    )
}
export default Login;