"use client";

interface OptionsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function OptionsModal({ isOpen, onClose }: OptionsModalProps) {
    if (!isOpen) {
        return null;
    }

    return (
        <div
            onClick={onClose}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-100"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg relative w-full max-w-sm"
            >
                <button
                    onClick={onClose}
                    aria-label="Close options"
                    className="absolute top-2 right-3 text-2xl"
                >
                    ✕
                </button>

                <h2
                    className="mb-4 text-lg font-bold"
                >Options</h2>

                <hr></hr>

                <div className="mt-3 mb-3">
                    <p>Source code:</p>
                    <a
                        href="https://github.com/Error-Git/Disc-Golf-Randomiser"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 underline"
                    >
                        GitHub
                    </a>
                </div>

                <hr></hr>

                <div className="mt-3">
                    <p>Please report bugs and/or issues here:</p>
                    <a
                        href="https://github.com/Error-Git/Disc-Golf-Randomiser/issues"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 underline"
                    >
                        Report
                    </a>
                </div>
            </div>
        </div>
    );
}
