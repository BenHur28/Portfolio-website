import React from "react";
import Row from "./row";

const Projects = () => {
	return (
		<div className="flex flex-col items-center justify-between py-24" id="projects">
			<h2 className="text-5xl underline underline-offset-8">Projects</h2>
			<p className="lg:w-1/3 sm: px-2 text-xl text-center pt-10 mb-20">
				Here you will find some of the personal projects that I have created to learn web development.
			</p>
			<div className="flex flex-col justify-evenly w-10/12">
				<Row
					img="https://1000logos.net/wp-content/uploads/2017/08/Airbnb-logo.jpg"
					title="Airbnb-clone"
					link="https://github.com/BenHur28/airbnb-clone"
					text="Airbnb-clone, is a fully functional airbnb website created by implementing the MERN tech stack. Users are able to host their own places and book nights at any airbnb being hosted."
				/>
				<Row
					img="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
					title="Netflix-clone"
					link="https://github.com/BenHur28/Netflix-clone"
					text="Netflix-clone, is a clone that I created of the netflix landing page. Users are able to register, login, and buy a subscription. All of the following was implemented using Firebase/Stripe/Redux."
				/>
				<Row
					img="https://i.pinimg.com/originals/c7/d7/02/c7d70249300e5473a14ded83c694d242.png"
					title="PokeApp"
					link="https://github.com/BenHur28/pokeapp"
					text="PokeApp is a website where users can look up basic information about pokemon. PokeApp is one of the first websites I learned to create with React while also making API calls."
				/>
			</div>
		</div>
	);
};

export default Projects;
