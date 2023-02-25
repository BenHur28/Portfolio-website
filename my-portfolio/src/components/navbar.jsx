import React from "react";

const Navbar = () => {
	return (
		<nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
			<a href="">
				<div className="flex item-center flex-shrink-0 text-white mr-6">
					<span className="font-semibold tracking-tight text-2xl pl-10">Ben Hur</span>
				</div>
			</a>
			<div className="flex justify-end flex-grow text-sm">
				<a className="p-4 text-lg" href="">
					HOME
				</a>
				<a className="p-4 text-lg" href="">
					ABOUT
				</a>
				<a className="p-4 text-lg" href="">
					PROJECTS
				</a>
				<a className="p-4 text-lg" href="">
					CONTACT
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
