import React, { useRef } from 'react';
import { Document, Page } from 'react-pdf';
import { deviceSize } from '../../utils/deviceUtils';
import LogoSpinner from '../logospinner';
import { expandCV } from './curriculumvitae.animation';
import { DownloadButton, PDFContainer } from './curriculumvitae.style';

const CurriculumVitae = () => {
	const container = useRef<HTMLDivElement>(null);
	const button = useRef<HTMLAnchorElement>(null);

	return (
		<PDFContainer ref={container}>
			<Document
				file='./cv.pdf'
				loading={<LogoSpinner />}
				onLoadSuccess={() => expandCV(container, button)}
			>
				<Page
					width={
						window.innerWidth > deviceSize.laptop
							? 0
							: window.innerWidth
					}
					pageNumber={1}
				/>
			</Document>
			<DownloadButton ref={button} href='./cv.pdf' download>
				Télécharger
			</DownloadButton>
		</PDFContainer>
	);
};

export default CurriculumVitae;
