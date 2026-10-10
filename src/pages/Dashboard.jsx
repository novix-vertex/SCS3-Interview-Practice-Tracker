import React from 'react'
import Header from '../components/Header'
import Statistics from '../components/Statistics'
import Progress from '../components/Progress'
import AddQuestionForm from '../components/AddQuestionForm'
import QuestionList from '../components/QuestionList'

const Dashboard = () => {
    return (
        <div className="page-container">
            <main className="app">
                <Header />
                <Statistics />
                <Progress />
                <AddQuestionForm />
                <QuestionList />
            </main>
        </div>
    )
}

export default Dashboard