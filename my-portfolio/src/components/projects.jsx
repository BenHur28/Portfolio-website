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
					img="https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
					title="Placeholder"
					text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',"
				/>
				<Row
					img="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
					title="Placeholder"
					text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',"
				/>
				<Row
					img="https://images.unsplash.com/photo-1566847438217-76e82d383f84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
					title="Placeholder"
					text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',"
				/>
			</div>
		</div>
	);
};

const Row = (props) => {
	return (
		<div className="flex flex-row justify-evenly my-10">
			<div className="w-1/3">
				<img className="object-fill h-96 w-full" src={`${props.img}`} alt="" />
			</div>
			<div className="w-1/3">
				<h2 className="text-4xl text my-4">{props.title}</h2>
				<p className="w-5/6 text-xl py-4">{props.text}</p>
				<button className="bg-teal-500 py-4 px-8 my-4 text-xl rounded-md drop-shadow-2xl">Project Link</button>
			</div>
		</div>
	);
};

export default Projects;
