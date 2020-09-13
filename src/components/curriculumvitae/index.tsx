import React from 'react';
import { Document, Page } from 'react-pdf';
import {
	DownloadButtonContainer,
	DownloadButton,
	PDFContainer,
} from './curriculumvitae.style';

const CurriculumVitae = () => {
	return (
		<PDFContainer>
			<Document file='./cv.pdf'>
				<Page height={window.innerHeight - 100} pageNumber={1} />
			</Document>
			<DownloadButtonContainer>
				<DownloadButton href='./cv.pdf' download>
					Télécharger
				</DownloadButton>
			</DownloadButtonContainer>
		</PDFContainer>
	);
};

export default CurriculumVitae;
