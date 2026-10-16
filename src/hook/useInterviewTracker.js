import { nanoid } from 'nanoid'
import { useState } from 'react';

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
    const [questions, setQuestions] = useState(initialQuestions);
    const [machineCodingStatus, setMachineCodingStatus] = useState("Not Started");

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
