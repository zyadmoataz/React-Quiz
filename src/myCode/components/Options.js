// function Options({ question, dispatch, answer }) {
//   const hasAnswered = answer !== null;
//   return (
//     <div className="options">
//       {question.options.map((option, i) => (
//         <button
//           className={`btn btn-option ${i === answer ? "answer" : ""} ${
//             hasAnswered
//               ? i === question.correctOption
//                 ? "correct"
//                 : "wrong"
//               : ""
//           }`}
//           key={option}
//           onClick={() => dispatch({ type: "newAnswer", payload: i })}
//           disabled={hasAnswered}
//         >
//           {/* when we dont select any answer it will be null, if we select it will = value then it will be disabled */}
//           {option}
//         </button>
//       ))}
//     </div>
//   );
// }

// export default Options;

function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;

  return (
    <div className='options'>
      {question.options.map((option, i) => (
        <button
          className={`btn btn-option ${i === answer ? "answer" : ""} ${
            hasAnswered
              ? i === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: i })}
          disabled={hasAnswered}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
