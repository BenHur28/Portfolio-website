import React from "react";

const Body = () => {
	return (
		<div className="bg-body flex flex-col items-center text-center pt-40 pb-40" id="home">
			<h1 className="text-6xl font-bold m-10">HI, I'M BEN HUR</h1>
			<p className="sm:w-1/3 sm: px-2 text-xl mt-8 mb-10">A Frontend focused Web Developer building the Frontend of Websites and Web Applications</p>
			<a className="bg-yellow-400 py-4 px-16 text-xl font-bold rounded-md drop-shadow-2xl hover:-translate-y-1 transition-all duration-500" href="#projects">
				PROJECTS
			</a>
		</div>
	);
};

export default Body;
