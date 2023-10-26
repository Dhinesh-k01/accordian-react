import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';

function App() {
  // its's not necessary to useState
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className='container'>
        <h2>Questions and answer about login</h2>
        <section className='info'>
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
