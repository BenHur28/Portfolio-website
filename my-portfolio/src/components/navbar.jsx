import React, { useState } from "react";
import Picture from "../assets/pfp.png";

const Navbar = () => {
	const [menu_class, setMenuClass] = useState("navbar-menu relative z-50 hidden");
	const [isMenuClicked, setIsMenuClicked] = useState(false);

	const updateMenu = () => {
		if (!isMenuClicked) {
			setMenuClass("navbar-menu w-max relative z-50");
		} else {
			setMenuClass("navbar-menu relative z-50 hidden");
		}
		setIsMenuClicked(!isMenuClicked);
	};

	return (
		<>
			<nav className="fixed py-2 flex w-screen justify-between items-center bg-white">
				<a className="flex flex-row items-center justify-between ml-7" href="">
					<img className="h-12 w-12 rounded-full" src={Picture} alt="" />
					<div className="flex item-center flex-shrink-0 mr-6">
						<span className="font-bold tracking-tight text-2xl pl-5 hover:text-yellow-400 transition-all duration-500">Ben Hur</span>
					</div>
				</a>
				<div className="lg:hidden">
					<button onClick={updateMenu} className="navbar-burger flex items-center text-gray-500 p-3">
						<svg className="block h-6 w-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<title>Mobile menu</title>
							<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
						</svg>
					</button>
				</div>
				<ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2  lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
					<li>
						<a className="p-4 text-lg font-bold hover:text-yellow-400 transition-all duration-500" href="#home">
							HOME
						</a>
					</li>
					<li>
						<a className="p-4 text-lg font-bold hover:text-yellow-400 transition-all duration-500" href="#about">
							ABOUT
						</a>
					</li>
					<li>
						<a className="p-4 text-lg font-bold hover:text-yellow-400 transition-all duration-500" href="#projects">
							PROJECTS
						</a>
					</li>
					<li>
						<a className="p-4 text-lg font-bold hover:text-yellow-400 transition-all duration-500" href="#contact">
							CONTACT
						</a>
					</li>
				</ul>
			</nav>
			<div className={menu_class}>
				<nav className="fixed top-16 left-0 bottom-0 flex flex-col w-screen h-fit bg-white ">
					<div>
						<ul className="text-right">
							<li className="border-t py-4 ">
								<a onClick={updateMenu} className="mr-3 text-lg font-bold hover:text-yellow-400 transition-all duration-500" href="#home">
									HOME
								</a>
							</li>
							<li className="border-t py-4 ">
								<a onClick={updateMenu} className="mr-3 text-lg font-bold hover:text-yellow-400 transition-all duration-500" href="#about">
									ABOUT
								</a>
							</li>
							<li className="border-t py-4 ">
								<a onClick={updateMenu} className="mr-3 text-lg font-bold hover:text-yellow-400 transition-all duration-500" href="#projects">
									PROJECTS
								</a>
							</li>
							<li className="border-t py-4 ">
								<a onClick={updateMenu} className="mr-3 text-lg font-bold hover:text-yellow-400 transition-all duration-500" href="#contact">
									CONTACT
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</>
	);
};

export default Navbar;
