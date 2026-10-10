import React from 'react'

const Progress = () => {
    return (
        <div className="progress-section">
            <div className="progress-heading">
                <h3>Overall Progress</h3>
                <span>0%</span>
            </div>

            <div className="progress-track">
                <div
                    className="progress-fill"
                    style={{ width: `50%` }}
                />
            </div>
        </div>
        )
}

export default Progress