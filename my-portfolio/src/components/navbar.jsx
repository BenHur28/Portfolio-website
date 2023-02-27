import React from "react";

const Navbar = () => {
	return (
		<nav className="bg-white flex flex-row items-center justify-between flex-wrap p-4 sticky top-0 z-10">
			<a href="">
				<div className="flex item-center flex-shrink-0 mr-6">
					<span className="font-bold tracking-tight text-2xl pl-10 hover:text-yellow-400 transition-all duration-500">Ben Hur</span>
				</div>
			</a>
			<div className="flex justify-end flex-grow text-sm">
				<a className="p-4 text-lg font-bold hover:text-yellow-400 transition-all duration-500" href="#home">
					HOME
				</a>
				<a className="p-4 text-lg font-bold hover:text-yellow-400 transition-all duration-500" href="#about">
					ABOUT
				</a>
				<a className="p-4 text-lg font-bold hover:text-yellow-400 transition-all duration-500" href="#projects">
					PROJECTS
				</a>
				<a className="p-4 text-lg font-bold hover:text-yellow-400 transition-all duration-500" href="#contact">
					CONTACT
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
