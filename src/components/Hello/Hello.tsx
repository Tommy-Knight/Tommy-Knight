import './Hello.css';

import React from 'react';
import Social from '../Social/Social';
import Typist from 'react-typist';
import { greeting } from '../../portfolio';

function Hello() {
	const Fade: any = require('react-reveal/Fade');
	return (
		<>
			<Fade bottom duration={800}>
				<section className='section--hello'>
					<div className='inner'>
						<div className='wrapper'>
							<div className='text-title'>
								{greeting.title}
								<span className='hello-emoji'>👋</span>
							</div>
							<div className='role'>
								<span>
									<Typist cursor={{ hideWhenDone: true }}>
										Full Stack Web Developer
										<Typist.Delay ms={2222} />
										{greeting.role}
									</Typist>
								</span>
							</div>
							<div className='text-subtitle'>
								<span>{greeting.subTitle}</span>
							</div>
						</div>
					</div>
				</section>
			</Fade>
			<div className='clickable'>
				<div className='social-links'>
					<Social />
				</div>
				<div className='wrapper-links'>
					<a title='hi' href='#contact' id='about'>
						Contact
					</a>
					<a
						href={greeting.resumeLink}
						id='resume'
						target='_blank'
						rel='noopener noreferrer'>
						View Resume
					</a>
				</div>
			</div>
		</>
	);
}

export default Hello;
