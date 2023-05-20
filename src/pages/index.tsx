import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<Head>
				<title>GreekCageZoo - Home</title>
				<meta
					name="description"
					content="A zoo for the perfect adventure through the animals of our mighty gods."
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.svg" />
			</Head>
			<div
				className={`h-screenWithNavbar flex flex-col justify-center items-center`}
			>
				<Image
					src={
						process.env.BASE_PATH
							? process.env.BASE_PATH + "/background.jpeg"
							: "/background.jpeg"
					}
					alt="Home background image"
					fill
					className="-z-10 object-cover"
				/>
				<h1 className="text-6xl text-white text-center">
					Welcome to the paradise of greek mythology!
				</h1>
				<Link
					className="bg-beige-500 hover:bg-beige-400 duration-100 px-8 py-2 rounded-md mt-5 m-2"
					href="/animals"
				>
					Animals »
				</Link>
				<Link
					className="bg-beige-500 hover:bg-beige-400 duration-100 px-8 py-2 rounded-md m-2"
					href="/information"
				>
					Information »
				</Link>
			</div>
		</>
	);
}
