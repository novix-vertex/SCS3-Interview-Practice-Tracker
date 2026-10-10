import React from 'react'

const AddQuestionForm = () => {
    const handleSubmit = () => {

    }
    return (
        <section className="add-question-section">
            <h2>Add a Question</h2>

            <form onSubmit={handleSubmit} className="question-form">
                <label htmlFor="question-title">Question</label>
                <input
                    id="question-title"
                    type="text"
                    placeholder="Enter a question"
                    required
                />

                <label htmlFor="question-category">Category</label>
                <select id="question-category">
                    <option value="DSA">DSA</option>
                    <option value="Git">Git</option>
                    <option value="Technical">Technical</option>
                </select>

                <label htmlFor="question-difficulty">Difficulty</label>
                <select id="question-difficulty">
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>

                <button type="submit">Add Question</button>
            </form>
        </section>
    )
}

export default AddQuestionForm