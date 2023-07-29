import React from "react";
import Row from "./row";
import game from "../assets/game.png";
import pokemon from "../assets/pokemon.png";
import chat from "../assets/chatApp.png";
import airbnb from "../assets/airb.png";
import lol from "../assets/lol.png";

const Projects = () => {
	return (
		<div
			className="flex flex-col items-center justify-between py-24"
			id="projects"
		>
			<h2 className="text-5xl underline underline-offset-8">Projects</h2>
			<p className="lg:w-1/3 sm: px-2 text-xl text-center pt-10 mb-20">
				Here you will find some of the personal projects that I have created to
				grow my skills in web development.
			</p>
			<div className="flex flex-col justify-evenly w-10/12">
				<Row
					img={lol}
					title="LOL.GG (Currently WIP)"
					link="https://github.com/BenHur28/lol.gg"
					text="LOL.GG is my latest project that I am working on to learn Next.JS. Its a website where users can find information on the popular video game League of Legends."
				/>
				<Row
					img={game}
					title="The Game Library"
					link="https://github.com/BenHur28/the-game-library"
					text="The-Game-Library is a website where users can search games by category, platform, genre, relevancy, etc."
				/>
				<Row
					img={airbnb}
					title="Airbnb"
					link="https://github.com/BenHur28/airbnb-clone"
					text="Airbnb, is a fully functional airbnb website created by implementing the MERN tech stack. Users are able to host their own places and book nights at any airbnb being hosted."
				/>
				<Row
					img={chat}
					title="ChatApp 2.0"
					link="https://github.com/BenHur28/Netflix-clone"
					text="ChatApp 2.0 is a live-chat web application where users can register and talk to each other. I recreated this project from my old python version using the MERN stack."
				/>
				<Row
					img={pokemon}
					title="PokeApp"
					link="https://github.com/BenHur28/pokeapp"
					text="PokeApp is a website where users can look up basic information about pokemon. PokeApp is one of the first websites I learned to create with React while also making API calls."
				/>
			</div>
		</div>
	);
};

export default Projects;
