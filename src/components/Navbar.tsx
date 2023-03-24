import Logo from "./Logo";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center py-3 px-12 border-b shadow bg-beige-500">
            <div className="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
                <Logo />
                <div className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-8">
                    <a href="/">Home</a>
                    <a href="/information">Information</a>
                    <a href="/animals">Animals</a>
                </div>
            </div>
        </nav>
    );
}
