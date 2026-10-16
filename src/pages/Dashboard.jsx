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
        handleStatusChange,
        machineCodingStatus,
        handleMachineCodingStatusChange,
    } = useInterviewTracker();

    return (
        <div className="page-container">
            <main className="app">
                <Header />
                <Statistics
                    questions={questions}
                    machineCodingStatus={machineCodingStatus}
                    onMachineCodingStatusChange={handleMachineCodingStatusChange}
                />
                <Progress questions={questions} />
                <AddQuestionForm onAddQuestion={handleAddQuestion} />
                <QuestionList
                    questions={questions}
                    onStatusChange={handleStatusChange}
                />
            </main>
        </div>
    )
}

export default Dashboard