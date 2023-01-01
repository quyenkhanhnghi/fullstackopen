import { useState } from 'react'

const Button = ({click, text}) => {
  return (
    <button onClick={click}>{text}</button>
  )
}

const Display = ({voted, anecdotes}) => {
  const largest = Math.max(...voted);
  const index = voted.indexOf(largest);
  return (
    <>
      <div>{anecdotes[index]}</div>
      <div>has {largest} votes</div>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  const anecdote_length = anecdotes.length;
  const [selected, setSelected] = useState(0);
  const [voted, setVoted] = useState(Array(anecdote_length).fill(0));

  const nextAnecdote = () => {
    const randomItem = Math.floor(Math.random() * anecdote_length);
    setSelected(randomItem);
  }

  const voteAnecdote = () => {
    const newVote = [...voted];
    newVote[selected] += 1;
    setVoted(newVote);
  }

  return (
    <div>
      <div>{anecdotes[selected]}</div>
      <div>has {voted[selected]} votes</div>
      <Button click={voteAnecdote} text='vote'/>
      <Button click={nextAnecdote} text={'next anectdotes'}/>
      <Display voted={voted} anecdotes={anecdotes}/>
    </div>
  )
}

export default App