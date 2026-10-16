import React from 'react'
import Header from '../components/Header'
import Statistics from '../components/Statistics'
import Progress from '../components/Progress'
import AddQuestionForm from '../components/AddQuestionForm'
import QuestionList from '../components/QuestionList'
import useInterviewTracker from '../hook/useInterviewTracker'

const Dashboard = () => {
    const {
        questions,
        handleAddQuestion,
        handleStatusChanged
    } = useInterviewTracker();

    return (
        <div className="page-container">
            <main className="app">
                <Header />
                <Statistics
                    questions={questions}
                />
                <Progress questions={questions} />
                <AddQuestionForm onAddQuestion={handleAddQuestion} />
                <QuestionList
                    questions={questions}
                    onStatusChange={handleStatusChanged}
                />
            </main>
        </div>
    )
}

export default Dashboard