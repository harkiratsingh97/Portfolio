import React, { useEffect, useState } from "react";
import { resumeDataBack } from "./resumeData";
// import $ from "jquery";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
// import Testimonials from "./components/Testimonials";
import Portfolio from "./components/Portfolio";

function App() {
	const [resumeData, setResumeData] = useState(null);

	// console.log(resumeData)
	useEffect(() => {
		setResumeData(resumeDataBack);
	}, []);

	return (
		<div className="App">
			{resumeData && (
				<>
					<Header data={resumeData.main} />
					<About data={resumeData.main} />
					<Resume data={resumeData.resume} />
					<Portfolio data={resumeData.portfolio} />
					{/* <Testimonials data={resumeData.testimonials}/> */}
					<Contact data={resumeData.main} />
					<Footer data={resumeData.main} />
				</>
			)}
		</div>
	);
}

export default App;
