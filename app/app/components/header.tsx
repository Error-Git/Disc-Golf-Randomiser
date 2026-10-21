

export default function Header() {
    return (
        <header className="w-full flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-gray-800">
            <span className="font-semibold text-lg tracking-tight">Disc Golf Randomiser</span>

            <button
                aria-label="Open options"
                className="p-2 text-3xl rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
            >
                ☰
            </button>
        </header>
    );
}