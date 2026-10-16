
const QuestionCard = ({ question, onStatusChange }) => {
  const handleChange = (e) => {
    onStatusChange(question.id, e.target.value);
  }
  return (
    <article className="question-card">
      <div className="question-details">
        <h3>{question.title}</h3>

        <div className="question-info">
          <span>{question.category}</span>
          <span>{question.difficulty}</span>
        </div>

        <label htmlFor={`status-${question.id}`}>
          Status
        </label>

        <select
          id={`status-${question.id}`}
          value={question.status}
          onChange={handleChange}
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
    </article>
  );
};

export default QuestionCard;