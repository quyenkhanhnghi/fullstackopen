// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return (
//     <div>
//       <h1>{course}</h1>
//       <p>
//         {part1} {exercises1}
//       </p>
//       <p>
//         {part2} {exercises2}
//       </p>
//       <p>
//         {part3} {exercises3}
//       </p>
//       <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
//     </div>
//   )
// }
const Header = (props) => {
  return (
    <h1>{props.name}</h1>
  )
}

const Part = (props) => {
  const item = props.part
  return (
    <p>{item.part} {item.exercises}</p>
  )
}

const Content = (props) => {
  const parts = props.parts
  return (
    parts.map((part =>
      <div>
        <Part part={part}/>
      </div>))
  )
  
    // course.map((element) => 
    //   <p key={element.part}>
    //     {element.part} {element.exercises}
    //   </p>
    // )
}

const Total = (props) => {
  const parts = props.parts;

  const sum = parts.reduce((a, c) => a + c.exercises, 0);
  return (
    <p> Number of exercises {sum} </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: 
      [
        {
          part: 'Fundamentals of React',
          exercises: 10
        },
        {
          part: 'Using props to pass data',
          exercises: 7,
        },
        {
          part: 'State of a component',
          exercises: 14,
        }
      ]
  }

  return (
    <div>
      <Header course={course}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}
export default App