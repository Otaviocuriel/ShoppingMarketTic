import { useEffect } from "react";
import Card from "../components/Card";
import findAll from "../../services/product.service";

const Home = () => {
	useEffect	(() => {
		findAll().then((res) => console.log(res))
	}, [])

    return (
        <Card/>
    )
};

export default Home;