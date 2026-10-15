import React, { useState } from 'react'

const AddQuestionForm = ({ onAddQuestion }) => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("DSA");
    const [difficulty, setDifficulty] = useState("Easy");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim()) {
            return;
        }

        onAddQuestion({
            title: title.trim(),
            category,
            difficulty
        });

        setTitle("");
        setCategory("DSA");
        setDifficulty("Easy");
    }
    return (
        <section className="add-question-section">
            <h2 className="add-question-section-heading">Add a Question</h2>

            <form onSubmit={handleSubmit} className="question-form">
                <label htmlFor="question-title">Question</label>
                <input
                    id="question-title"
                    type="text"
                    placeholder="Enter a question"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />

                <label htmlFor="question-category">Category</label>
                <select
                    id="question-category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}>
                    <option value="DSA">DSA</option>
                    <option value="Git">Git</option>
                    <option value="Technical">Technical</option>
                </select>

                <label htmlFor="question-difficulty">Difficulty</label>
                <select
                    id="question-difficulty"
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}>
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