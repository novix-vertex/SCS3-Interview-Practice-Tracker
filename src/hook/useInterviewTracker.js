import { nanoid } from 'nanoid'
import { useEffect, useState } from "react";

const initialQuestions = [
    {
        id: nanoid(),
        title: "Reverse a linked list",
        category: "DSA",
        difficulty: "Medium",
        status: "Completed"
    },
    {
        id: nanoid(),
        title: "Git merge vs rebase",
        category: "Git",
        difficulty: "Easy",
        status: "Pending"
    },
    {
        id: nanoid(),
        title: "Explain JWT",
        category: "Technical",
        difficulty: "Medium",
        status: "In Progress"
    }
];

const useInterviewTracker = () => {
    const [questions, setQuestions] = useState(() => {
        try {
            const savedQuestions = localStorage.getItem("questions");
            if (savedQuestions) {
                return JSON.parse(savedQuestions);
            }
        } catch (error) {
            console.error("Local Storage Data Fetching Error:", error);
        }
        return initialQuestions;
    });

    useEffect(() => {
        localStorage.setItem("questions", JSON.stringify(questions));
    }, [questions]);

    const [machineCodingStatus, setMachineCodingStatus] = useState(() =>
        localStorage.getItem("machineCodingStatus") || "Not Started"
    );
    const handleAddQuestion = (newQuestion) => {
        setQuestions((previousQuestions) => [...previousQuestions, { ...newQuestion, id: nanoid(), status: "Pending" }]);
    }

    const handleStatusChange = (questionId, newStatus) => {
        setQuestions((previousQuestions) =>
            previousQuestions.map((question) =>
                question.id === questionId
                    ? { ...question, status: newStatus }
                    : question)
        );
    };

    const handleMachineCodingStatusChange = (newStatus) => {
        setMachineCodingStatus(newStatus);
        localStorage.setItem("machineCodingStatus", newStatus);

    };

    return {
        questions,
        handleAddQuestion,
        handleStatusChange,
        machineCodingStatus,
        handleMachineCodingStatusChange
    }
}

export default useInterviewTracker
