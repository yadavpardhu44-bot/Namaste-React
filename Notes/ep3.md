# Episode 3 – JSX Notes

## 1. What is JSX?

JSX stands for **JavaScript XML**.

It is a syntax extension for JavaScript used in React that allows developers to **write HTML-like code inside JavaScript**.

JSX makes UI code easier to read and write compared to using `React.createElement()`.

Example without JSX:

```javascript
const heading = React.createElement("h1", {}, "Hello World");
```

Example with JSX:

```javascript
const heading = <h1>Hello World</h1>;
```

JSX is not directly understood by browsers. It is **transpiled into JavaScript by tools like Babel** before execution.

---

# 2. Superpowers of JSX

JSX provides several powerful features that improve developer productivity.

### 1. HTML-like Syntax

JSX allows writing UI code that looks like HTML.

```jsx
const element = <h1>Welcome to React</h1>;
```

This makes code **more readable and maintainable**.

---

### 2. JavaScript Inside JSX

We can write JavaScript expressions inside JSX using **curly braces `{}`**.

```jsx
const name = "Pardhu";

const element = <h1>Hello {name}</h1>;
```

---

### 3. Prevents Injection Attacks

JSX automatically **escapes values** to prevent malicious code injection, improving security.

Example:

```jsx
const userInput = "<script>alert('hack')</script>";
const element = <div>{userInput}</div>;
```

React safely renders it as text instead of executing it.

---

### 4. Expressions Inside JSX

We can use JavaScript expressions like calculations.

```jsx
const element = <h1>{5 + 5}</h1>;
```

Output:

```
10
```

---

### 5. Supports Components

JSX makes it easy to render React components.

```jsx
const App = () => {
  return <Header />;
};
```

---

# 3. Role of `type` Attribute in `<script>` Tag

The `type` attribute specifies **how the browser should interpret the script**.

Example:

```html
<script type="text/javascript" src="app.js"></script>
```

Modern JavaScript often uses:

```html
<script type="module" src="app.js"></script>
```

---

## Common `type` Values

### 1. `text/javascript`

Default JavaScript type.

```html
<script type="text/javascript">
  console.log("Hello");
</script>
```

---

### 2. `module`

Used for **ES6 modules** which support `import` and `export`.

```html
<script type="module" src="app.js"></script>
```

Benefits:

* Supports `import` and `export`
* Runs in strict mode
* Better dependency management

---

### 3. `application/json`

Used for embedding JSON data inside HTML.

```html
<script type="application/json">
{
  "name": "React"
}
</script>
```

---

# 4. `{TitleComponent}` vs `<TitleComponent/>` vs `<TitleComponent></TitleComponent>`

These represent **different ways of using React components**.

---

## `{TitleComponent}`

This refers to the **component function itself**, not rendering it.

Example:

```jsx
{TitleComponent}
```

This does **not render the component**, it just references it.

---

## `<TitleComponent />`

This is the **correct way to render a component in JSX**.

Example:

```jsx
const TitleComponent = () => {
  return <h1>Namaste React</h1>;
};

const App = () => {
  return <TitleComponent />;
};
```

Output:

```
Namaste React
```

---

## `<TitleComponent></TitleComponent>`

This is another valid way to render a component.

Example:

```jsx
<TitleComponent></TitleComponent>
```

It works the same as:

```jsx
<TitleComponent />
```

Difference:

* The longer version is used when we want to pass **children**.

Example:

```jsx
<TitleComponent>
  <span>Hello</span>
</TitleComponent>
```

---

# Summary

| Syntax                              | Meaning                               |
| ----------------------------------- | ------------------------------------- |
| `{TitleComponent}`                  | Reference to component function       |
| `<TitleComponent />`                | Renders the component                 |
| `<TitleComponent></TitleComponent>` | Renders component and allows children |

---

# Key Takeaways

* JSX allows writing HTML-like syntax inside JavaScript.
* JSX improves readability and developer productivity.
* JSX is converted to JavaScript by **Babel**.
* JavaScript expressions can be written inside `{}`.
* Components can be rendered using `<Component />`.

---