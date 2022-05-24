import React from "react";
import ReactDOM from "react-dom";
import Part from "./Part.js";

const Header = ({ course }) => <h1>{course}</h1>;
const Content = (props) => {
  const { parts, exerc } = props;
  return (
    <>
      <Part part={parts[0]} exercise={exerc[0]} />
      <Part part={parts[1]} exercise={exerc[1]} />
      <Part part={parts[2]} exercise={exerc[2]} />
    </>
  );
};
const Total = ({ total }) => <p>Number of exercises {total}</p>;

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  const { name, parts } = course;

  return (
    <div>
      <Header course={name} />
      <Content
        parts={[parts[0].name, parts[1].name, parts[2].name]}
        exerc={[parts[0].exercises, parts[1].exercises, parts[2].exercises]}
      />
      <Total
        total={parts[0].exercises + parts[1].exercises + parts[2].exercises}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
