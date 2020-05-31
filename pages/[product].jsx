import { useRouter } from 'next/router';
import ProductIds from '../components/Products';
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';
import Link from 'next/link';
import { ProductList } from '../components/ProductList';

export default function CurrentProduct(props) {
	const router = useRouter();
	const { currencyProduct } = router.query;

	return (
		<Container>
			<ProductList />
			<Link href="/">
				<Button>Prev</Button>
			</Link>
		</Container>
	);
}
