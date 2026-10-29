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
                    className="absolute top-3 right-3"
                >
                    X
                </button>

                <h2>Options</h2>

                <hr className="p-2"></hr>

                <div>
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

                <hr className="p-2"></hr>

                <div>
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
