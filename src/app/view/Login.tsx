import { useEffect, useState } from "react"
import Input from "../components/input"
import authService from "../services/auth.service";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [formData, setFormData] = useState({
        email:"",
        password:"",
    });

   const navigate = useNavigate();

	 useEffect(() => {
        if (authService.getLoggedUser() !== null) {
			navigate("/");
		}
     }, [navigate])

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
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-stone-100 to-lime-50 px-4 py-10">
            <div className="mx-auto w-full max-w-md rounded-2xl border border-stone-200 bg-white/90 p-8 shadow-xl backdrop-blur">
            <h1 className="mb-1 text-center text-3xl font-bold tracking-tight text-stone-800">Login</h1>
            <p className="mb-6 text-center text-sm text-stone-500">Entre para continuar suas compras</p>
            <form onSubmit={(e) => void handleSubmit(e)} className="space-y-4">
                <Input 
                type="text"
                placeholder="Email"
                value={formData.email}
                name="email"
                onChange={(e) => handleChange(e)}
                className="h-11"
                />
                <Input 
                type="password"
                placeholder="Password"
                value={formData.password}
                name="password"
                onChange={(e) => handleChange(e)}
                className="h-11"
                />
                <button type="submit" className="h-11 w-full rounded-lg bg-stone-800 text-sm font-semibold text-white transition hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-500/40">Login</button>
            </form>
                        <span onClick={() => navigate("/register")} className="mt-6 block cursor-pointer text-center text-sm text-stone-600">
                            Don't have an account?
                             <a href="/register" className="ml-1 font-semibold text-stone-800 underline-offset-2 hover:underline">
                             Sign Up
                             </a>
                             </span>
            </div>
        </div>
    )
}

export default Login;