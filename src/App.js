import React, { useEffect, useState } from "react";
import { resumeDataBack } from "./resumeData";
// import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
// import Testimonials from "./Components/Testimonials";
import Portfolio from "./Components/Portfolio";

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
