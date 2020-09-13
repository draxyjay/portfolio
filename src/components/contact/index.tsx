import React from 'react';
import {
	ContactContainer,
	ContactMail,
	ContactSocialMedia,
	ContactSocialMedias,
} from './contact.style';
import { Mail, Linkedin, GitHub, Instagram } from 'react-feather';

const Contact = () => {
	return (
		<ContactContainer>
			<ContactMail
				target='_blank'
				rel='noopener noreferrer'
				href='mailto:patel.jay@live.fr'
			>
				<Mail />
				patel.jay@live.fr
			</ContactMail>
			<ContactSocialMedias>
				<ContactSocialMedia
					target='_blank'
					rel='noopener noreferrer'
					href='https://www.linkedin.com/in/jay-patel-948460119/'
				>
					<Linkedin />
				</ContactSocialMedia>
				<ContactSocialMedia
					target='_blank'
					rel='noopener noreferrer'
					href='https://github.com/draxyjay'
				>
					<GitHub />
				</ContactSocialMedia>
				<ContactSocialMedia
					target='_blank'
					rel='noopener noreferrer'
					href='https://www.instagram.com/draxyjay/'
				>
					<Instagram />
				</ContactSocialMedia>
			</ContactSocialMedias>
		</ContactContainer>
	);
};

export default Contact;
