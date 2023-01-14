import React from 'react';

const Blogs = () => {
    return (
      <div>
  <div className='mt-10'>
            <h2 className="text-center text-5xl font-bold"><u>What are the different ways to manage a state in a React application?</u></h2>
            <p className='mt-10'>The state of any application is represented by the user interface of the application. The state is mutable and whenever the user interacts with the application and changes its state, the user interface of the app may change as it will be represented by the new state. These states can be managed by a React component. The main objectives of the react component are to store the state and allow it to get updated once the user interacts with the application. It also ensures that the UI change whenever there is any update in the State. In this article, we will explain the ways to manage the states. In this topic, we are going to learn about React State Management.</p>
        </div>
        <div className='mt-10'>
            <h2 className="text-center text-5xl font-bold"><u>How does prototypical inheritance work?</u></h2>
            <p className='mt-10'>In Prototype Inheritance, an object uses the properties or methods of another object via the prototype linkage. All the JavaScript objects inherit properties and methods from a prototype (like Date objects inherit properties from Date.prototype and so on).</p>
        </div>
  <div className='mt-10'>
            <h2 className="text-center text-5xl font-bold"><u>What is a unit test? Why should we write unit tests?</u></h2>
            <p className='mt-10'>Unit testing is a software testing method where “units”—the individual components of software—are tested. Developers write unit tests for their code to make sure that the code works correctly. This helps to detect and protect against bugs in the future.</p>
        </div>
        <div className='mt-10'>
            <h2 className="text-center text-5xl font-bold"><u>React vs. Angular vs. Vue?</u></h2>
            <p className='mt-10'>Web developers are always at crossroads where they have to decide among a range of development frameworks and choose one for their project. It is a common topic of debate among developers on how to pick a framework for their next big project. Some frameworks which have become the most popular among developers and causing the dilemma are ReactJS, VueJS, and Angular. </p>
        </div>

      </div>
    );
};

export default Blogs;