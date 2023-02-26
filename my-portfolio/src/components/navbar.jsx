import React from "react";

const Navbar = () => {
	return (
		<nav className="bg-teal-500 flex items-center justify-between flex-wrap p-4 sticky top-0 z-10">
			<a href="">
				<div className="flex item-center flex-shrink-0 text-white mr-6">
					<span className="font-semibold tracking-tight text-2xl pl-10">Ben Hur</span>
				</div>
			</a>
			<div className="flex justify-end flex-grow text-sm">
				<a className="p-4 text-lg" href="#home">
					HOME
				</a>
				<a className="p-4 text-lg" href="#about">
					ABOUT
				</a>
				<a className="p-4 text-lg" href="#projects">
					PROJECTS
				</a>
				<a className="p-4 text-lg" href="#contact">
					CONTACT
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
