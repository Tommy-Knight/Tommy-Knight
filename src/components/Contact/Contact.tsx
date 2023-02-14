import './Contact.css';

import React from 'react';
import Social from '../Social/Social';
import { contactInfo } from '../../portfolio';

function Contact() {
	const Fade: any = require('react-reveal/Fade');
	return (
		<>
			<Fade bottom duration={800}>
				<div className='section--contact' id='contact'>
					<div className='contact-title'>
						<p>{contactInfo.title}</p>
					</div>
					<div className='inner'>
						<div className='profile-img'>
							<img src='/me.jpg' alt='profile' />
						</div>
						<div className='wrapper-inner'>
							<div className='contact-subtitle'>
								<p>{contactInfo.subTitle}</p>
							</div>
							<div className='contact-introduce'>
								<p>{contactInfo.introduce}</p>
							</div>
						</div>
					</div>
				</div>
			</Fade>
			<div className='social-links'>
				<Social />
			</div>
		</>
	);
}
export default Contact;
