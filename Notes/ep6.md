---

# Episode 6 – Exploring the World 🌍

## 1. What is a Microservice?

A Microservice architecture is a way of building applications as **small independent services**.

Each service:

* Handles a specific functionality
* Runs independently
* Communicates via APIs

Example:

* User Service
* Payment Service
* Order Service

### Benefits

* Scalable
* Easy to maintain
* Independent deployment

---

## 2. What is Monolith Architecture?

Monolith architecture is where the **entire application is built as a single unit**.

All components:

* UI
* Backend
* Database logic

are tightly connected.

### Example

One big application handling everything (login, payment, orders).

---

## 3. Difference between Monolith and Microservice

| Monolith         | Microservices           |
| ---------------- | ----------------------- |
| Single codebase  | Multiple small services |
| Hard to scale    | Easy to scale           |
| Tight coupling   | Loose coupling          |
| One deployment   | Independent deployment  |
| Hard to maintain | Easier to maintain      |

---

## 4. Why do we need `useEffect` Hook?

`useEffect` is used to **handle side effects in React components**.

Side effects include:

* API calls
* Subscriptions
* DOM updates

### Example

```javascript
import { useEffect } from "react";

useEffect(() => {
  console.log("Component Mounted");
}, []);
```

### Important Points

* Runs after component renders
* Empty dependency array `[]` → runs only once
* Used for API calls

---

## 5. What is Optional Chaining?

Optional chaining (`?.`) is used to **safely access nested object properties**.

Prevents errors if a property is undefined.

### Example

```javascript
const data = user?.address?.city;
```

If `user` is null → no error, returns `undefined`.

---

## 6. What is Shimmer UI?

Shimmer UI is a **loading placeholder UI** shown before actual data loads.

Example:

* Grey boxes instead of content
* Skeleton screens

### Benefits

* Improves user experience
* Shows loading feedback

---

## 7. Difference between JS Expression and JS Statement

| Expression             | Statement                 |
| ---------------------- | ------------------------- |
| Returns a value        | Does not return value     |
| Can be used inside JSX | Cannot be used inside JSX |
| Example: `2 + 2`       | Example: `if`, `for`      |

### Example

```javascript
// Expression
2 + 2
```

```javascript
// Statement
if (true) {
  console.log("Hello");
}
```

---

## 8. What is Conditional Rendering?

Conditional rendering means **rendering UI based on conditions**.

### Example

```javascript
const isLoggedIn = true;

const App = () => {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome</h1> : <h1>Please Login</h1>}
    </div>
  );
};
```

---

## 9. What is CORS?

CORS stands for **Cross-Origin Resource Sharing**.

It is a security feature that **controls how resources are shared between different domains**.

Example:

* Frontend → localhost:3000
* Backend → api.example.com

Browser blocks requests unless allowed.

---

## 10. What is async and await?

`async` and `await` are used to **handle asynchronous operations**.

### Example

```javascript
const fetchData = async () => {
  const res = await fetch("https://api.example.com");
  const data = await res.json();
  console.log(data);
};
```

### Benefits

* Cleaner code
* Avoids callback hell
* Easy to read

---

## 11. What is the use of `const json = await data.json();`?

When we fetch data:

```javascript
const data = await fetch(url);
```

The response is in **raw format (ReadableStream)**.

To convert it into usable JSON:

```javascript
const json = await data.json();
```

### Why needed?

* Converts response into JavaScript object
* Allows access to API data

---

# 🔥 Summary

* Microservices → small independent services
* Monolith → single large application
* `useEffect` → handles side effects
* Optional chaining → safe property access
* Shimmer UI → loading placeholder
* Conditional rendering → dynamic UI
* CORS → security for cross-origin requests
* async/await → handle asynchronous code
* `.json()` → convert API response

---
