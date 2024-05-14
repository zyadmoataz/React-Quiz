function Progress({ index, numQuestions, points, totalPoints, answer }) {
  return (
    <header className="progress">
      {/* if there is an answer means it will be true then it will be converted to 1 */}
      {/* if there is no answer means it will be false then it will be converted to 0 as at first there is no answer*/}
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Questions <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        Points <strong>{points}</strong> / {totalPoints}
      </p>
    </header>
  );
}

export default Progress;
