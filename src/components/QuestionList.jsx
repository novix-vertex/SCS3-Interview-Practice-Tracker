import React from 'react'
import QuestionCard from './QuestionCard';

const QuestionList = ({questions}) => {
    
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