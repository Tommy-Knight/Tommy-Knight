import React from "react";

export default function Navbar() {
	return (
		<div
			style={{
				width: "100%",
				height: "50px",
				borderBottom: "0.1px solid darkgrey",
				color: "white",
				position: "fixed",
				top: 0,
				background: "none",
				backdropFilter: "blur(6px)",
                zIndex:10,
			}}>
			🎈
		</div>
	);
}
