import React from "react";

const About = () => {
	return (
		<div className="flex flex-col items-center py-24  bg-gray-100" id="about">
			<h2 className="text-5xl underline underline-offset-8">About me</h2>
			<p className="lg:w-1/3 text-xl text-center px-8 pt-10 mb-20">
				Here you will find more information about me, what I do, and my current
				skills mostly in terms of programming and technology
			</p>
			<div className="flex flex-col justify-evenly w-10/12 lg:flex-row">
				<div className="flex flex-col lg:w-1/3">
					<h3 className="text-3xl font-bold mb-8">Get to know me!</h3>
					<p className="mb-3 text-lg">
						I'm a <b>Frontend Web Developer</b> building the Front-end of
						Websites and Web Applications. Check out some of my work in the{" "}
						<b>Projects </b>
						section.
					</p>
					<p className="mb-3 text-lg">
						I post most of my projects on my{" "}
						<a
							className="underline font-bold text-yellow-500"
							href="https://github.com/BenHur28"
							target="_blank"
						>
							GitHub
						</a>{" "}
						page so please feel free to check it out. Also feel free to connect
						or follow me on my{" "}
						<a
							className="underline font-bold text-yellow-500"
							href="https://www.linkedin.com/in/benhur93/"
							target="_blank"
						>
							Linkedin
						</a>
						.
					</p>
					<p className="mb-8 text-lg">
						I'm open to <b>Job</b> opportunities where I can contribute, learn
						and grow. If you have a good opportunity that matches my skills and
						experience then please don't hesitate to <b>contact</b> me.
					</p>
					<a
						className="bg-yellow-400 text-lg rounded-md py-4 px-8 lg:w-1/3 text-center font-bold hover:-translate-y-1 transition-all duration-500"
						href="mailto:bhur777@gmail.com"
					>
						CONTACT
					</a>
				</div>
				<div className="mt-8 lg:w-1/3">
					<h3 className="text-3xl font-bold mb-8">My Skills</h3>
					<div className="flex flex-row flex-wrap justify-start">
						<Skills skill="HTML" />
						<Skills skill="CSS" />
						<Skills skill="JavaScript" />
						<Skills skill="React" />
						<Skills skill="Express" />
						<Skills skill="MongoDB" />
						<Skills skill="GIT" />
						<Skills skill="Github" />
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
	return (
		<div className="bg-gray-300 px-5 py-3 mr-5 mb-5 rounded-md">
			{props.skill}
		</div>
	);
};

export default About;
