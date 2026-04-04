import { useState } from "react"
import Input from "../components/input"
import authService from "../services/auth.service";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [formData, setFormData] = useState({
        email:"",
        password:"",
    });

   const navigate = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try{
            const res = authService.autenticate(formData);
            authService.setLoggedUser(await res);

            return navigate ("/")
        }
        
        catch{
            console.log("Error during login process");
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={(e) => void handleSubmit(e)}>
                <Input 
                type="text"
                placeholder="Email"
                value={formData.email}
                name="email"
                onChange={(e) => handleChange(e)}
                />
                <Input 
                type="password"
                placeholder="Password"
                value={formData.password}
                name="password"
                onChange={(e) => handleChange(e)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;