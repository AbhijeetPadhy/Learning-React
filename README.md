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
- [JavaScript Refresher | Complete React Course in Hindi #3](#javascript-refresher--complete-react-course-in-hindi-3)
  - [what are let, var and const in js](#what-are-let-var-and-const-in-js)
  - [What are the datatypes allowed in js?](#what-are-the-datatypes-allowed-in-js)
  - [\[ChatGPT\] How to write JS objects?](#chatgpt-how-to-write-js-objects)
  - [\[ChatGPT\] So how can we access the members of the objects in all the cases](#chatgpt-so-how-can-we-access-the-members-of-the-objects-in-all-the-cases)
  - [\[ChatGPT\] what are the different kinds of events in js](#chatgpt-what-are-the-different-kinds-of-events-in-js)
  - [\[ChatGPT\] what is strict mode in js](#chatgpt-what-is-strict-mode-in-js)
  - [\[ChatGPT\] What are callbacks in js](#chatgpt-what-are-callbacks-in-js)
  - [\[ChatGPT\] what are promises in js](#chatgpt-what-are-promises-in-js)
- [Understanding JSX](#understanding-jsx)
  - [if we use react, do we still need to use thymeleaf in spring project. Will it not be useless to use thymeleaf](#if-we-use-react-do-we-still-need-to-use-thymeleaf-in-spring-project-will-it-not-be-useless-to-use-thymeleaf)
- [Project 1: Setup + Adding Bootstrap to React | Complete React Course in Hindi #5](#project-1-setup--adding-bootstrap-to-react--complete-react-course-in-hindi-5)
  - [\[ChatGPT\] Can we use class instead of className in the latest version of react?](#chatgpt-can-we-use-class-instead-of-classname-in-the-latest-version-of-react)
- [Understanding Props and PropTypes in React | Complete React Course in Hindi #6](#understanding-props-and-proptypes-in-react--complete-react-course-in-hindi-6)
- [Understanding State \& Handling Events in React | Complete React Course in Hindi #7](#understanding-state--handling-events-in-react--complete-react-course-in-hindi-7)
- [Creating "Enable Dark Mode" Button Using useState Hook | Complete React Course in Hindi #10](#creating-enable-dark-mode-button-using-usestate-hook--complete-react-course-in-hindi-10)
  - [what is $0 in js](#what-is-0-in-js)
  - [difference between == and === in js](#difference-between--and--in-js)

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
9. Include {"javascript" : "javascriptreact"} in emmet

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

## [ChatGPT] What are props and states of components?

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
## [ChatGPT] what are components in react js

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

## [ChatGPT] After running npm run build, I got a build folder. Inside that there was an index.html. On opening it, nothing is displayed

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

# JavaScript Refresher | Complete React Course in Hindi #3

If you are using VS code then you can use this command shift + 1 and enter to auto-populate HTML Doctype in HTML or PHP.

---

## what are let, var and const in js

In JavaScript, `let`, `var`, and `const` are used to declare variables, but they have different behaviors and scoping rules:

1. `var`: `var` was traditionally used to declare variables in JavaScript. Variables declared with `var` are function-scoped or globally-scoped, meaning they are accessible within the function or global scope where they are declared. `var` variables are also hoisted, which means that they are moved to the top of their scope during the compilation phase.

   Example:
   ```javascript
   function example() {
     var x = 10;
     if (true) {
       var y = 20;
       console.log(x); // Output: 10
     }
     console.log(y); // Output: 20
   }
   ```

   In this example, both `x` and `y` are accessible throughout the function, even though `y` is declared inside the `if` block.

2. `let`: Introduced in ECMAScript 6 (ES6), `let` allows you to declare block-scoped variables. Block scope means that variables declared with `let` are only accessible within the block where they are declared (e.g., inside loops, conditional statements, or block statements). Unlike `var`, `let` variables are not hoisted to the top of their scope.

   Example:
   ```javascript
   function example() {
     let x = 10;
     if (true) {
       let y = 20;
       console.log(x); // Output: 10
     }
     console.log(y); // Error: y is not defined
   }
   ```

   In this example, `x` is accessible within the function, but `y` is only accessible within the `if` block.

3. `const`: `const` is used to declare constants, which are variables that cannot be reassigned after their initial assignment. Like `let`, `const` is also block-scoped. It must be assigned a value when declared and cannot be left uninitialized. `const` variables are not hoisted either.

   Example:
   ```javascript
   function example() {
     const x = 10;
     if (true) {
       const y = 20;
       console.log(x); // Output: 10
     }
     console.log(y); // Error: y is not defined
   }
   ```

   In this example, `x` is accessible within the function, but `y` is only accessible within the `if` block. Additionally, you cannot reassign a new value to `x` or `y` after their initial assignment.

It's generally recommended to use `const` by default when declaring variables, as it helps enforce immutability and prevents accidental reassignment. Use `let` when you need to reassign a variable, and reserve `var` for specific use cases or when working with older JavaScript codebases.


---

## What are the datatypes allowed in js?

JavaScript supports several built-in data types, including:

1. Primitive Data Types:
   - `undefined`: Represents an undefined value.
   - `null`: Represents the absence of any object value.
   - `boolean`: Represents a boolean value, either `true` or `false`.
   - `number`: Represents numeric values, including integers and floating-point numbers.
   - `string`: Represents textual data enclosed in single quotes ('') or double quotes ("").
   - `symbol` (introduced in ECMAScript 6): Represents unique and immutable values that can be used as identifiers for object properties.

2. Object Data Type:
   - `object`: Represents a collection of key-value pairs or properties. Objects can be created using object literals `{}`, the `new` keyword, or built-in constructor functions like `Array`, `Date`, etc.

3. Special Data Types:
   - `function`: Represents a callable object that can be invoked.
   - `BigInt` (introduced in ECMAScript 2020): Represents arbitrary precision integers.

JavaScript is a dynamically typed language, which means that variables can hold values of any data type, and the data type can change dynamically during runtime.

You can use the `typeof` operator to determine the data type of a value. For example:

```javascript
typeof 42;          // "number"
typeof "Hello";     // "string"
typeof true;        // "boolean"
typeof undefined;   // "undefined"
typeof null;        // "object"
typeof {};          // "object"
typeof [];          // "object"
typeof function(){};   // "function"
typeof Symbol();    // "symbol"
typeof BigInt(123); // "bigint"
```

It's important to note that `typeof null` returns `"object"`, which is considered a historical bug in JavaScript.

In addition to these built-in data types, JavaScript also provides various methods and techniques for working with and manipulating data, such as arrays, regular expressions, and JSON (JavaScript Object Notation).

---
## [ChatGPT] How to write JS objects?

```
In a js object, should a key be inside quotes?

        let obj = {
            "name" : "Abhijeet",
            roll : 123,
            "hobby*" : "Badminton", 
        };

Is it correct to write in this manner?
```

In JavaScript objects, keys can be written with or without quotes, depending on the specific requirements and naming conventions you want to follow. Here's the breakdown:

1. Keys without quotes: In JavaScript, if a key is a valid JavaScript identifier, meaning it starts with a letter, underscore, or dollar sign, and consists of letters, digits, underscores, or dollar signs, you can write the key without quotes.

In your example, `roll` is a valid identifier, so it doesn't require quotes. It can be written as `roll: 123`.

2. Keys with quotes: If a key is not a valid JavaScript identifier, or if you want to use special characters, spaces, or reserved words as keys, you need to enclose the key in quotes. Quotes can be either single quotes (''), double quotes (""), or backticks (``).

In your example, `"name"` and `"hobby*"` are enclosed in quotes because they contain non-alphanumeric characters and a reserved character (*). It is perfectly fine to write them in this manner.

So, the object can be written as:

```javascript
let obj = {
    "name": "Abhijeet",
    roll: 123,
    "hobby*": "Badminton"
};
```

or

```javascript
let obj = {
    name: "Abhijeet",
    roll: 123,
    'hobby*': "Badminton"
};
```

Both forms are correct and will create a valid JavaScript object. It is a matter of personal preference or adhering to specific coding conventions in your project.

## [ChatGPT] So how can we access the members of the objects in all the cases

To access the members (properties or values) of an object in JavaScript, you can use dot notation or bracket notation. The approach remains the same regardless of whether the keys are defined with or without quotes. Here's how you can access object members:

Using dot notation:
```javascript
let obj = {
    name: "Abhijeet",
    roll: 123,
    "hobby*": "Badminton"
};

console.log(obj.name);        // Output: "Abhijeet"
console.log(obj.roll);        // Output: 123
console.log(obj["hobby*"]);   // Output: "Badminton"
```

In this example, `obj.name` accesses the value associated with the `name` key, `obj.roll` accesses the value associated with the `roll` key, and `obj["hobby*"]` accesses the value associated with the `"hobby*"` key. Dot notation is commonly used when the key is a valid JavaScript identifier.

Using bracket notation:
```javascript
let obj = {
    "name": "Abhijeet",
    roll: 123,
    "hobby*": "Badminton"
};

console.log(obj["name"]);     // Output: "Abhijeet"
console.log(obj["roll"]);     // Output: 123
console.log(obj["hobby*"]);   // Output: "Badminton"
```

In this example, `obj["name"]`, `obj["roll"]`, and `obj["hobby*"]` use bracket notation to access the values associated with the respective keys. Bracket notation is useful when the key contains special characters, spaces, or is stored in a variable.

Both dot notation and bracket notation work for accessing object members, regardless of whether the keys are defined with or without quotes. Choose the notation that suits your specific needs and the nature of your object keys.

---

## [ChatGPT] what are the different kinds of events in js

In JavaScript, events are actions or occurrences that happen in the browser or on a web page. JavaScript provides several types of events that you can respond to and handle in your code. Here are some of the most commonly used event types in JavaScript:

1. Mouse Events:
   - `click`: Occurs when the user clicks the mouse button.
   - `mouseover`: Occurs when the mouse pointer moves over an element.
   - `mouseout`: Occurs when the mouse pointer moves out of an element.
   - `mousedown`: Occurs when the mouse button is pressed down.
   - `mouseup`: Occurs when the mouse button is released.

2. Keyboard Events:
   - `keydown`: Occurs when a key on the keyboard is pressed down.
   - `keyup`: Occurs when a key on the keyboard is released.
   - `keypress`: Occurs when a key on the keyboard is pressed and released.

3. Form Events:
   - `submit`: Occurs when a form is submitted.
   - `change`: Occurs when the value of a form element (input, select, etc.) changes.
   - `focus`: Occurs when an element receives focus.
   - `blur`: Occurs when an element loses focus.

4. Window Events:
   - `load`: Occurs when the web page finishes loading.
   - `resize`: Occurs when the browser window is resized.
   - `scroll`: Occurs when the user scrolls the page.

5. Touch Events (for mobile devices):
   - `touchstart`: Occurs when a touch point is placed on the touch surface.
   - `touchmove`: Occurs when a touch point moves along the touch surface.
   - `touchend`: Occurs when a touch point is removed from the touch surface.

These are just a few examples of the many event types available in JavaScript. You can listen for and handle events using event listeners or by assigning event handler functions to elements in your HTML or through JavaScript code.

For example, to handle a `click` event on a button element with an id of "myButton", you can use the following code:

```javascript
const button = document.getElementById("myButton");

button.addEventListener("click", function(event) {
  // Handle the click event
  console.log("Button clicked!");
});
```

By defining event handlers for different event types, you can respond to user interactions and create dynamic and interactive web applications.

---

Always use strict mode while developing in react as it helps to prevent wrong programming practices.

---

## [ChatGPT] what is strict mode in js

Strict mode is a feature in JavaScript that enforces stricter parsing and error handling rules. It was introduced in ECMAScript 5 (ES5) to address certain shortcomings and improve the overall behavior of JavaScript.

Enabling strict mode in your JavaScript code provides the following benefits:

1. More reliable code:
   - Prevents the use of undeclared variables by throwing an error.
   - Assigning a value to an undeclared variable or a read-only property will throw an error.
   - Silent errors, which might cause unexpected behavior, are turned into exceptions.

2. Restricted syntax and behaviors:
   - Variables and functions must be declared with `var`, `let`, or `const`. Implicit global variables are not allowed.
   - Duplicate parameter names in function declarations throw an error.
   - Deleting variables, functions, or function arguments is not allowed.
   - Octal literals (e.g., `0123`) are not allowed.

3. Makes JavaScript more future-proof:
   - Disallows the use of certain deprecated features, encouraging the use of newer, standardized alternatives.
   - Allows compatibility with future versions of ECMAScript by preventing the use of syntax that might be reserved in future releases.

To enable strict mode in your JavaScript code, you can include the following line at the beginning of a script or a function:

```javascript
"use strict";
```

When strict mode is enabled in a script, it applies to the entire script. When enabled within a function, it applies only to that function and its nested functions.

For example:

```javascript
"use strict";

function myFunction() {
  "use strict";
  // Function code
}
```

It's important to note that strict mode is opt-in and not the default behavior in JavaScript. By explicitly enabling strict mode, you can ensure better code quality, catch potential errors, and make your code more robust and future-proof.

---

`this` refers to window object.

---

## [ChatGPT] What are callbacks in js

In JavaScript, a callback is a function that is passed as an argument to another function and is intended to be executed at a later point in time. The concept of callbacks allows for asynchronous and event-driven programming in JavaScript.

Here's how callbacks work:

1. Passing a callback function:
   In JavaScript, functions are first-class objects, which means they can be assigned to variables, passed as arguments to other functions, and returned from functions. To use a callback, you can define a function and pass it as an argument to another function.

2. Execution at a later time:
   The function receiving the callback can choose when and how to invoke the callback function. This typically happens when a specific event or condition occurs, or when an asynchronous operation completes.

3. Handling the callback:
   When the condition or event specified by the function is met, the callback function is invoked, and any necessary data can be passed to it as arguments. The callback function can perform some action or execute a specific block of code.

Callbacks are commonly used in scenarios such as:

- Asynchronous operations: Callbacks are often used to handle the completion or errors of asynchronous operations like fetching data from a server, reading files, or making API requests.

- Event handling: Event-driven programming relies heavily on callbacks. For example, you can attach event listeners to DOM elements and define callback functions to handle events like clicks, mouse movements, or keyboard inputs.

Example usage of callbacks:

```javascript
function fetchData(callback) {
  // Simulating an asynchronous operation
  setTimeout(function() {
    const data = { name: "John", age: 25 };
    callback(data); // Invoke the callback function with data
  }, 2000);
}

function processData(data) {
  console.log("Received data:", data);
}

fetchData(processData);
```

In this example, the `fetchData` function simulates an asynchronous operation by using `setTimeout`. It accepts a callback function as an argument. After a delay of 2 seconds, it invokes the callback function and passes the retrieved data as an argument. The `processData` function is defined as the callback and handles the received data.

Callbacks allow you to define custom behavior that can be executed when a specific condition or event occurs, enabling you to write flexible and non-blocking code in JavaScript. However, as JavaScript evolves, alternative approaches like Promises and async/await have been introduced to simplify asynchronous programming and address some of the limitations of callbacks.

## [ChatGPT] what are promises in js

In JavaScript, a Promise is an object representing the eventual completion or failure of an asynchronous operation and its resulting value. Promises provide a way to handle asynchronous code in a more organized and readable manner, avoiding the "callback hell" problem.

A Promise can be in one of three states:

1. Pending: The initial state when the Promise is still executing the asynchronous operation.
2. Fulfilled: The state when the asynchronous operation is successfully completed, and the Promise is resolved with a value.
3. Rejected: The state when the asynchronous operation encounters an error or fails, and the Promise is rejected with a reason or an error object.

Promises have the following features:

1. Asynchronous execution: Promises are designed to handle asynchronous operations, such as fetching data from an API, reading files, or making network requests. They allow you to work with the result of an asynchronous operation in a more structured manner.

2. Chaining: Promises can be chained together using `then()` to handle multiple asynchronous operations in sequence. This makes it easier to manage dependencies and avoid callback nesting.

3. Error handling: Promises provide a `catch()` method to handle errors that occur during the execution of the asynchronous operation. This allows for centralized error handling and avoids the need for repetitive error callbacks.

Here's an example that demonstrates the usage of Promises:

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      const data = { name: "John", age: 25 };
      resolve(data); // Resolve the Promise with the data
      // reject(new Error("Failed to fetch data")); // Reject the Promise with an error
    }, 2000);
  });
}

fetchData()
  .then((data) => {
    console.log("Received data:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

In this example, the `fetchData` function returns a new Promise. Within the Promise constructor, an asynchronous operation is simulated using `setTimeout`. After a delay of 2 seconds, the Promise is resolved with the retrieved data using the `resolve()` method. If there is an error, you can reject the Promise using the `reject()` method.

You can use `.then()` to handle the resolved value of the Promise, and `.catch()` to handle any errors that occur during the Promise execution.

Promises provide a more elegant and structured way to handle asynchronous code in JavaScript, making it easier to reason about and maintain asynchronous operations in your applications. Promises have become a standard approach for handling asynchronous tasks, and they form the foundation of more advanced features like `async/await`.

---

# Understanding JSX

There are two kinds of components in react: class based and function based. Function based components is the new trend. `class` is a reserved keyword in JS, so wherever we have to use `class` in JSX, use `className` instead.

+ class -> className
+ for -> htmlFor

In App.js, we can return only one div (or element). If we need to return two elements, we can use a JSX fragment as shown:

```html
<>
  <h> Hello </h>
  <div></div>
</>
```

## if we use react, do we still need to use thymeleaf in spring project. Will it not be useless to use thymeleaf

If you are using React as the front-end framework in your Spring project, you may not necessarily need to use Thymeleaf as the template engine. Thymeleaf is typically used for server-side rendering (SSR) and generating dynamic HTML on the server before sending it to the client.

When using React, the UI rendering and dynamic updates are typically handled on the client-side using JavaScript. React components are responsible for rendering the UI and managing the application state. The server primarily serves as an API endpoint that provides data to the React application.

In this scenario, Thymeleaf may not be required for generating HTML templates on the server because the client-side rendering (CSR) approach with React takes care of the UI rendering. Instead, the server can focus on providing the necessary data through RESTful APIs or GraphQL endpoints.

However, there might be cases where you still need to use Thymeleaf in your Spring project, such as:

1. Hybrid applications: If your application requires a mix of server-side rendering and client-side rendering, you can use Thymeleaf to generate initial HTML on the server and then let React take over for subsequent dynamic updates on the client.

2. Server-generated content: Thymeleaf can be useful for generating parts of the HTML that are not managed by React, such as static pages, non-interactive components, or content that does not require dynamic updates.

3. Progressive enhancement: Thymeleaf can be used to provide an initial, server-rendered version of the page for better performance, SEO, or to support non-JavaScript environments, while still incorporating React for enhanced interactivity on supported clients.

Ultimately, the decision to use Thymeleaf in a Spring project alongside React depends on your specific requirements and the architecture you want to adopt. If your application is primarily focused on client-side rendering with React, Thymeleaf may not be necessary. However, if you have specific server-side rendering or hybrid rendering needs, Thymeleaf can still be beneficial.

---

In JSX, text passed using variables from external sources automatically get sanitised, i.e. if there are html tag symbols, they will remain intact. Refer App.js in this commit. This is done for safety purpose so that we don't allow anyone to run any dangerous script to run inside html. JSX gets compiled using babel.

# Project 1: Setup + Adding Bootstrap to React | Complete React Course in Hindi #5

`npm install` helps to recreate the `node_modules` folder.

## [ChatGPT] Can we use class instead of className in the latest version of react?

Yes, in the latest versions of React, you can use the `class` attribute instead of `className` to define CSS classes for elements within JSX code. This change was introduced in React 17.

Prior to React 17, the attribute for defining CSS classes in JSX was `className`. This was done to avoid conflicts with the JavaScript `class` keyword. However, with the improvements in React 17 and the widespread support for ECMAScript 6 (ES6), using `class` for CSS classes is now allowed.

Here's an example that demonstrates the usage of `class` for CSS classes in JSX:

```jsx
function MyComponent() {
  return <div class="my-class">Hello, React!</div>;
}
```

In this example, the `class` attribute is used to assign the CSS class `my-class` to the `<div>` element. This is the same syntax as you would use in regular HTML.

However, it's important to note that when using React with JSX, the JavaScript `class` keyword is still reserved for defining component classes. So, when defining React components, you should continue to use `class` to define the class and `className` to define the CSS class attribute.

```jsx
class MyComponent extends React.Component {
  render() {
    return <div className="my-class">Hello, React!</div>;
  }
}
```

In this case, `className` is used to define the CSS class for the `<div>` element, while `class` is used to define the class for the `MyComponent` class.

To summarize, while you can use the `class` attribute instead of `className` for defining CSS classes in JSX code, it is recommended to use `className` within React components to avoid any confusion between the JavaScript `class` keyword and CSS classes.

# Understanding Props and PropTypes in React | Complete React Course in Hindi #6

props are short for properties

rfc -> react function based component
impt -> import PropTypes
pts -> PropTypes.string

Anywhere we use a component name in tags, it gets automatically imported.

props are read only.
we can also pass objects as props.

# Understanding State & Handling Events in React | Complete React Course in Hindi #7

You should still use className and htmlFor in your JSX, it was showing me error in inspect element although page was displaying correctly.

Hooks help to use class features without using class based components.

You can't use value={text} without using onChange={handleOnChange}.

# Creating "Enable Dark Mode" Button Using useState Hook | Complete React Course in Hindi #10

## what is $0 in js

In JavaScript, `$0` is a special variable available in some browser developer tools, such as the browser console or the Elements panel in the browser's Developer Tools.

`$0` specifically refers to the currently selected element in the browser's DOM (Document Object Model) within the developer tools. It allows you to access and manipulate the selected element directly from the console or through JavaScript code in the context of the current webpage.

For example, if you inspect an element in the browser's Developer Tools, you can access that element using the `$0` variable. You can then interact with it, modify its properties, or invoke methods on it through JavaScript code.

Here's an example of using `$0` in the browser console:

1. Open the browser's Developer Tools.
2. Navigate to the Elements panel.
3. Select an HTML element within the page.
4. In the console, you can type `$0` to reference the selected element.

Once you have the element referenced by `$0`, you can access its properties and methods. For instance, you can modify its CSS styles, inspect its attributes, or invoke DOM manipulation functions on it.

It's important to note that `$0` is specific to browser developer tools and not a standard JavaScript feature. It provides a convenient way to interact with elements on the page during development and debugging, but it's not part of the JavaScript language itself.

## difference between == and === in js

In JavaScript, the `==` (equality operator) and `===` (strict equality operator) are used to compare values for equality. However, they differ in terms of how they perform the comparison and handle different data types.

1. `==` (Equality Operator):
   - The `==` operator performs type coercion, meaning it tries to convert the operands to a common type before comparing them.
   - It allows for loose equality comparisons, where the operands are considered equal if they have the same value after coercion, even if their data types are different.
   - Examples:
     - `1 == 1` is `true`
     - `"1" == 1` is `true` (The string is coerced to a number before comparison)
     - `true == 1` is `true` (The boolean is coerced to a number before comparison)

2. `===` (Strict Equality Operator):
   - The `===` operator performs a strict equality comparison without type coercion.
   - It requires both the value and the data type to be the same for the operands to be considered equal.
   - Examples:
     - `1 === 1` is `true`
     - `"1" === 1` is `false` (The data types are different, string vs. number)
     - `true === 1` is `false` (The data types are different, boolean vs. number)

In general, it is recommended to use the `===` operator (strict equality) in JavaScript because it avoids unexpected behavior caused by type coercion. By using strict equality, you ensure that both the value and the data type of the operands are considered in the comparison.

Using `==` (equality) can lead to subtle bugs and make the code harder to reason about due to the implicit type conversions. However, there may be specific cases where type coercion is desired, and in those situations, the `==` operator can be used intentionally.

To summarize, `===` (strict equality) performs a comparison considering both value and data type, while `==` (equality) performs type coercion before comparison. It's generally recommended to use `===` to ensure more predictable and reliable equality checks in JavaScript.