"use client";

import { useState } from "react";
import OptionsModal from "@/app/components/options-modal";

export default function Header() {
    const [isOptionsOpen, setIsOptionsOpen] = useState(false);

    return (
        <>
            <header className="w-full flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-gray-800">
                <span className="font-semibold text-lg tracking-tight">Disc Golf Randomiser</span>

                <button
                    onClick={() => setIsOptionsOpen(true)}
                    aria-label="Open options"
                    className="p-2 text-3xl rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                >
                    ☰
                </button>
            </header>

            <OptionsModal
                isOpen={isOptionsOpen}
                onClose={() => setIsOptionsOpen(false)}
            />
        </>
    );
}