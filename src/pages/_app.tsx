import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
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
			<Component {...pageProps} />
		</>
	);
}
