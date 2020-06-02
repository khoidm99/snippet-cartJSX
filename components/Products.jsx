import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';
import Link from 'next/link';

export default function Product(props) {
	return (
		<div className="product-list">
			<Container>
				<Row>
					<Col lg="6">
						<img src={props.image} width="480px" height="289px" />
					</Col>
					<Col lg="6">
						<h1>{props.name}</h1>
						<p>{props.description}</p>
						<Container>
							<Row>
								<Col lg="6">
									<p className="text-uppercase font-weight-bold">{props.price}</p>
								</Col>
								<Col lg="6">
									<Button color="primary">Add to cart</Button>
									<Link href={`/[productView]/[product]`} as={`/product/${props.product}`}>
										<Button color="danger" className="ml-2">
											<a>View</a>
										</Button>
									</Link>
								</Col>
							</Row>
						</Container>
					</Col>
				</Row>
			</Container>
			;
		</div>
	);
}
