import { Box } from '@chakra-ui/layout';
import { Route, Routes } from 'react-router-dom';

import Error404 from '../routes/Error404';
import Home from '../routes/Home';
import Invoice from '../routes/Invoice';
import Invoices from '../routes/Invoices';
import Pool from '../routes/Pool';
import Pricing from '../routes/Pricing';

const Router = () => (
	<Box px={{ base: 4, md: 20 }}>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="pool" element={<Pool />} />
			<Route path="pricing" element={<Pricing />} />
			<Route path="invoices" element={<Invoices />}>
				<Route index element={<p>Select an invoice</p>} />
				<Route path=":invoiceId" element={<Invoice />} />
			</Route>
			<Route path="*" element={<Error404 />} />
		</Routes>
	</Box>
);

export default Router;
