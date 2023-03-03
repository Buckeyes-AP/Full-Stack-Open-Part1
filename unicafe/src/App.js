import { useState } from 'react';

const Statistics = (props) => {
  return (
    <div>
      <p>{props.text} {props.value}</p>
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
    // setAverage((good - bad) / total);
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
    // setAverage((good - updatedBad) / total)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={increaseGood}>good</button>
      <button onClick={increaseNeutral}>neutral</button>
      <button onClick={increaseBad}>bad</button>
      <h1>statistics</h1>
      <Statistics text="good" value={good}/>
      <Statistics text="neutral" value={neutral}/>
      <Statistics text="bad" value={bad}/>
      <Statistics text="total" value={total}/>
      <Statistics text="average" value={average}/>
      <Statistics text="positive" value={positive}/>
    </div>
  )
}
 


export default App;
