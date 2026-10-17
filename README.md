# Interview Practice Tracker

A simple React-based web application to track interview preparation, manage questions, monitor progress, and keep track of machine-coding practice.

## Features

### Dashboard Statistics
- View the total number of questions.
- Track completed DSA questions.
- Track completed interview questions across Git and Technical categories.
- Update machine-coding practice status.

### Question Management
- Add questions with a title, category, and difficulty. 
- Supported categories: DSA, Git, Technical.
- Supported difficulty levels: Easy, Medium, Hard.
- Update question status to Pending, In Progress, or Completed.

### Search and Filters
- Search questions by title.
- Filter questions by category.
- Filter questions by difficulty.
- Filter questions by status.
- Combine search and filters to find specific questions.

### Progress Tracking
- View overall preparation progress as a percentage.
- Track progress based on completed questions.
- See dashboard statistics update when question statuses change.

### Data Persistence
- Save questions and machine-coding status in browser LocalStorage.
- Retain saved data when the page is refreshed in the same browser.

### User Interface
- Responsive layout for desktop, tablet, and mobile devices.
- Empty state when no questions have been added.
- Helpful message when search or filters return no matching questions.
- Basic form validation to prevent empty question titles.

*Note: Given Requirements didn't ask to have edit/delete question feature, It was specifically mentioning having create question. Also it was time bound project so I followed the document and have not added these two features.*


## Technology Stack

- **React** – Build the user interface using components.
- **JavaScript** – Handle application logic and interactions.
- **CSS** – Style the application and create a responsive layout.
- **Vite** – Development server and production build tool.
- **LocalStorage** – Persist application data in the browser.
- **nanoid** – Generate unique IDs for questions.

## Prerequisites

Before running the project, ensure you have installed:

- [Node.js](https://nodejs.org/) — preferably an active LTS version.
- npm, which is included with Node.js.

## Setup and Installation

### 1. Clone the repository

If you have the project repository URL, clone it using:

```bash
git clone <repository-url>
```

Alternatively, open the project folder directly if you already have the source code.

### 2. Navigate to the project directory

```bash
cd interview-practice-tracker
```

Use your actual project folder name if it differs.

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173
```

## How to Use

1. Open the application in your browser.
2. Add a question by entering its title and selecting a category and difficulty.
3. Change the question status as you make progress.
4. Use search and filters to find questions.
5. Review dashboard statistics and overall preparation progress.
6. Update your machine-coding status as you practice.
7. Refresh the page to verify that your data remains saved.

## Project Structure

The application separates the dashboard, reusable UI components, and state management logic.

```text
src/
├── components/
│   ├── AddQuestionForm.jsx
│   ├── Header.jsx
│   ├── Progress.jsx
│   ├── QuestionCard.jsx
│   ├── QuestionFilters.jsx
│   ├── QuestionList.jsx
│   └── Statistics.jsx
├── hooks/
│   └── useInterviewTracker.js
├── pages/
│   └── Dashboard.jsx
├── App.jsx
├── index.css
└── main.jsx
```

*Note: This structure reflects the current implementation; adjust the filenames if your project differs.*

## Assumptions

- The application is intended for individual interview preparation.
- Questions are created by the user; there is no external question database.
- Each question belongs to one category and has one difficulty level and one status.
- Git and Technical questions are counted together as completed interview questions.
- Overall progress is calculated as the percentage of all questions marked Completed.
- Machine-coding practice is tracked separately from the question list.
- Questions and machine-coding status are stored locally in the browser.
- The application starts with an empty question list for a new user with no previously saved data.
- The browser's LocalStorage is available and enabled.

## Limitations

- No backend or database is used.
- No user registration, login, or authentication is provided.
- Data is stored per browser and origin, so it is not automatically shared across devices or browsers.
- Clearing browser storage may remove saved progress.
- Questions cannot be synchronized between users.
- The application does not currently provide advanced features such as reminders or shared preparation plans.

## Future Improvements

Potential enhancements include:

- Edit and delete questions.
- Add notes, solution links, and revision dates.
- Track daily and weekly preparation goals.
- Export and import question data.
- Add charts for category-wise progress.
- Add user accounts.

