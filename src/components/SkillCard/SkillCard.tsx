import './SkillCard.css';

import React from 'react';

function SkillCard({ skill }: Props) {
	return (
		<div className='skill-card-main'>
			<div className='skill-icon'>
				<i className={skill.fontAwesome}></i>
			</div>
			<div className='skill-text'>
				<span>{skill.text}</span>
			</div>
			<div className='skill-progress-bar'>
				<span style={{ width: `${skill.proficiency}%` }}></span>
				<p>{skill.proficiency}%</p>
			</div>
		</div>
	);
}
interface Props {
	skill: {
		fontAwesome: string;
		text: string;
		proficiency: number;
	};
}
export default SkillCard;
