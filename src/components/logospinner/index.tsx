import React, { useEffect, useRef } from 'react';
import { spinIt } from './logospinner.animation';

const LogoSpinner = () => {
	const logoPath = useRef<SVGSVGElement>(null);

	useEffect(() => {
		spinIt(logoPath);
	}, []);

	return (
		<svg
			width='100'
			height='124'
			viewBox='0 0 100 124'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			ref={logoPath}
		>
			<path
				d='M18.2593 75.5299L16.2785 78.9609L15.8454 79.7109H16.7115H70.7452H71.6086L71.1789 78.962L58.8634 57.5H68.2157L86.5774 88.3592H0.866025L8.27305 75.5299H18.2593ZM38.7405 0.561487L48.3623 0.505069L43.6003 8.86602L38.7405 0.561487ZM43.7284 14.1195L62.1985 46.1107H52.1122L38.6499 22.9157L43.7284 14.1195Z'
				stroke='#238B95'
			/>
			<path
				d='M99.0813 48.4993L82.238 77.6075L77.3341 69.043L83.6715 57.8947L84.0962 57.1476H83.2368L29.2549 57.1476H28.3943L28.8206 57.8953L41.1393 79.5H31.2888L13.409 48.4993L83.9796 48.4993L99.0813 48.4993ZM61.3503 113.943L56.2718 122.739L37.8017 90.7478H47.888L61.3503 113.943Z'
				stroke='#238B95'
			/>
		</svg>
	);
};

export default LogoSpinner;
