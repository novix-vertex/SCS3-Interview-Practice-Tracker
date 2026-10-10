import React from 'react'

const Statistics = () => {
    return (
        <section className="dashboard">
            <h2>Your Preparation</h2>

            <div className="dashboard-cards">
                <div className="dashboard-card">
                    <h3>Total Questions</h3>
                    <p>0</p>
                </div>

                <div className="dashboard-card">
                    <h3>Completed DSA</h3>
                    <p>0</p>
                </div>

                <div className="dashboard-card">
                    <h3>Completed Interview Questions</h3>
                    <p>0</p>
                </div>

                <div className="dashboard-card">
                    <h3>Machine Coding</h3>
                    <select>
                        <option value="Not Started">Not Started</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>
            </div>

        </section>
    )
}

export default Statistics