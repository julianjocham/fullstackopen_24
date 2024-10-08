const App = () => {
  const courses = [
      {
        name: 'Half Stack application development',
        id: 1,
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10,
            id: 1
          },
          {
            name: 'Using props to pass data',
            exercises: 7,
            id: 2
          },
          {
            name: 'State of a component',
            exercises: 14,
            id: 3
          },
          {
            name: 'Redux',
            exercises: 11,
            id: 4
          }
        ]
      },
      {
        name: 'Node.js',
        id: 2,
        parts: [
          {
            name: 'Routing',
            exercises: 3,
            id: 1
          },
          {
            name: 'Middlewares',
            exercises: 7,
            id: 2
          }
        ]
      }
    ]

  return <>
  {courses?.map((course)=>(<Course course={course}/>))}
  </>
}

const Course = ({ course }) => {
const totalExercises = course?.parts?.reduce((sum, part) => sum + part?.exercises, 0);
    return (
        <>
           <Header name={course?.name}/>
           {course?.parts?.map((part) => (
               <Part key={part.id} name={part.name} exercises={part.exercises}/>
           ))}
           <h4>total of {totalExercises} exercises</h4>
        </>
    )
}

const Header = (props) => {
    return <h1>{props?.name}</h1>
}

const Part = (props) => {
    return (
        <p>{props?.name} {props?.exercises}</p>
    )
}

export default App