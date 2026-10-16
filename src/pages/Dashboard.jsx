import React, { useState } from 'react'
import Header from '../components/Header'
import Statistics from '../components/Statistics'
import Progress from '../components/Progress'
import AddQuestionForm from '../components/AddQuestionForm'
import QuestionList from '../components/QuestionList'
import useInterviewTracker from '../hook/useInterviewTracker'
import QuestionFilters from "../components/QuestionFilters";
const Dashboard = () => {
    const {
        questions,
        handleAddQuestion,
        handleStatusChange,
        machineCodingStatus,
        handleMachineCodingStatusChange,
    } = useInterviewTracker();

    const [searchText, setSearchText] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedDifficulty, setSelectedDifficulty] = useState("All");
    const [selectedStatus, setSelectedStatus] = useState("All");
    const filteredQuestions = questions.filter((question) => {
        const matchesSearch = question.title
            .toLowerCase()
            .includes(searchText.toLowerCase());

        const matchesCategory =
            selectedCategory === "All" ||
            question.category === selectedCategory;

        const matchesDifficulty =
            selectedDifficulty === "All" ||
            question.difficulty === selectedDifficulty;

        const matchesStatus =
            selectedStatus === "All" ||
            question.status === selectedStatus;

        return (
            matchesSearch &&
            matchesCategory &&
            matchesDifficulty &&
            matchesStatus
        );
    });
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
                <QuestionFilters
                    searchText={searchText}
                    setSearchText={setSearchText}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    selectedDifficulty={selectedDifficulty}
                    setSelectedDifficulty={setSelectedDifficulty}
                    selectedStatus={selectedStatus}
                    setSelectedStatus={setSelectedStatus}
                />
                <QuestionList
                    questions={filteredQuestions}
                    onStatusChange={handleStatusChange}
                    totalQuestions={questions.length}
                />
            </main>
        </div>
    )
}

export default Dashboard