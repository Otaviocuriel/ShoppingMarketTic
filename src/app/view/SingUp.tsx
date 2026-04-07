import { useState } from "react";
import { useNavigate } from "react-router-dom";


const SingUp = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
		username: "",
	});

	const navigate = useNavigate();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		void fetch("http://localhost:3000/users", {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify(formData),
		}).then((res) => res.json())
		.then(() =>{
			navigate("/login");
		})
	}

	const hndleChangae = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ 
			...formData,
			[e.target.name]: e.target.value
		});
	};

	return ( 
		<div>
			<h1>Sing Up</h1>
			<form onSubmit={(e) => handleSubmit(e)}>
				<input
					type="text"
					placeholder="Username"
					value={formData.username}
					name="username"
					onChange={(e) => hndleChangae(e)}
				/>
				<input
					type="text"
					placeholder="Username"
					value={formData.username}
					name="username"
					onChange={(e) => hndleChangae(e)}
				/>
				<input
					type="text"
					placeholder="Email"
					value={formData.email}
					name="email"
					onChange={(e) => hndleChangae(e)}
				/>
				<input
					type="password"
					placeholder="Password"
					value={formData.password}
					name="password"
					onChange={(e) => hndleChangae(e)}
				/>
				<button type="submit">Sing Up</button>
			</form>
		</div>
	)


	
}