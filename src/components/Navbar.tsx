import Logo from "./Logo";

export default function Navbar() {
	return (
		<nav className="flex justify-between items-center py-4 bg-beige-400 shadow-md">
			<div className="container mx-auto flex items-center sm:flex-row flex-col">
				<Logo />
				<div className="flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-8">
					<a
						className="text-gray-600 hover:text-black hover:bg-beige-500 px-3 py-1.5 rounded-3xl duration-200"
						href="/"
					>
						Home
					</a>
					<a
						className="text-gray-600 hover:text-black hover:bg-beige-500 px-3 py-1.5 rounded-3xl duration-200"
						href="/information"
					>
						Information
					</a>
					<a
						className="text-gray-600 hover:text-black hover:bg-beige-500 px-3 py-1.5 rounded-3xl duration-200"
						href="/animals"
					>
						Animals
					</a>
				</div>
			</div>
		</nav>
	);
}
