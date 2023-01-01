const Header = ({course}) => {
    return (
      <h1>{course.name}</h1>
    )
  }
  
  const Part = (props) => {
    const item = props.part
    return (
      <p>{item.name} {item.exercises}</p>
    )
  }
  
  const Content = ({parts}) => {
    return (
      <div>
        {
          parts.map(part =>
            <Part key={part.id} part={part}/>
          )
        }
      </div>
    )
  }
  
  const Total = ({parts}) => {
    const sum = parts.reduce((a, b) => a + b.exercises, 0);
    return (
      <p><b>Total of {sum} exercises </b></p>
    )
  }
  
  const Course = ({course}) => {
    return (
      <div>
        <Header course={course}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
      </div>
    )
  }

export default Course