import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="h-screenWithNavbar bg-[url('/background.jpeg')] bg-cover flex flex-col justify-center items-center">
                <h1 className="text-6xl text-white text-center">
                    Welcome to the paradise of greek mythology!
                </h1>
                <a
                    className="bg-beige-500 hover:bg-beige-400 duration-100 px-8 py-2 rounded-md mt-5 m-2"
                    href="/animals"
                >
                    Animals »
                </a>
                <a
                    className="bg-beige-500 hover:bg-beige-400 duration-100 px-8 py-2 rounded-md m-2"
                    href="/information"
                >
                    Information »
                </a>
            </div>
        </>
    );
}
