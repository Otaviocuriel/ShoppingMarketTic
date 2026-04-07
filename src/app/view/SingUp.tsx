import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/auth.service";


const SingUp = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
		username: "",
	});

	const navigate = useNavigate();
	
		 useEffect(() => {
					if (authService.getLoggedUser() !== null) {
				navigate("/");
			}
			 }, [navigate])

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		void fetch("http://localhost:3001/users", {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify(formData),
		}).then((res) => {
			if (!res.ok) throw new Error("Failed to create user");
			return res.json();
		})
		.then(() =>{
			navigate("/login");
		})
		.catch(() => {
			console.log("Error during signup process");
		});
	}

	const hndleChangae = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ 
			...formData,
			[e.target.name]: e.target.value
		});
	};

	return ( 
		<div className="min-h-screen bg-gradient-to-br from-lime-50 via-stone-100 to-amber-50 px-4 py-10">
			<div className="mx-auto w-full max-w-md rounded-2xl border border-stone-200 bg-white/90 p-8 shadow-xl backdrop-blur">
			<h1 className="mb-1 text-center text-3xl font-bold tracking-tight text-stone-800">Sing Up</h1>
			<p className="mb-6 text-center text-sm text-stone-500">Crie sua conta para começar</p>
			<form onSubmit={(e) => handleSubmit(e)} className="space-y-4">
				<input
					type="text"
					placeholder="Username"
					value={formData.username}
					name="username"
					onChange={(e) => hndleChangae(e)}
					className="h-11 w-full rounded-lg border border-stone-300 bg-stone-50 px-4 text-sm text-stone-800 outline-none transition placeholder:text-stone-400 focus:border-stone-500 focus:ring-2 focus:ring-stone-400/30"
				/>
				<input
					type="text"
					placeholder="Email"
					value={formData.email}
					name="email"
					onChange={(e) => hndleChangae(e)}
					className="h-11 w-full rounded-lg border border-stone-300 bg-stone-50 px-4 text-sm text-stone-800 outline-none transition placeholder:text-stone-400 focus:border-stone-500 focus:ring-2 focus:ring-stone-400/30"
				/>
				<input
					type="password"
					placeholder="Password"
					value={formData.password}
					name="password"
					onChange={(e) => hndleChangae(e)}
					className="h-11 w-full rounded-lg border border-stone-300 bg-stone-50 px-4 text-sm text-stone-800 outline-none transition placeholder:text-stone-400 focus:border-stone-500 focus:ring-2 focus:ring-stone-400/30"
				/>
				<button type="submit" className="h-11 w-full rounded-lg bg-stone-800 text-sm font-semibold text-white transition hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-500/40">Sing Up</button>
			</form>
			</div>
		</div>
	)


	
}

export default SingUp;
