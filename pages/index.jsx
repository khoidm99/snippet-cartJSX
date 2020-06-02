import Head from 'next/head';
import { Container } from 'reactstrap';
import Header from '../components/Header';
import { ProductList } from '../components/ProductList';
import { BlogList } from '../components/BlogList';
export default function Home() {
	return (
		<div className="App">
			<Head>
				<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
				<script
					src="https://cdn.snipcart.com/scripts/2.0/snipcart.js"
					data-api-key="MzMxN2Y0ODMtOWNhMy00YzUzLWFiNTYtZjMwZTRkZDcxYzM4"
					id="snipcart"
				></script>
				<link
					href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css"
					rel="stylesheet"
					type="text/css"
				/>
				<link rel="shortcut icon" href="/static/favicon.ico" />
			</Head>
			<Container>
				<Header />
			</Container>

			<main className="main">
				<img src="/static/aquarium.svg" alt="a" className="background-image" />
				<div className="promotional-message">
					<h3>REDISCOVER</h3>
					<h2>Fishkeeping</h2>
					<p>
						An <strong>exclusive collection of bettas</strong> available for everyone.
					</p>
				</div>
			</main>
			<ProductList />
			
		</div>
	);
}
