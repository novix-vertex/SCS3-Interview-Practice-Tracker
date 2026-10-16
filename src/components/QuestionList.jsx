import React from 'react'
import QuestionCard from './QuestionCard';

const QuestionList = ({ questions, totalQuestions, onStatusChange }) => {

    return (
        <section className="question-list-section">
            <h2>Questions</h2>
            <div className="question-list">
                {
                    questions.length === 0 ? (
                        <p className="empty-state">
                            {totalQuestions === 0
                                ? "No questions added yet. Add your first question above."
                                : "No matching questions found. Try changing your search or filters."}                        </p>
                    ) : (
                        questions.map((question) => (
                            <QuestionCard
                                key={question.id}
                                question={question}
                                onStatusChange={onStatusChange}
                            />
                        ))
                    )
                }
            </div>
        </section>
    )
}

export default QuestionList