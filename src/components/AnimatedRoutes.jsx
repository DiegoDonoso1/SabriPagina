import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Circle from './Circle';
import { Routes, Route, useLocation } from 'react-router-dom';

import Final from './Final';
import Poema from './Poema';
import Foto from './Foto';
import Sabri from './Sabri';

export default function AnimatedRoutes() {
	const location = useLocation();

	return (
		<TransitionGroup>
			<CSSTransition key={location.key} timeout={450} classNames="page-flip">
				<Routes location={location}>
					<Route path="/" element={<Circle />} />
					<Route path="/Sabri" element={<Sabri />} />
					<Route path="/foto" element={<Foto />} />
					<Route path="/Poema" element={<Poema />} />
					<Route path="/Cierre" element={<Final />} />
				</Routes>
			</CSSTransition>
		</TransitionGroup>
	);
}
