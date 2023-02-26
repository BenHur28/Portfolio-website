import "./App.css";
import React from "react";
import Navbar from "./components/navbar";
import Body from "./components/body";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";

const App = () => {
	return (
		<div className="font-source">
			<Navbar />
			<Body />
			<About />
			<Projects />
			<Contact />
		</div>
	);
};

export default App;
