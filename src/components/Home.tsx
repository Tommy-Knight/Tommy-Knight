import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect } from "react";

export const Home = ({ history }: any) => {
	window.onbeforeunload = function () {
		window.scrollTo(0, 0);
	};

	useEffect(() => {
		window.setTimeout(() => {
			console.log("Welcome! 🦩");
		}, 666);
	});

	return (
		<>
			<div
				style={{
					color: "white",
					marginTop: "200px",
					height: "90vh",
					borderBottom: "1px solid grey",
				}}>
				<Navbar />
				<p className='p' style={{ marginLeft: "0 auto", marginRight: "0 auto", fontSize: "33px" }}>
					Welcome!
				</p>
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<div className=''>
					<p>
						<Link to='/weather'>weather app</Link>
					</p>
				</div>
			</div>
			<div style={{ height: "90vh", borderBottom: "1px solid grey", color: "white" }}>
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				more stuff
			</div>
			<small style={{ color: "white" }}>wow</small>
		</>
	);
};

export default Home;
