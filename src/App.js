import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
const [questions, setQuestions] = useState(data)
  return <main>
    <div className=' container'>
      <h4> questions and answers about login</h4>
      <section className='info'>
        {questions.map((q)=> {
        
        return <SingleQuestion {...q} key={questions.id}></SingleQuestion>

        
        })}
        
        
        </section> 

    </div>

  </main>


  }

export default App;
