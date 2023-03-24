import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

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
            <Navbar />
            <div className="text-2xl">Hello World!</div>
            <Footer />
        </>
    );
}
