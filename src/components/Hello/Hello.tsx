import './Hello.css';

import React from 'react';
import Social from '../Social/Social';
import Typist from 'react-typist';
import { greeting } from '../../portfolio';

function Hello() {
	const Fade: any = require("react-reveal/Fade");
	return (
		<Fade bottom duration={800}>
			<section className='section--hello'>
				<div className='inner'>
					<div className='wrapper'>
						<div className='text-title'>
							{greeting.title}&nbsp;
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
						<div className='social-links'>
							<Social />
						</div>
						<div className='wrapper-links'>
							<a href='#contact' id='about'>
								Contact &gt;
							</a>
							<a
								href={greeting.resumeLink}
								id='resume'
								target='_blank'
								rel='noopener noreferrer'>
								View Resume &gt;
							</a>
						</div>
					</div>
				</div>
			</section>
		</Fade>
	);
}
export default Hello;