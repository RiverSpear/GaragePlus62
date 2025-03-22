import { useState } from "react";
import { motion } from "framer-motion";

const Accordion = ({
    question,
    answer,
    containerClass,
    questionClass,
    iconClass,
    answerClass,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`${containerClass} transition-all duration-300`}
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="flex justify-between items-center">
                <p
                    className={`${questionClass} ${
                        isOpen ? "text-amber-500" : "text-black"
                    }`}
                >
                    {question}
                </p>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {isOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className={iconClass}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m4.5 15.75 7.5-7.5 7.5 7.5"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className={iconClass}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m4.5 15.75 7.5-7.5 7.5 7.5"
                            />
                        </svg>
                    )}
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                    opacity: isOpen ? 1 : 0,
                    height: isOpen ? "auto" : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
            >
                <p className={answerClass}>{answer}</p>
            </motion.div>
        </div>
    );
};

export default Accordion;
