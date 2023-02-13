import React, { useEffect } from 'react';
import { achievements, contactInfo, greeting, projects, skills } from '../portfolio';

import Achievement from './Achievement/Achievement';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Hello from './Hello/Hello';
import Navbar from './Navbar/Navbar';
import Project from './Project/Project';
import RandomCharacter from '../style/generateRandomCharacters';
import Skill from './Skill/Skill';
import Top from './topButton/Top';

function Main() {
	useEffect(() => {
		window.scrollTo(0, 1);
	}, []);

	return (
		<div className='root body'>
			<Navbar />
			<RandomCharacter />
			{greeting.view && <Hello />}
			{projects.view && <Project />}
			{skills.view && <Skill />}
			{achievements.view && <Achievement />}
			{contactInfo.view && <Contact />}
			<Footer />
			<Top />
		</div>
	);
}
export default Main;
