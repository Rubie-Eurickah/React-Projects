import "./styles.css";
import React from "react"
import { useState } from "react";


function App()
{

  const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

  const [currentQuestion, setCurrentQuestion] = useState(0)

  const [showScore, setShowScore] = useState(false)

  const [score, setScore] = useState(0)

  const handleAnswerButtonclick = (isCorrect) => {
    if(isCorrect === true)
    {
      setScore(score + 1)
    }

      const nextQuestion = currentQuestion + 1
      if(nextQuestion < questions.length)
      {
        setCurrentQuestion(nextQuestion)
      }
      else
      {
        setShowScore(true)
      }
  }

	return (
		<div className='app'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1 }</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOptions)=> (
            <button onClick={()=>handleAnswerButtonclick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>
            ))}
					</div>
				</>
			)}
		</div>
	);

}

/*
Registration form 

function App()
{
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: ""
  })

  const [submitted, setSubmitted] = useState(false)
  const [valid, setValid] = useState(false)

  const handleSubmitted = (event) => {
    event.preventDefault()
    if(values.firstName && values.lastName && values.email)
    {
      setValid(true)
    }
    setSubmitted(true)   
    }

  const handleFirstNameChange = (event) => {
    setValues({
    ...values,
      firstName: event.target.value
    }) 
  }

  const handleLastNameChange = (event) => {
    setValues({
    ...values,
      lastName: event.target.value
    })
  }

  const handleEmailChange = (event) => {
    setValues({
   ...values,
   email: event.target.value
    })
  }

  return(
    <div className="login-form-container">
      <form className="form-row" onSubmit={handleSubmitted}>
        {submitted && valid ? <div className="success-message">Success! Thank you for registering</div> : null}
       <input type="text" placeholder="First Name" className="box" name="firstName" value={values.firstName} onChange={handleFirstNameChange}/>
       {submitted && !values.firstName ? <span> * Please enter your first name</span> : null}
       <input type="text" placeholder="Last Name" className="box" name="lastName" value={values.lastName} onChange={handleLastNameChange}/>
       {submitted && !values.lastName ? <span> * Please enter your last name</span> : null}
       <input type="text" placeholder="Email" className="box" name="email" value={values.email} onChange={handleEmailChange}/>
       {submitted && !values.email ? <span> * Please enter your email</span> : null}
      <input type="submit" value="Register" className="btn"/>
      </form>
    </div>
  )
}
*/

/*
Search Filter Code

import JSONDATA from "./MOCK_DATA.json";
function App() {
  const [searchTerm, setSearchTerm] = useState(0);

  return (
    <div className="form">
      <div className="form-row">
        <label htmlFor="search">Search Here</label>
        <input
          type="text"
          id="search"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />

        {JSONDATA.filter((val) => {
          if (searchTerm === "") return false

          return val.first_name.toLowerCase().includes(searchTerm.toLowerCase())

        }).map((val, key) => {
          return (
            <div key={key}>
              <p>{val.first_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
*/


/* 
This is a simple temperature control Application...

function App()
{
const [temperature, setTemperature] = useState(10)
const [color, setColor] = useState("cold")

function increaseTemperature() {
  if(temperature === 30) return

  const newTemperature = temperature + 1

  if(newTemperature >= 15)
  {
    setColor("hot")
  }
  setTemperature(newTemperature)
}

function decreaseTemperature() {
  if(temperature === 0) return

  const newTemperature = temperature - 1

  if(newTemperature < 15)
  {
    setColor("cold")
  }

  setTemperature(newTemperature)
}
  return (
    <div className="app-container">
      <div className="temperature-display-container">
      <div className={`temperature-display ${color}`}>{temperature}°C</div>
      </div>

      <div className="button-container">
        <button onClick={() => increaseTemperature()}>+</button>
        <button onClick={() => decreaseTemperature()}>-</button>
      </div>
    </div>
  )
}
*/

export default App;
