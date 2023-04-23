import Logo from "./Logo";

export default function Footer() {
	return (
		<footer className="bg-beige-400 body-font py-4">
			<div className="container mx-auto flex items-center sm:flex-row flex-col">
				<Logo />
				<p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-600 sm:mt-0 mt-4">
					© 2023 GreekCage Zoo
				</p>
				<div className="flex gap-8 sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
					<a
						className="text-gray-600 hover:text-black hover:bg-beige-500 px-3 py-1.5 rounded-3xl duration-200"
						href="/imprint"
					>
						Imprint
					</a>
				</div>
			</div>
		</footer>
	);
}
