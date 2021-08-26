import React from "react";
import { useEffect } from "react";

export const Splash = ({ history }: any) => {
	// window.setTimeout(() => {
	// 	history.push("/weather");
	// }, 2000);

	useEffect(() => {
		window.setTimeout(() => {
			console.log("🔨⏰");
		}, 500);
	});

	const proceed = () => {
		history.push("/weather");
		console.log("Weather app");
	};

	return (
		<>
			<div onClick={proceed}>
				<div className='container'>
					<div className='glitch' data-text='TOMMYK'>
						TOMMY
					</div>
					<div className='glow'>TOMMY</div>
					<p className='subtitle'>
						fullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdev
					</p>
				</div>
				<div className='scanlines'></div>
			</div>
		</>
	);
};

export default Splash;
