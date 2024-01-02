import './Survey.css'
import { useState, useEffect } from 'react'
import questions from './Questions'

const Survey = () => {

  const [currentquestion, setCurrentQuestion] = useState(0)
  const [punctuation, setPunctuation] = useState(0)
  const [isFinished, setIsFinished] = useState(false)
  const [timeLeft, setTimeLeft] = useState(10)
  const [isTimeLeft, setIsTimeLeft] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)

  const handleNext = (isCorrect, e) => {

    if (isCorrect) setPunctuation(punctuation + 1)

    e.target.classList.add(isCorrect ? "correct" : "incorrect")

    setTimeout(() => {
      if (currentquestion === questions.length - 1) {
        setIsFinished(true)
      } else {
        setCurrentQuestion(currentquestion + 1)
      }
    }, 800)
  }

  useEffect(() => {

    const interval = setInterval(() => {
      if (timeLeft > 0) setTimeLeft((prev) => prev - 1)
      if (timeLeft === 0) setIsTimeLeft(true)
    }, 1000)

    return () => clearInterval(interval)
  }, [timeLeft])

  if (isFinished) return (
    <div className='survey-body'>
      <div className='survey-container'>
        <div className='gameOver'>
          <h2>You were successful in {punctuation} answers out of {questions.length}</h2>
          <button onClick={() => (window.location.href = '/survey')}>Play again</button>
          <button onClick={() => {
            setIsFinished(false)
            setShowAnswer(true)
            setCurrentQuestion(0)
          }}>Show answers</button>
        </div>
      </div>
    </div>
  )

  if (showAnswer)
    return (
      <div className='survey-body'>
        <div className='survey-container'>
          <div className='survey-questions'>
            <h2>Questions {currentquestion + 1} to {questions.length}</h2>
            <h3>{questions[currentquestion].title}</h3>
            <div>
              {questions[currentquestion].options.filter((answer) => answer.isCorrect)[0].answerText}
            </div>
            <button onClick={() => {
              if (currentquestion === questions.length - 1) {
                window.location.href = "/survey"
              } else {
                setCurrentQuestion(currentquestion + 1)
              }
            }}> {currentquestion === questions.length - 1
              ? "Play again"
              : "Continue"} </button>
          </div>
        </div>
      </div>
    )

  return (
    <>
      <div className='survey-body'>
        <div className='survey-container'>
          <div className='survey-questions'>
            <h2>Questions {currentquestion + 1} to {questions.length}</h2>
            <h3>{questions[currentquestion].title}</h3>
            <div>{!isTimeLeft ? (<h4 className='time-left'>
              Time left: {timeLeft} </h4>)
              : (<button onClick={() => {
                setTimeLeft(10)
                setIsTimeLeft(false)
                setCurrentQuestion(currentquestion + 1)
              }}>Continuar</button>)}
            </div>
          </div>
          <div className='survey-answers'>
            {questions[currentquestion].options.map((answer) => (
              <button disabled={isTimeLeft} className='button-answer' key={answer.answerText} onClick={(e) => handleNext(answer.isCorrect, e)}> {answer.answerText} </button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Survey