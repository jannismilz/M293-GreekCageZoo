import Logo from "./Logo";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center py-4 bg-beige-500">
            <div className="container mx-auto flex items-center sm:flex-row flex-col">
                <Logo />
                <div className="flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-8">
                    <a
                        className="text-black/70 hover:text-black duration-100"
                        href="/"
                    >
                        Home
                    </a>
                    <a
                        className="text-black/70 hover:text-black duration-100"
                        href="/information"
                    >
                        Information
                    </a>
                    <a
                        className="text-black/70 hover:text-black duration-100"
                        href="/animals"
                    >
                        Animals
                    </a>
                </div>
            </div>
        </nav>
    );
}
