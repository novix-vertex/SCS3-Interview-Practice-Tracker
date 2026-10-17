import React, { useState } from 'react'

const AddQuestionForm = ({ onAddQuestion }) => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("DSA");
    const [difficulty, setDifficulty] = useState("Easy");
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim()) {
            setError("Please enter a question title");
            return;
        }

        setError("");
        onAddQuestion({
            title: title.trim(),
            category,
            difficulty
        });
        setSuccessMessage("Question added successfully!");

        setTitle("");
        setCategory("DSA");
        setDifficulty("Easy");
    }

    return (
        <section className="add-question-section">
            <h2 className="add-question-section-heading">Add a Question</h2>

            <form onSubmit={handleSubmit} className="question-form">
                <div className="form-field question-field">
                    <label htmlFor="question-title">Question</label>
                    <input
                        id="question-title"
                        type="text"
                        placeholder="Enter a question"
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value);
                            setError("");
                            setSuccessMessage("");
                        }}
                        required
                    />
                    {error && <p className="form-error">{error}</p>}
                </div>

                <div className="form-field">
                    <label htmlFor="question-category">Category</label>
                    <select
                        id="question-category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="DSA">DSA</option>
                        <option value="Git">Git</option>
                        <option value="Technical">Technical</option>
                    </select>
                </div>

                <div className="form-field">
                    <label htmlFor="question-difficulty">Difficulty</label>
                    <select
                        id="question-difficulty"
                        value={difficulty}
                        onChange={(e) => setDifficulty(e.target.value)}
                    >
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>

                <button type="submit">Add Question</button>
            </form>
            {successMessage && (
                <p className="success-message">{successMessage}</p>
            )}
        </section>
    );

}

export default AddQuestionForm