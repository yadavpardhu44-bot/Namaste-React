---

# Episode 5 – Let’s Get Hooked! 🎣

## 1. Difference between Named Export, Default Export and `* as` Export

### Named Export

Used to export **multiple values** from a file.

```javascript
export const name = "Pardhu";
export const age = 20;
```

Import:

```javascript
import { name, age } from "./file";
```

✔ Must use **same name** while importing
✔ Can export multiple items

---

### Default Export

Used to export **a single main value** from a file.

```javascript
const App = () => {
  return <h1>Hello</h1>;
};

export default App;
```

Import:

```javascript
import App from "./file";
```

✔ No need to use same name
✔ Only one default export per file

---

### `* as` Export (Namespace Import)

Used to import **all exports as an object**.

```javascript
// file.js
export const a = 10;
export const b = 20;
```

Import:

```javascript
import * as data from "./file";

console.log(data.a);
console.log(data.b);
```

✔ Useful when there are many exports
✔ Helps avoid naming conflicts

---

## 2. Importance of `config.js` File

`config.js` is used to store **constant values and configuration settings**.

Example:

```javascript
export const CDN_URL = "https://example.com/image.jpg";
export const API_URL = "https://api.example.com";
```

Usage:

```javascript
import { CDN_URL } from "./config";
```

### Benefits

* Centralized configuration
* Easy to update values
* Avoids hardcoding
* Improves code maintainability

---

## 3. What are React Hooks?

Hooks are **special functions in React** that allow you to use:

* State
* Lifecycle features

inside **functional components**.

Before hooks, these features were only available in **class components**.

Example:

```javascript
import { useState } from "react";
```

---

## 4. Why do we need `useState` Hook?

`useState` is used to **create and manage state in functional components**.

State means **data that can change over time**.

---

### Example

```javascript
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};
```

---

### Explanation

```javascript
const [count, setCount] = useState(0);
```

* `count` → current state value
* `setCount` → function to update state
* `0` → initial value

---

### Why `useState` is Important

* Makes UI dynamic
* Updates UI automatically when state changes
* Helps manage user interactions
* Core concept in React

---

# 🔥 Summary

* Named export → multiple exports
* Default export → single main export
* `* as` → import everything as object
* `config.js` → store constants
* Hooks → add state & features to functional components
* `useState` → manage dynamic data

---