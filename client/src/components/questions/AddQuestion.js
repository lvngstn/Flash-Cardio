import React, { useState } from "react";
import Question from "../../models/Question";

export default function AddQuestion({ list, setList }) {
    const [problem, setProblem] = useState('');

  // Handle change in the problem input
  function handleProblemChange(event) {
    setProblem(event.target.value);
  }

  // Handle Add for problem
  function handleProblemAdd() {
    const newQuestion = new Question(problem);
    setList(prevList => [...prevList, newQuestion]);
    setProblem('');  // Clear input field after adding
  }

    return (
        <div>
          <header>
            <input 
                className='basic-input'
                type="text"
                value={problem}
                onChange={handleProblemChange}
                placeholder="Type the new Question here" />
          </header>
          <header>
              <div>
                  <button className="main-button" onClick={handleProblemAdd}>Add Question</button>  
              </div>
          </header>  
        </div>
    );
  }
