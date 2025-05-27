import React from 'react';

const Header = (props) => {
  console.log('Header props:', props); // e.g., { course: 'Half Stack application development' }
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  console.log('Part props:', props); // e.g., { name: 'Fundamentals of React', exercises: 10 }
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  );
};

const Content = (props) => {
  console.log('Content props:', props); // e.g., { part1: {...}, part2: {...}, part3: {...} }
  return (
    <div>
      <Part name={props.part1.name} exercises={props.part1.exercises} />
      <Part name={props.part2.name} exercises={props.part2.exercises} />
      <Part name={props.part3.name} exercises={props.part3.exercises} />
    </div>
  );
};

const Total = (props) => {
  console.log('Total props:', props); // e.g., { exercises1: 10, exercises2: 7, exercises3: 14 }
  const totalExercises = props.exercises1 + props.exercises2 + props.exercises3;
  return (
    <p>Number of exercises {totalExercises}</p>
  );
};

const App = () => {
  const course = 'Half Stack application development';
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  };
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  };
  const part3 = {
    name: 'State of a component',
    exercises: 14
  };

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total 
        exercises1={part1.exercises} 
        exercises2={part2.exercises} 
        exercises3={part3.exercises} 
      />
    </div>
  );
};

export default App;