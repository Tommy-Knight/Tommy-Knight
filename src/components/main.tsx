import React, {useEffect} from 'react';
import Navbar from './Navbar/Navbar';
import Hello from './Hello/Hello';
import Skill from './Skill/Skill';
import Top from './topButton/Top';
import Achievement from './Achievement/Achievement';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Project from './Project/Project';
import { greeting, skills, projects, achievements, contactInfo } from '../portfolio';

function Main() {
	useEffect(() => {
		window.scrollTo(0,1);
	}, []);
	return (
		<div className="root">
			<Navbar />
			{greeting.view && <Hello />}
			{skills.view && <Skill />}
			{projects.view && <Project />}
			{achievements.view && <Achievement />}
			{contactInfo.view && <Contact />}
			<Footer />
			<Top />
		</div>
	);
}
export default Main;