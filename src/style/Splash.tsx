import { useEffect } from "react";

export const Splash = () => {

	useEffect(() => {
		window.setTimeout(() => {
			console.log("🔨⏰");
		}, 666);
	});

	const proceed = () => {
		window.location.href = "https://github.com/Tommy-Knight";
	};

	return (
		
			<div className="root glitch-body" onClick={proceed}>
				<div className='container'>
					<b className='glitch' data-text='TOMMYK'>
						TOMMY
					</b>
					<div className='glow'>TOMMY</div>
					<p style={{ overflow: "hidden", width: "100vw" }} className='subtitle'>
						fullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdevfullstackwebdev
					</p>
				</div>
				<div className='scanlines'></div>
			</div>
		
	);
};

export default Splash;
