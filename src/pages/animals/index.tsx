import AnimalCard from "@/components/AnimalCard";
import fsPromises from "fs/promises";
import Head from "next/head";
import path from "path";

export type Animal = {
	id: number;
	name: string;
	description: string;
	image: string;
	age: number;
	breed: string;
};

export default function Animals({ animals }: { animals: Animal[] }) {
	return (
		<>
			<Head>
				<title>GreekCageZoo - Animals</title>
				<meta
					name="description"
					content="Get an overview over all animals the GreekCageZoo is offering to visit."
				/>
			</Head>
			<section className="p-8">
				<div className="m-auto container">
					<h1 className="text-5xl font-semibold mb-10">Animals</h1>
					<div className="flex flex-wrap w-full justify-between gap-y-8">
						{animals.map((animal: Animal) => (
							<AnimalCard key={animal.id} animal={animal} />
						))}
					</div>
				</div>
			</section>
		</>
	);
}

export async function getStaticProps() {
	const filePath = path.join(process.cwd(), "animals.json");
	const jsonData = await fsPromises.readFile(filePath, "utf8");
	const animals = JSON.parse(jsonData);

	return {
		props: animals,
	};
}
