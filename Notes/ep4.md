# Episode 4 – Talk is Cheap, Show Me The Code 🚀

## 1. Is JSX mandatory for React?

No, JSX is **not mandatory**.

React can work without JSX using:

```javascript
React.createElement()
```

Example:

```javascript
const element = React.createElement("h1", {}, "Hello");
```

However, JSX is preferred because:

* More readable
* Easier to write
* Cleaner syntax

---

## 2. Is ES6 mandatory for React?

No, ES6 is **not mandatory**, but it is **highly recommended**.

React uses many ES6 features like:

* Arrow functions
* let and const
* Destructuring
* Modules (import/export)

Example:

```javascript
const App = () => <h1>Hello</h1>;
```

---

## 3. `{TitleComponent}` vs `<TitleComponent/>` vs `<TitleComponent></TitleComponent>`

```javascript
const TitleComponent = () => <h1>Namaste React</h1>;
```

| Syntax                              | Meaning                              |
| ----------------------------------- | ------------------------------------ |
| `{TitleComponent}`                  | Reference to function (not rendered) |
| `{TitleComponent()}`                | Function call                        |
| `<TitleComponent />`                | Correct React way to render          |
| `<TitleComponent></TitleComponent>` | Same as above but allows children    |

---

## 4. How to write comments in JSX?

JSX uses **JavaScript syntax inside `{}`**.

```jsx
const element = (
  <div>
    {/* This is a JSX comment */}
    <h1>Hello</h1>
  </div>
);
```

❌ This will NOT work:

```jsx
<!-- Wrong comment -->
```

---

## 5. What is `<React.Fragment>` and `<> </>`?

Fragments allow grouping multiple elements **without adding extra DOM nodes**.

### Using React.Fragment

```jsx
import React from "react";

const App = () => (
  <React.Fragment>
    <h1>Hello</h1>
    <h2>World</h2>
  </React.Fragment>
);
```

### Using shorthand

```jsx
const App = () => (
  <>
    <h1>Hello</h1>
    <h2>World</h2>
  </>
);
```

Benefits:

* Cleaner DOM
* No unnecessary `<div>`

---

## 6. What is Virtual DOM?

Virtual DOM is a **lightweight copy of the real DOM**.

Process:

1. React creates Virtual DOM
2. Compares it with previous version
3. Updates only changed parts in real DOM

Benefits:

* Faster updates
* Better performance
* Efficient rendering

---

## 7. What is Reconciliation in React?

Reconciliation is the **process of comparing old Virtual DOM and new Virtual DOM**.

React finds differences and updates only necessary parts.

This process is also called **Diffing Algorithm**.

---

## 8. What is React Fiber?

React Fiber is the **new reconciliation engine of React**.

Features:

* Improves rendering performance
* Supports asynchronous rendering
* Breaks rendering work into smaller tasks

Benefits:

* Smoother UI updates
* Better user experience

---

## 9. Why do we need keys in React?

Keys help React **identify which elements have changed**.

Used mainly in lists.

Example:

```jsx
const list = ["A", "B", "C"];

const element = list.map((item) => (
  <li key={item}>{item}</li>
));
```

Benefits:

* Efficient updates
* Prevents re-rendering issues

---

## 10. Can we use index as keys?

Yes, but **not recommended**.

Problem:

* If list order changes → wrong updates
* Causes performance issues

Use index only when:

* List is static
* No reordering

---

## 11. What are Props in React?

Props (short for properties) are used to **pass data from parent to child components**.

Example:

```jsx
const Greeting = (props) => {
  return <h1>Hello {props.name}</h1>;
};

const App = () => <Greeting name="Pardhu" />;
```

---

### Ways to use props

### 1. Normal props

```jsx
props.name
```

### 2. Destructuring props

```jsx
const Greeting = ({ name }) => {
  return <h1>Hello {name}</h1>;
};
```

---

## 12. What is Config Driven UI?

Config Driven UI means **UI is controlled by data/config instead of hardcoding**.

Example:

```javascript
const config = {
  title: "Netflix",
  showButton: true
};
```

```jsx
const App = () => (
  <div>
    <h1>{config.title}</h1>
    {config.showButton && <button>Play</button>}
  </div>
);
```

Benefits:

* Dynamic UI
* Easy to update
* Scalable design

---

# 🔥 Summary

* JSX is optional but preferred
* ES6 is not mandatory but widely used
* Virtual DOM improves performance
* Reconciliation updates only changed elements
* Keys help React identify elements
* Props pass data between components
* Config-driven UI makes apps dynamic

---