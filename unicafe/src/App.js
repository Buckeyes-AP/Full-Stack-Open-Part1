import { useState } from 'react';

const Statistics = ({ good, neutral, bad, total, average, positive }) => {
  console.log({good, neutral, bad, total});
  if ( total === 0 ) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>total {total}</p>
      <p>average {average}</p>
      <p>positive {positive}</p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);


  const increaseGood = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
    const updatedTotal = neutral + bad + updatedGood;
    setTotal(updatedTotal);
    const updatedAverage = (updatedGood - bad) / updatedTotal;
    setAverage(updatedAverage);
    const updatePositive = (updatedGood / updatedTotal) * 100 + " %";
    setPositive(updatePositive);
  }
  const increaseNeutral = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    const updatedTotal = good + bad + updatedNeutral;
    setTotal(updatedTotal);
    const updatePositive = (good / updatedTotal) * 100 + " %";
    setPositive(updatePositive);
    setAverage((good - bad) / total);
  }
  const increaseBad = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
    const updatedTotal = good + neutral + updatedBad;
    setTotal(updatedTotal);
    const updatedAverage = (good - updatedBad) / updatedTotal;
    setAverage(updatedAverage);
    const updatePositive = (good / updatedTotal) * 100 + " %";
    setPositive(updatePositive);
    setAverage((good - updatedBad) / total)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={increaseGood}>good</button>
      <button onClick={increaseNeutral}>neutral</button>
      <button onClick={increaseBad}>bad</button>
      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} total={total} average={average} positive={positive}/>
    </div>
  )
}
 


export default App;
