# Answers

1.  What is React JS and what problems does it try and solve?

ReactJS is a javascript library used to create powerful user interfaces. Because the user interfaces of today have so much changing data, the DOM is doing a lot of work. In order to offload much of the data from the DOM, React was created. It has a virtual DOM that makes it a lot easier to work with the DOM API. React solves that problem of ever-changing data so that users have a smooth experience and developers do as well.

2.  What does it mean to _think_ in react?

"Thinking in react" is all about data flow. That data flows from state to props. Everything falls under that.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

A functional component is a function that accepts props and returns an element in react. A class component must extend React.Component and can have state.

4.  Describe state.

State is used to hold data about a specific component. State is called inside of the constructor function and allows us to drive the UI using data.

5.  Describe props.

Props stands for properties. Props are immutable. They are passed in components and used to display data to the user. It’s all about the reusability of data. When a component is used in multiple instances, so essentially always, props allow for data to be different on each instance. Data flows downward from state to props.
