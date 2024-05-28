// import { type } from "@testing-library/user-event/dist/type";

function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className='start'>
      <h2>Frontend Development Exam | June/2024 Exam </h2>
      <h3>{numQuestions} Questions </h3>
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: "start" })}
      >
        Start Exam
      </button>
    </div>
  );
}

export default StartScreen;
