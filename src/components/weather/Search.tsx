import { ChangeEvent, useState } from "react";

import { ResponseInterface } from "../../store/types";
import { RouteComponentProps } from "react-router-dom";
import { Weather } from "./Weather";

export default function Search(props: RouteComponentProps) {
	const [searchValue, setSearchValue] = useState<string>("");
	const [searchResult, setSearchResult] = useState<ResponseInterface | null>(null);
	// const [error, setError] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			setIsLoading(true);
			const result = await fetch(
				`http://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=9d33c3e69026b25a6cab7f300ec5e461`
			);

			const data = await result.json();
			console.log("response", data);
			setSearchResult(data);
			setIsLoading(false);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<div className='video-container'>
				<video
					style={{
						width: "auto",
						height: "auto",
						zIndex: 0,
						position: "absolute",
						top: "50%",
					}}
					className='videoTag'
					autoPlay
					loop
					muted>
					<source src={window.location.origin + `/Pexels Videos 1779202.mp4`} type='video/mp4' />
				</video>

				<div
					style={{
						zIndex: 5,
						marginTop: "100px",
					}}>
					<form
						style={{ zIndex: 5 }}
						className='App'
						onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSearch(e)}>
						<input
							className='searchInput'
							type='text'
							placeholder='🔎 Location ...'
							style={{
								padding: "3px",
								height: "30px",
								background: "none",
								backdropFilter: "blur(6px)",
								borderRadius: "30px",
								border: "1px solid black",
								textAlign: "center",
								marginBottom: "10px",
								zIndex: 5,
							}}
							value={searchValue}
							onChange={(e: ChangeEvent<HTMLInputElement>) => {
								setSearchValue(e.target.value);
							}}
						/>
						<br />
					</form>
					{isLoading && (
						<div
							style={{
								backdropFilter: "blur(6px)",
								borderRadius: "14px",
								border: "1px solid black",
								padding: "40px",
								margin: "0 auto",
								maxWidth: "200px",
	
							}}>
							we loading baby
						</div>
					)}
					{searchResult && (
						<div
							style={{
								backdropFilter: "blur(6px)",
								borderRadius: "14px",
								border: "1px solid black",
								padding: "40px",
								margin: "0 auto",
								maxWidth: "200px",
							}}>
							<Weather {...searchResult} />
						</div>
					)}
				</div>
			</div>
		</>
	);
}
