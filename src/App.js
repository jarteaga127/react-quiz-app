import React, { useState } from 'react';

function App() {

const questions = [
{
  questionText: "Who wrote Your Lie in April?",
  answerOptions: [
    {answerText: "Akira Toriyama", isCorrect: false},
    {answerText: "Naoshi Arakawa", isCorrect: true}, 
    {answerText: "Hajime Isama", isCorrect: false},
    {answerText: "Hiroaki Araki", isCorrect: false}
  ]
},
{
  questionText: "What part of Tokyo is the setting of Your Lie in April modeled after?",
  answerOptions: [
    {answerText: "Shinjuku", isCorrect: false},
    {answerText: "Itabashi", isCorrect: false}, 
    {answerText: "Nerima", isCorrect: true},
    {answerText: "Arakawa", isCorrect: false}
  ]
},
{
  questionText: "What is Kawori Miyazono's favorite dessert?",
  answerOptions: [
    {answerText: "Canele", isCorrect: true},
    {answerText: "Croissants", isCorrect: false}, 
    {answerText: "Shortbread cookies", isCorrect: false},
    {answerText: "Frosty chocolate milkshakes", isCorrect: false}
  ]
},
{
  questionText: "Which animation studio produced Your Lie in April?",
  answerOptions: [
    {answerText: "A-1 Pictures", isCorrect: true},
    {answerText: "Production I.G.", isCorrect: false}, 
    {answerText: "Silver Link", isCorrect: false},
    {answerText: "Liden Films", isCorrect: false}
  ]
},
{
  questionText: "Who voices Kosei Arima in the original Japanese version?",
  answerOptions: [
    {answerText: "Yuki Kaji", isCorrect: false},
    {answerText: "Natsuki Hanae", isCorrect: true}, 
    {answerText: "Daisuke Ono", isCorrect: false},
    {answerText: "Masako Yonezawa", isCorrect: false}
  ]
},
{
  questionText: "What was the name of Kosei's cat?",
  answerOptions: [
    {answerText: "Twix", isCorrect: false},
    {answerText: "Frieza", isCorrect: false}, 
    {answerText: "Chelsea", isCorrect: true},
    {answerText: "Milky", isCorrect: false}
  ]
},
{
  questionText: "What drink were Kosei and Tsubaki drinking in episode 20 of the anime?",
  answerOptions: [
    {answerText: "Hot Lemonade", isCorrect: true},
    {answerText: "Pepsi", isCorrect: false}, 
    {answerText: "Green Tea", isCorrect: false},
    {answerText: "Surge", isCorrect: false}
  ]
},
{
  questionText: "What flavored popsicle was Kosei eating in episode 14 of the anime?",
  answerOptions: [
    {answerText: "Yuzu", isCorrect: false},
    {answerText: "Blueberry", isCorrect: false}, 
    {answerText: "Chocolate", isCorrect: false},
    {answerText: "Milk", isCorrect: true}
  ]
},
{
  questionText: "Who voiced Kawori Miyazono in the original Japanese version?",
  answerOptions: [
    {answerText: "Ayane Sakura", isCorrect: false},
    {answerText: "Ai Kayano", isCorrect: false}, 
    {answerText: "Risa Taneda", isCorrect: true},
    {answerText: "Inori Minase", isCorrect: false}
  ]
},
{
  questionText: "The song that Kaori plays on the melodica at the beginning of the anime is a reference to which Hayao Miyazaki film?",
  answerOptions: [
    {answerText: "Kiki's Delivery Service", isCorrect: false},
    {answerText: "Castle in the Sky", isCorrect: true}, 
    {answerText: "Porco Rosso", isCorrect: false},
    {answerText: "The Castle of Cagliostro", isCorrect: false}
  ]
}

];


const [currentQuestion, setCurrentQuestion] = useState(0);
const [showScore, setShowScore] = useState(false);
const [score, setScore] = useState(0);

const restartGame = () => {
  setScore(0);
  setCurrentQuestion(0);
  setShowScore(false);
}

const handleAnswerButtonClick = (isCorrect) => {
  const nextQuestion = currentQuestion + 1;

  if (nextQuestion < questions.length) {
    setCurrentQuestion(nextQuestion);
  } else {
    setShowScore(true);
  }

  if (isCorrect) {
    setScore(score + 1);
  }

}




  return (
    <div className="App">
      {showScore ? (<div className="score-section">
        <h1>How did you do?</h1>
        <h2> You scored {score} out of {questions.length} </h2>
        <p className="result-message"></p>
      <button onClick={restartGame} className="restart-button">Try Again</button>
      </div>): (
        <>
        <div className="question-section">
          <div className="question-count">
            <span>Question {currentQuestion + 1}</span>/{questions.length}
          </div>
      <div className="question-text"><h2> {questions[currentQuestion].questionText}</h2></div>
      </div>
      <div className="answer-section">
        {questions[currentQuestion].answerOptions.map((answerOptions, index) => (
          <button onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)} className="answer-option">{answerOptions.answerText} </button>
        ))}
      </div>
      </>
      )}
    </div>
  );
}

export default App;
