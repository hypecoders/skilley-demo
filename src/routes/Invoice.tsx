import { useNavigate, useParams } from 'react-router';

import { getInvoice, delInvoice } from '../invoiceData';

const Invoice = () => {
	const params = useParams();
	const navigate = useNavigate();
	const invoice = getInvoice(parseInt(params.invoiceId as never, 10));
	return (
		<main style={{ padding: '1rem' }}>
			<h2>Total Due: {invoice?.amount}</h2>
			<p>
				{invoice?.name}: {invoice?.number}
			</p>
			<p>Due Date: {invoice?.due}</p>
			<p>
				<button
					onClick={() => {
						delInvoice(invoice?.number ?? 0);
						navigate('/invoices');
					}}
				>
					Delete
				</button>
			</p>
		</main>
	);
};

export default Invoice;
