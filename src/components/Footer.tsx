import Logo from "./Logo";

export default function Footer() {
    return (
        <footer className="bg-beige-500 body-font py-4">
            <div className="container mx-auto flex items-center sm:flex-row flex-col">
                <Logo />
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-600 sm:mt-0 mt-4">
                    © 2023 GreekCage Zoo
                </p>
                <div className="flex gap-8 sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a href="/privacy">Privacy Policy</a>
                    <a href="/imprint">Imprint</a>
                </div>
            </div>
        </footer>
    );
}
