import emoji from 'react-easy-emoji';

export const greeting = {
	username: 'tommyk.uk',
	title: "Hi, I'm Tommy Knight",
	subTitle: 'Thanks for visiting ❤',
	role: ", Googler, Doodler, Noodler, Dancer, Prancer, UI Enhancer, Actor, Reacter, Code Compacter, Karaoke Singer, Good Time Bringer, Reader, Thinker, A Nice Whiskey Drinker , Cheeky Winker, Competitive Gamer, Canine Trainer, Joker, Smoker, Midnight Toker, Crypto Hoarder, Skateboarder, Scuba Diver, Horse Rider, Sky Diver, Thought Writer, Sports Liker, Thrillseeker, Globetrotter, Hate Stopper, Get In De Chopper, Film Lover, One Mother, Younger Brother, Big Brother, I'm Making Tea, Would You Like Another?",
	resumeLink: '/🍒 TOMMY_KNIGHT_CV_2021.pdf',
	view: true,
};

export const socialMediaLinks = {
	github: 'https://github.com/Tommy-Knight',
	linkedin: 'https://www.linkedin.com/in/tommy-knight-785175212/',
	email: 'tknighted@hotmail.com',
	facebook: '',
	twitter: 'https://twitter.com/_TommyLK',
	instagram: '',
	medium: '',
	stackoverflow: '',
};

export const skills = {
	title: emoji('I got Skills ⚡'),
	subTitle:
		'I have studied and practiced MERN-stack Web Development, and here i will eventually write something cool about myself',
	describeSkills: [
		emoji('✔ Friendly'),
		emoji('✔ Good at Xbox'),
		emoji('✔ Can cook a really nice fry up'),
	],
	//  https://fontawesome.com/ to search icon
	lists: [
		{ fontAwesome: 'fab fa-js', text: 'Javascript', proficiency: 90 },
		{ fontAwesome: 'fab fa-html5', text: 'HTML5', proficiency: 90 },
		{ fontAwesome: 'fab fa-react', text: 'React', proficiency: 90 },
		{ fontAwesome: 'fab fa-node-js', text: 'Node.js', proficiency: 80 },
		{ fontAwesome: 'fab fa-css3-alt', text: 'CSS', proficiency: 70 },
		{ fontAwesome: 'fas fa-server', text: 'MongoDB', proficiency: 80 },
		{ fontAwesome: 'fas fa-database', text: 'PostgreSQL', proficiency: 80 },
		{ fontAwesome: 'fab fa-sass', text: 'Sass', proficiency: 50 },
		{ fontAwesome: 'fab fa-aws', text: 'AWS', proficiency: 40 },
		{ fontAwesome: 'fab fa-python', text: 'Python', proficiency: 20 },
	],
	view: true,
};

export const projects = {
	title: emoji('Projects 💻'),
	subTitle: 'Here are my Projects!',
	lists: [
		{
			title: 'PhoTide',
			desc: "A Photographer's Sun and Star App",
			url: 'https://photide.netlify.app/',
			img: "/photide.png"
		},
		{
			title: 'Creepy Crawlies',
			desc: 'A text based RPG',
			url: '#',
		},
		{
			title: 'Spotify Clone',
			desc: 'I made a Spotify Clone ',
			url: 'https://github.com/Tommy-Knight/spotify-m7',
		},
		{
			title: 'Whatsapp Clone',
			desc: 'Made Whatsapp with socket.io booyakasha',
			url: 'https://github.com/Tommy-Knight/Whatsapp',
		},
		{
			title: 'Linkedin Clone',
			desc: 'I recreated Linkedin with many features from user creation, uploading images in posts, likes and comments on friends and followers posts etc.',
			url: 'https://github.com/Tommy-Knight/build-week-2-linkedin',
		},
	],
	view: true,
};

export const achievements = {
	title: emoji('Achievements And Certifications 🏆'),
	subTitle: 'I WILL BE SUCCESSFUL',
	lists: [
		{
			img: "/strive-cert.png",
			alt: 'yay',
			title: 'Strive!',
			desc: 'FINISHED FULL STACK WEB DEVELOPMENT COURSE',
		},
	],
	view: true,
};

export const contactInfo = {
	title: 'Contact Me! 📞',
	subTitle: 'Please use Email or Linkedin for any proffesional enquiries.',
	introduce: emoji('Have a great day!'),
	view: true,
};
