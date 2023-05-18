import React from "react";

const Projects = () => {
	return (
		<div className="flex flex-col items-center justify-between py-24" id="projects">
			<h2 className="text-5xl underline underline-offset-8">Projects</h2>
			<p className="w-1/3 text-xl text-center pt-10 mb-20">
				Here you will find some of the personal and clients projects that I created with each project containing its own case study
			</p>
			<div className="flex flex-col justify-evenly w-10/12">
				<Row
					img="https://1000logos.net/wp-content/uploads/2017/08/Airbnb-logo.jpg"
					title="Airbnb-clone"
					link="https://github.com/BenHur28/airbnb-clone"
					text="Airbnb-clone, is a fully functional airbnb website created by implementing the MERN tech stack. Users are able to host their own places and find/book nights."
				/>
				<Row
					img="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
					title="Netflix-clone"
					link="https://github.com/BenHur28/Netflix-clone"
					text="Netflix-clone, is a clone that I created of the netflix landing page. Users are able to register, login, and buy a subscription. All of which was implemented using Firebase/Stripe/Redux."
				/>
				<Row
					img="https://i.pinimg.com/originals/c7/d7/02/c7d70249300e5473a14ded83c694d242.png"
					title="PokeApp"
					link="https://github.com/BenHur28/pokeapp"
					text="PokeApp is a website that allows users to lookup basic pokemon information by making API calls."
				/>
			</div>
		</div>
	);
};

const Row = (props) => {
	return (
		<div className="flex flex-row justify-evenly my-10">
			<div className="w-1/3">
				<img className="object-fill h-96 w-full rounded-lg" src={`${props.img}`} alt="" />
			</div>
			<div className="w-1/3">
				<h2 className="text-4xl text my-4">{props.title}</h2>
				<p className="w-5/6 text-xl py-4 mb-6">{props.text}</p>
				<a
					href={props.link}
					className="bg-yellow-400 py-4 px-8 my-4 text-lg font-bold rounded-md drop-shadow-2xl hover:-translate-y-1 transition-all duration-500"
				>
					Github Link
				</a>
			</div>
		</div>
	);
};

export default Projects;
