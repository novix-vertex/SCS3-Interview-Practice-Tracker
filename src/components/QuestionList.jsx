import { nanoid } from 'nanoid';
import React from 'react'
import QuestionCard from './QuestionCard';

const QuestionList = () => {
    const questions = [
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
    return (
        <section className="question-list-section">
            <h2>Questions</h2>
            <div className="question-list">
                {questions.map((question) => (
                    <QuestionCard
                        key={question.id}
                        question={question}
                    />
                ))}
            </div>
        </section>
    )
}

export default QuestionList