import { Container } from 'reactstrap';
import Link from 'next/link';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';

export default function Blog(props) {
	return (
		<div className="blog-list">
			<Container>
				<Card>
					<CardBody>
						<CardTitle>{props.title}</CardTitle>
					</CardBody>
					<img width="100%" src={props.image} alt="Card image cap" />
					<CardBody>
						<CardText>{props.content}</CardText>
					</CardBody>
				</Card>
			</Container>
		</div>
	);
}
