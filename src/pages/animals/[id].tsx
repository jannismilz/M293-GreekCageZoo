import AnimalCard from "@/components/AnimalCard";
import fsPromises from "fs/promises";
import { useRouter } from "next/router";
import path from "path";

export type Animal = {
    id: number;
    name: string;
    description: string;
    image: string;
    age: number;
    breed: string;
};

export default function Animal({ animals }: { animals: Animal[] }) {
    const router = useRouter();
    const animal = animals.find(
        (animal) => animal.id == parseInt(router.query.id as string)
    ) as Animal;

    console.log(animal);

    return (
        <section className="p-8">
            <div className="m-auto container flex flex-col sm:flex-row gap-8">
                <div className="sm:w-1/3">
                    <img
                        src={`${animal.image}`}
                        alt={`Image of ${animal.name}`}
                        className="aspect-square object-contain"
                    />
                    <div className="flex flex-col gap-4 mt-4">
                        <p className="text-center py-4 bg-beige-400 rounded-sm text-xl font-semibold shadow-md">
                            {animal.name}
                        </p>
                        <p className="text-center py-4 bg-beige-400 rounded-sm shadow-md">
                            <span className="font-semibold">{animal.age}</span>{" "}
                            years old
                        </p>
                        <p className="text-center py-4 bg-beige-400 rounded-sm shadow-md">
                            <span className="italic font-semibold">
                                {animal.breed}
                            </span>{" "}
                            breed
                        </p>
                    </div>
                </div>
                <div className="sm:w-2/3 bg-beige-400 p-4 rounded-sm shadow-md">
                    <h2 className="text-3xl mb-3 font-semibold">Description</h2>
                    <p className="leading-8">{animal.description}</p>
                </div>
            </div>
        </section>
    );
}

export async function getStaticPaths() {
    const filePath = path.join(process.cwd(), "animals.json");
    const jsonData = await fsPromises.readFile(filePath, "utf8");
    const { animals }: { animals: Animal[] } = JSON.parse(jsonData);

    const paths = animals.map((animal) => ({
        params: {
            id: JSON.stringify(animal.id),
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), "animals.json");
    const jsonData = await fsPromises.readFile(filePath, "utf8");
    const animals = JSON.parse(jsonData);

    return {
        props: animals,
    };
}
