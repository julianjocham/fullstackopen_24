import { useState } from 'react'


const StatisticsLine = (props) => {

    const { text, value } = props

    return <p>{text} {value}</p>

}

const Statistics = (props) => {

   const { good, neutral , bad } = props

    return <div>
      <h2>statistics</h2>
      <StatisticsLine text="good" value={good} />
      <StatisticsLine text="neutral" value={neutral} />
      <StatisticsLine text="bad" value={bad} />
      <StatisticsLine text="all" value={good + neutral + bad} />
      <StatisticsLine text="average" value={(good - bad) / (good + neutral + bad)} />
      <StatisticsLine text="positive" value={good / (good + neutral + bad)} />
    </div>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={()=>setGood(good+1)} name="good"/>
      <Button handleClick={()=>setNeutral(neutral+1)} name="neutral"/>
      <Button handleClick={()=>setBad(bad+1)} name="bad"/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

const Button = (props) => {

    return <button onClick={props.handleClick}>{props.name}</button>

}

export default App