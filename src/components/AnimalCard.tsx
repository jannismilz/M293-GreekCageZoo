import { Animal } from "@/pages/animals";

export default function AnimalCard({ animal }: { animal: Animal }) {
    return (
        <div className="bg-beige-400 rounded-lg flex-[0_0_47%] md:flex-[0_0_30%] lg:flex-[0_0_22%]">
            <div className="z-0 overflow-hidden">
                <img
                    src={animal.image}
                    alt={animal.name}
                    className="h-60 w-full object-cover rounded-t-lg hover:scale-125 duration-300"
                />
            </div>
            <div className="p-4 flex justify-between items-center z-10">
                <div>
                    <p className="text-2xl font-bold leading-6">
                        {animal.name}
                    </p>
                    <p className="text-gray-600 italic text-sm">
                        {animal.breed}
                    </p>
                </div>
                <div>
                    <a
                        href={`/animals/${animal.id}`}
                        className="text-sm text-gray-600 hover:text-black hover:bg-beige-500 px-3 py-1.5 rounded-3xl duration-200"
                    >
                        More »
                    </a>
                </div>
            </div>
        </div>
    );
}
