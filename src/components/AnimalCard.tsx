import { Animal } from "@/pages/animals";
import Image from "next/image";
import Link from "next/link";

export default function AnimalCard({ animal }: { animal: Animal }) {
	return (
		<div className="bg-beige-200 rounded-lg flex-[0_0_47%] md:flex-[0_0_30%] lg:flex-[0_0_22%] shadow-lg">
			<div className="z-0 overflow-hidden">
				<Link href={`/animals/${animal.id}`}>
					<Image
						src={animal.image}
						alt={animal.name}
						width={100}
						height={100}
						className="h-60 w-full object-cover object-[20%_20%] rounded-t-lg hover:scale-125 duration-300"
					/>
				</Link>
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
					<Link
						href={`/animals/${animal.id}`}
						className="text-sm text-gray-600 hover:text-black hover:bg-beige-400 px-3 py-1.5 rounded-3xl duration-200"
					>
						More »
					</Link>
				</div>
			</div>
		</div>
	);
}
