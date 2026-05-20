````markdown
# React Routing & Hooks Notes 🚀

## 1. Various Ways to Add Images into Our App

There are multiple ways to add images in a React application.

---

# 1️⃣ Using Online Image URL (CDN)

We can directly use an image URL from the internet.

Example:

```jsx
const App = () => {
  return (
    <img
      src="https://reactjs.org/logo-og.png"
      alt="React Logo"
      width="200"
    />
  );
};
````

### Advantages

* Fast loading
* No need to store image locally
* Easy to use

---

# 2️⃣ Importing Local Images

We can store images inside the project and import them.

Project Structure:

```text
src
│
├── assets
│   └── logo.png
│
└── App.js
```

Code:

```jsx
import logo from "./assets/logo.png";

const App = () => {
  return <img src={logo} alt="Logo" />;
};
```

### Advantages

* Easy to manage
* Parcel/Webpack optimizes images
* Good for React projects

---

# 3️⃣ Using Images from Public Folder

We can place images inside the `public` folder.

Project Structure:

```text
public
│
└── logo.png
```

Code:

```jsx
const App = () => {
  return <img src="/logo.png" alt="Logo" />;
};
```

### Advantages

* Direct access to files
* Good for static assets

---

# 4️⃣ Dynamic Images from API

Images can also come dynamically from APIs.

Example:

```jsx
const imageId = "abc123";

const App = () => {
  return (
    <img
      src={`https://cdn.example.com/${imageId}`}
      alt="Restaurant"
    />
  );
};
```

### Use Cases

* Food delivery apps
* E-commerce websites
* Social media apps

---

# 2. What happens if we do `console.log(useState())`?

Example:

```jsx
console.log(useState());
```

Output:

```text
[undefined, function]
```

Reason:

`useState()` returns an array containing:

1. Current state value
2. Function to update state

Since no initial value is provided:

```jsx
useState()
```

the state becomes:

```text
undefined
```

Correct usage:

```jsx
const [count, setCount] = useState(0);
```

Where:

* `count` → current state
* `setCount` → function to update state
* `0` → initial value

---

# 3. How will `useEffect` behave if we don't add a dependency array?

Example:

```jsx
useEffect(() => {
  console.log("useEffect called");
});
```

### Behavior

* Runs after every render
* Runs again whenever component updates
* Can cause unnecessary renders

---

# Different `useEffect` Behaviors

## 1️⃣ Without dependency array

```jsx
useEffect(() => {});
```

Runs on every render.

---

## 2️⃣ Empty dependency array

```jsx
useEffect(() => {}, []);
```

Runs only once after initial render.

---

## 3️⃣ With dependencies

```jsx
useEffect(() => {}, [count]);
```

Runs whenever `count` changes.

---

# 4. What is SPA?

SPA stands for **Single Page Application**.

In an SPA:

* Only one HTML page is loaded initially
* Content updates dynamically without refreshing the page

Examples:

* React applications
* Gmail
* Netflix
* Facebook

### Advantages

* Faster navigation
* Better user experience
* Reduced server load
* Smooth page transitions

---

# 5. Difference between Client Side Routing and Server Side Routing

| Client Side Routing        | Server Side Routing       |
| -------------------------- | ------------------------- |
| Routing handled by browser | Routing handled by server |
| No full page reload        | Full page reload occurs   |
| Faster navigation          | Slower navigation         |
| Uses React Router          | Traditional websites      |
| Better user experience     | More server requests      |

---

# Client Side Routing Example

```jsx
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</BrowserRouter>
```

React updates only the required component without refreshing the page.

---

# Server Side Routing Example

Traditional websites:

```text
example.com/home
example.com/about
```

Each request goes to the server and loads a completely new HTML page.

---

# 🔥 Summary

* Images can be added using:

  * Online URLs
  * Local imports
  * Public folder
  * APIs

* `useState()` returns:

  * state value
  * updater function

* `useEffect`:

  * without dependency array → runs every render
  * empty array → runs once
  * dependency array → runs on dependency changes

* SPA:

  * Single HTML page
  * Dynamic UI updates

* Client-side routing:

  * handled in browser
  * faster navigation

* Server-side routing:

  * handled by server
  * full page reload

```
```
