import React from "react";

export const Splash = ({ history }: any) => {
	// window.setTimeout(() => {
	// 	history.push("/weather");
	// }, 2000);

	const proceed = () => {
		history.push("/weather");
		console.log("nope");
	};

	return (
		<>
			<div onClick={proceed}>
				<div className='container'>
					<div className='glitch' data-text='TOMMY'>
						TOMMY
					</div>
					<div className='glow'>TOMMY</div>
					<p className='subtitle'>
						tommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommytommy
					</p>
				</div>
				<div className='scanlines'></div>
			</div>
		</>
	);
};

export default Splash;
