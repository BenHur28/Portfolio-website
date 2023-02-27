import React from "react";

const About = () => {
	return (
		<div className="flex flex-col items-center py-24  bg-gray-100" id="about">
			<h2 className="text-5xl underline underline-offset-8">About me</h2>
			<p className="w-1/3 text-xl text-center pt-10 mb-20">
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
			</p>
			<div className="flex flex-row justify-evenly w-10/12">
				<div className="flex flex-col w-1/3">
					<h3 className="text-3xl font-bold mb-8">Get to know me!</h3>
					<p className="mb-3">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
						1500s,
					</p>
					<p className="mb-3">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
						1500s,
					</p>
					<p className="mb-8">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
						1500s,
					</p>
					<a
						className="bg-yellow-400 text-lg rounded-md py-4 px-8 w-1/3 text-center font-bold hover:-translate-y-1 transition-all duration-500"
						href="mailto:bhur777@gmail.com"
					>
						CONTACT
					</a>
				</div>
				<div className="w-1/3">
					<h3 className="text-3xl font-bold mb-8">My Skills</h3>
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
