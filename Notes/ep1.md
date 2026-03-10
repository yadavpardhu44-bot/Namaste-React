# Day 1 – Theory Notes

## 1. What is Emmet?

Emmet is a **plugin/tool built into code editors like VS Code** that helps developers write HTML and CSS faster using **short abbreviations**.

Instead of writing full HTML code manually, Emmet expands abbreviations into complete code structures.

Example:

```html
ul>li*3
```

Expands to:

```html
<ul>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

Benefits:

* Faster coding
* Less typing
* Automatic HTML structure generation

---

## 2. Difference between a Library and a Framework

| Library                                                                              | Framework                                                            |
| ------------------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| A library is a collection of reusable functions that developers can use when needed. | A framework provides a complete structure for building applications. |
| The developer controls the flow of the program.                                      | The framework controls the flow of the program.                      |
| You call the library when you need it.                                               | The framework calls your code.                                       |
| Example: React                                                                       | Example: Angular                                                     |

This concept is often called **Inversion of Control**.

---

## 3. What is CDN? Why do we use it?

CDN stands for **Content Delivery Network**.

A CDN is a network of servers distributed across different locations that deliver web content (like JavaScript files, CSS files, images, etc.) to users faster.

Why we use CDN:

* Faster loading because files are served from the nearest server
* Reduces load on the main server
* Improves website performance
* Easy to include external libraries

Example of React CDN:

```html
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
```

---

## 4. Why is React known as React?

React is called **React** because it is designed to **react to changes in data**.

Whenever the application's data changes, React automatically updates the **UI (User Interface)** efficiently.

Instead of manually updating the DOM, React reacts to data changes and updates only the required parts of the UI.

---

## 5. What is `crossorigin` in the script tag?

`crossorigin` is an attribute used in the `<script>` tag to handle **cross-origin requests**.

It allows browsers to load resources (like scripts) from a **different domain** safely.

Example:

```html
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
```

Why it is used:

* Enables secure loading of external scripts
* Helps with error reporting
* Required when using CDN resources with integrity checks

---

## 6. Difference between React and ReactDOM

| React                                                                  | ReactDOM                                                                      |
| ---------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| React is the core library used to create components and manage the UI. | ReactDOM is used to render React components to the actual DOM in the browser. |
| It contains functions like `createElement`.                            | It contains functions like `createRoot` and `render`.                         |
| Works with virtual DOM.                                                | Connects React with the real browser DOM.                                     |

Example:

React:

```javascript
const element = React.createElement("h1", {}, "Hello World");
```

ReactDOM:

```javascript
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
```

---

## 7. Difference between `react.development.js` and `react.production.js`

| react.development.js                        | react.production.js    |
| ------------------------------------------- | ---------------------- |
| Used during development                     | Used in production     |
| Contains warnings and debugging information | Optimized and minified |
| Larger file size                            | Smaller file size      |
| Slower but helpful for debugging            | Faster and optimized   |

Developers use **development version while coding** and **production version when deploying the app**.

---

## 8. What are `async` and `defer` in script tag?

`async` and `defer` are attributes used in the `<script>` tag to control how JavaScript files are loaded.

### Async

* Script downloads **in parallel** with HTML parsing.
* Executes immediately after downloading.
* Execution order is **not guaranteed**.

Example:

```html
<script async src="script.js"></script>
```

### Defer

* Script downloads **in parallel** with HTML parsing.
* Executes **after HTML parsing is complete**.
* Maintains execution order.

Example:

```html
<script defer src="script.js"></script>
```

Summary:

| Async                            | Defer                       |
| -------------------------------- | --------------------------- |
| Executes as soon as it downloads | Executes after HTML parsing |
| Order not guaranteed             | Order maintained            |
| May block HTML parsing           | Does not block HTML parsing |

---