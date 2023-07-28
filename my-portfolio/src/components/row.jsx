import React from "react";

const Row = (props) => {
	return (
		<div className="flex flex-col justify-center my-10 items-center lg:flex-row text-center lg:text-start">
			<div className="lg:w-1/3">
				<img
					className="object-fill h-2/3 w-2/3 rounded-lg mx-auto"
					src={`${props.img}`}
					alt=""
				/>
			</div>
			<div className="lg:w-1/3">
				<h2 className="text-4xl text my-4">{props.title}</h2>
				<p className="lg:w-5/6 text-xl py-4 mb-6">{props.text}</p>
				<a
					href={props.link}
					target="_blank"
					className="bg-yellow-400 py-4 px-8 my-4 text-lg font-bold rounded-md drop-shadow-2xl hover:-translate-y-1 transition-all duration-500"
				>
					Github Link
				</a>
			</div>
		</div>
	);
};

export default Row;
