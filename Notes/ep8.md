# Chapter 08 — Let’s Get Classy (Namaste React)

---

# 1. How do you create Nested Routes in `react-router-dom`?

Nested routes are used when one route should render inside another route.

Example:

```jsx
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <h1>Namaste React</h1>

      {/* Child routes render here */}
      <Outlet />
    </div>
  );
};

const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;
const Contact = () => <h2>Contact Page</h2>;

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
```

## Important Points

* `children` property is used for nested routes.
* `<Outlet />` acts as a placeholder where child components render.
* Parent route remains common while child routes change.

---

# 2. `createHashRouter` and `createMemoryRouter`

## A) `createHashRouter`

Uses URL hash (`#`) for routing.

Example URL:

```txt
localhost:1234/#/about
```

### Why use it?

* Useful when server does not support client-side routing.
* Mostly used in:

  * Static hosting
  * GitHub Pages
  * Legacy applications

### Example

```jsx
import { createHashRouter } from "react-router-dom";
```

### Advantage

No server configuration required.

### Disadvantage

URL contains `#`, which looks less clean.

---

## B) `createMemoryRouter`

Keeps routes in memory instead of browser URL.

### Used mainly for:

* Testing
* React Native
* Non-browser environments

### Example

```jsx
import { createMemoryRouter } from "react-router-dom";
```

### Important Point

* URL in browser does not change.
* Navigation history exists only in memory.

---

# 3. Order of Lifecycle Method Calls in Class Based Components

Lifecycle methods are special methods in React class components.

## Mounting Phase (Component Creation)

Order:

```txt
Constructor
Render
componentDidMount
```

Example:

```jsx
class User extends React.Component {
  constructor(props) {
    super(props);
    console.log("Constructor");
  }

  componentDidMount() {
    console.log("Component Did Mount");
  }

  render() {
    console.log("Render");
    return <h1>Hello</h1>;
  }
}
```

### Output

```txt
Constructor
Render
Component Did Mount
```

---

## Updating Phase

Occurs when state or props change.

Order:

```txt
render
componentDidUpdate
```

---

## Unmounting Phase

When component is removed from DOM.

Method used:

```txt
componentWillUnmount
```

---

# 4. Why do we use `componentDidMount()`?

`componentDidMount()` is called after the component is rendered to the DOM.

Mainly used for:

* API calls
* Fetching data
* Starting timers
* Subscriptions
* DOM operations

Example:

```jsx
class User extends React.Component {
  state = {
    userInfo: null,
  };

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/octocat");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    return <h1>{this.state.userInfo?.login}</h1>;
  }
}
```

## Why not API call inside constructor?

Because component should first render, then side effects should run.

React recommends doing side effects inside `componentDidMount`.

---

# 5. Why do we use `componentWillUnmount()`?

Called just before component is removed from the DOM.

Used for cleanup.

## Common Uses

* Clear intervals
* Remove event listeners
* Cancel subscriptions
* Prevent memory leaks

---

## Example

```jsx
class Timer extends React.Component {
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Timer Running");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Timer Cleared");
  }

  render() {
    return <h1>Timer Component</h1>;
  }
}
```

## Why important?

Without cleanup:

* Memory leaks can happen
* Background tasks continue running
* Performance issues may occur

---

# 6. Why do we use `super(props)` in constructor?

In class components, we extend `React.Component`.

Example:

```jsx
class User extends React.Component
```

When using constructor, we must call:

```jsx
super(props);
```

---

## Why?

Because:

* `super()` calls parent class constructor.
* It initializes `React.Component`.
* Allows access to `this.props`.

---

## Example Without `super(props)`

```jsx
constructor(props) {
  console.log(this.props);
}
```

This gives error because `this` is not initialized.

---

## Correct Example

```jsx
constructor(props) {
  super(props);

  console.log(this.props);
}
```

---

# 7. Why can't the callback function of `useEffect` be async?

Wrong way:

```jsx
useEffect(async () => {
  const data = await fetchData();
}, []);
```

---

## Why is this wrong?

Because `useEffect` expects:

* Either nothing
* Or a cleanup function

But async functions always return a Promise.

React cannot use a Promise as cleanup function.

---

## Correct Way

```jsx
useEffect(() => {
  const getData = async () => {
    const data = await fetchData();
    console.log(data);
  };

  getData();
}, []);
```

---

# Important Interview Points

## Difference between Functional and Class Components

| Functional Components        | Class Components         |
| ---------------------------- | ------------------------ |
| Uses Hooks                   | Uses Lifecycle Methods   |
| Simpler syntax               | More boilerplate         |
| `useEffect` for side effects | `componentDidMount` etc. |
| Modern React approach        | Older approach           |

---

# Quick Revision

## Nested Routing

* Use `children`
* Render using `<Outlet />`

## Lifecycle Order

```txt
Constructor → Render → componentDidMount
```

## `componentDidMount`

* API calls
* Side effects

## `componentWillUnmount`

* Cleanup
* Clear timers

## `super(props)`

* Access `this.props`
* Initialize parent constructor

## `useEffect`

* Callback cannot be async
* Create async function inside effect

---

# One-Line Summary

This chapter mainly teaches:

* Class based components
* React lifecycle methods
* Mounting/unmounting
* Cleanup handling
* Nested routing
* Difference between old React and modern React hooks
