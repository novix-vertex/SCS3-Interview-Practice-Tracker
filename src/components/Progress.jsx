import React from 'react'

const Progress = ({ questions }) => {
    const totalQuestions = questions.length;

    const completedQuestions = questions.filter((question) => question.status === "Completed").length;

    const progressPercentage = totalQuestions === 0 ? 0 : Math.round((completedQuestions / totalQuestions) * 100);

    return (
        <div className="progress-section">
            <div className="progress-heading">
                <h3>Overall Progress</h3>
                <span>{progressPercentage}%</span>
            </div>

            <div className="progress-track">
                <div
                    className="progress-fill"
                    style={{ width: `${progressPercentage}%` }}
                />
            </div>
        </div>
    )
}

export default Progress