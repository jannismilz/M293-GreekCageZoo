import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link
					rel="icon"
					href={
						process.env.BASE_PATH
							? process.env.BASE_PATH + "/favicon.svg"
							: "/favicon.svg"
					}
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
			</Head>
			<body>
				<Navbar />
				<Main />
				<Footer />
				<NextScript />
			</body>
		</Html>
	);
}
