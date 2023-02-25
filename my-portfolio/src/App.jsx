import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/navbar";
import Body from "./components/body";
import About from "./components/about";

const App = () => {
	return (
		<div>
			<Navbar />
			<Body />
			<About />
		</div>
	);
};

export default App;
