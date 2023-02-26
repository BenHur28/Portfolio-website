import React from "react";

const About = () => {
	return (
		<div className="flex flex-col items-center py-24  bg-gray-200" id="about">
			<h2 className="text-5xl underline underline-offset-8">About me</h2>
			<p className="w-1/3 text-xl text-center pt-10 mb-20">
				Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
			</p>
			<div className="flex flex-row justify-evenly w-10/12">
				<div className=" w-1/3">
					<h3 className="text-3xl mb-8">Get to know me!</h3>
					<p className="mb-3">
						I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out
						some of my work in the Projects section.
					</p>
					<p className="mb-3">
						I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev
						Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming
					</p>
					<p className="mb-3">
						I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then
						don't hesitate to contact me.
					</p>
				</div>
				<div className="w-1/3">
					<h3 className="text-3xl mb-8">My Skills</h3>
					<div className="flex flex-row flex-wrap justify-start">
						<Skills skill="HTML" />
						<Skills skill="CSS" />
						<Skills skill="JavaScript" />
						<Skills skill="React" />
						<Skills skill="Express" />
						<Skills skill="Python" />
						<Skills skill="Django" />
						<Skills skill="Flask" />
						<Skills skill="SQL Basics" />
					</div>
				</div>
			</div>
		</div>
	);
};

const Skills = (props) => {
	return <div className="bg-gray-300 px-5 py-3 mr-5 mb-5 rounded-md">{props.skill}</div>;
};

export default About;
