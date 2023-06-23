# React

- [React](#react)
- [Introduction to React Js + Installation | Complete React Course in Hindi #1 by CodeWithHarry 16 minutes](#introduction-to-react-js--installation--complete-react-course-in-hindi-1-by-codewithharry-16-minutes)
  - [Setup](#setup)
- [Creating our first react app using create-react-app | Complete React Course in Hindi #2](#creating-our-first-react-app-using-create-react-app--complete-react-course-in-hindi-2)
  - [Installing create-react-app](#installing-create-react-app)
  - [Create a new React App](#create-a-new-react-app)
  - [Run the app](#run-the-app)
  - [Directly](#directly)
  - [What are components?](#what-are-components)
    - [\[ChatGPT\] What are props and states of components?](#chatgpt-what-are-props-and-states-of-components)
    - [\[ChatGPT\] what are components in react js](#chatgpt-what-are-components-in-react-js)
    - [\[ChatGPT\] After running npm run build, I got a build folder. Inside that there was an index.html. On opening it, nothing is displayed](#chatgpt-after-running-npm-run-build-i-got-a-build-folder-inside-that-there-was-an-indexhtml-on-opening-it-nothing-is-displayed)

# Introduction to React Js + Installation | Complete React Course in Hindi #1 by CodeWithHarry 16 minutes
## Setup
1. VS Code
2. Node
3. React Developer Tools [Chrome Extension]
4. Thunder Client [VS Code Extension]. Required for API testing (HTTP GET/POST requests), alternative to Postman.
5. ES7 React/Redux/GraphQL/React-Native snippets [VS Code Extension]
6. Auto Rename Tag [VS Code Extension]
7. Live Server [VS Code Extension]
8. Prettier - Code formatter [Optional] [VS Code Extension]

# Creating our first react app using create-react-app | Complete React Course in Hindi #2

## Installing create-react-app
npm install -g create-react-app

## Create a new React App
create-react-app my_app

## Run the app
Navigate inside the root directory of the app and type:
npm start

## Directly
npx create-react-app my-app
cd my-app
npm start

The following code will create the react app in the current folder:
`npx create-react-app my-app`


## What are components?
Reusable portions of a website for example nav-bar, side-bar, etc. 

---

### [ChatGPT] What are props and states of components?

In React, components are the building blocks of a user interface. They are reusable, self-contained modules that encapsulate a portion of the user interface and its behavior. Two fundamental concepts in React components are props and state.

1. Props (short for properties): Props are inputs to a React component. They allow data to be passed from a parent component to a child component. Props are immutable, meaning they cannot be changed within the component that receives them. The parent component provides the props when rendering the child component, and the child component can access and use these props to configure its behavior or render dynamic content. Props are defined as attributes on the component's JSX element.

Here's an example of how props are used in React:

```jsx
// ParentComponent.js
import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const name = 'John';
  const age = 25;

  return <ChildComponent name={name} age={age} />;
};

export default ParentComponent;

// ChildComponent.js
import React from 'react';

const ChildComponent = (props) => {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h2>Age: {props.age}</h2>
    </div>
  );
};

export default ChildComponent;
```

In this example, `ParentComponent` renders `ChildComponent` and passes two props: `name` and `age`. `ChildComponent` receives these props as an object (`props`) and uses them to display the name and age dynamically.

2. State: State represents the internal data or state of a component. Unlike props, which are passed from a parent component, state is managed within the component itself and can be changed. State is typically used for data that can be modified by user interactions, such as form inputs, toggles, or any data that needs to be updated dynamically.

To use state in a component, you need to define it using React's `useState` hook or by extending the `React.Component` class. The `useState` hook is the recommended approach in functional components.

Here's an example of using state with the `useState` hook:

```jsx
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
```

In this example, the `Counter` component uses the `useState` hook to define a state variable called `count` and a corresponding setter function called `setCount`. The initial value of `count` is set to 0. The `increment` and `decrement` functions modify the `count` state by calling `setCount` with the updated value.

When the `count` state is updated, React re-renders the component, reflecting the new value on the screen.

Overall, props allow data to be passed from a parent component to a child component, while state represents the internal data or state of a component that can be changed and updated.

---

In the folder structure of the react app, inside the public folder, there is an html file called index.html. Inside the body of index.html, you will find a div with id = "root". This is the div that gets populated using the react code and the page gets produced. We write majority of our code inside src folder in terms of components.

App.js is a component and index.js is the entry point. index.js tells to render App component.

---
### [ChatGPT] what are components in react js

In React, components are the building blocks of user interfaces. They are reusable, self-contained modules that encapsulate a portion of the user interface and its behavior. Components in React can be classified into two types:

1. Functional Components: Functional components are also known as stateless components or presentational components. They are defined as JavaScript functions that receive props as an input and return JSX (JavaScript XML) to describe the structure and appearance of the component. Functional components are simple and focused on rendering UI based on the props they receive. They do not have their own internal state or lifecycle methods.

Here's an example of a functional component in React:

```jsx
import React from 'react';

const FunctionalComponent = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};

export default FunctionalComponent;
```

In this example, the `FunctionalComponent` receives a `name` prop and renders a greeting message using that prop.

2. Class Components: Class components are also known as stateful components or container components. They are defined as JavaScript classes that extend the `React.Component` class provided by React. Class components have more features and capabilities than functional components. They can have their own internal state, lifecycle methods, and handle user interactions.

Here's an example of a class component in React:

```jsx
import React from 'react';

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default ClassComponent;
```

In this example, the `ClassComponent` maintains an internal state called `count` using the `this.state` object. It also defines an `increment` method that updates the `count` state when a button is clicked. The current state is displayed in the JSX returned by the `render` method.

Note that with the introduction of React Hooks in newer versions of React, functional components can also have state and lifecycle functionalities using hooks like `useState`, `useEffect`, etc. Hooks have become the recommended approach for managing state and side effects in functional components.

Both functional components and class components can be used in React applications, but functional components are more commonly used nowadays due to their simplicity, reusability, and the availability of hooks for state management and side effects.

---

On successful compilation, we are displayed:
```
You can now view my-app in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.100.75:3000

Note that the development build is not optimized.
To create a production build, use npm run build.
```

---

### [ChatGPT] After running npm run build, I got a build folder. Inside that there was an index.html. On opening it, nothing is displayed

If you're opening the `index.html` file from the build folder directly in your browser, it may not work as expected. This is because React applications rely on JavaScript files and other static assets that are generated during the build process.

To properly view and interact with your React app after running `npm run build`, you need to serve the contents of the build folder using a local development server or deploy it to a hosting provider.

Here are a couple of options to view your React app:

1. Using a local development server:
   - Install a lightweight server like `serve` globally by running the following command:
     ```
     npm install -g serve
     ```
   - Navigate to your build folder in the terminal:
     ```
     cd build
     ```
   - Start the server:
     ```
     serve
     ```
   - The server will provide you with a URL (usually `http://localhost:5000`). Open that URL in your browser to view your React app.

2. Deploying to a hosting provider:
   - Choose a hosting provider like Netlify, Vercel, Firebase, or GitHub Pages.
   - Follow the provider's instructions to create an account, set up your app, and configure the deployment.
   - Upload the contents of the build folder to the hosting provider.
   - Once the deployment is complete, you will receive a URL where your app is hosted. Open that URL in your browser to view your React app.

Using one of these methods, you should be able to properly view and interact with your React app after running `npm run build`.

---