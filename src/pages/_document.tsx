import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body>
				<Navbar />
				<Main />
				<Footer />
				<NextScript />
			</body>
		</Html>
	);
}
