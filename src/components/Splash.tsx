import { useEffect } from "react";

export const Splash = ({ history }: any) => {
	useEffect(() => {
		window.setTimeout(() => {
			console.log("🔨⏰");
		}, 666);
	});

	const proceed = () => {
		history.push("/https://github.com/Tommy-Knight");
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
					<p style={{ overflow: "hidden", width: "100vw" }} className='subtitle'>
						fullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdev
					</p>
				</div>
				<div className='scanlines'></div>
			</div>
		</>
	);
};

export default Splash;
