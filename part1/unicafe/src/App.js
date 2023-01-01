import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const StatisticLine = ({value, text}) => {
  return (
    <tr>
      <td>{text} </td>
      <td>{value}</td>
    </tr>
  )
  
}

const Statictics = ({value, all}) => {
  const [good, neutral, bad] = value
  const average = ((good*1 + neutral*0 + bad*(-1))/all).toFixed(1)
  const positive = ((good/all)*100).toFixed(1)
    if (all === 0) {
      return (
        <p>No feedback given</p>
      )
    }

    return (
      <table>
        <tbody>
          <StatisticLine value={good} text='good'/> 
          <StatisticLine value={neutral} text='neutral'/>
          <StatisticLine value={bad} text='bad'/>
          <StatisticLine value={all} text='all'/>
          <StatisticLine value={average} text='average'/>
          <StatisticLine value={positive + ' %'} text='positive'/>
        </tbody>
      </table>
        
    )
  
 
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const goodClick = () => {
    setAll(all + 1)
    setGood(good + 1)
  }

  const neutralClick = () => {
    setAll(all + 1)
    setNeutral(neutral + 1)
  }

  const badClick = () => {
    setAll(all + 1)
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={goodClick} text='good'/>
      <Button handleClick={neutralClick} text='neutral'/>
      <Button handleClick={badClick} text='bad'/>
      <h1>statictics</h1>
      <Statictics value={[good, neutral, bad]} all={all}/>

    </div>
  )
}

export default App