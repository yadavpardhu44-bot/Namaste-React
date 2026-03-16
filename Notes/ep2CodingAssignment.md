Below is a **clean coding solution you can directly use for your assignment and push to GitHub**. I’ll structure it the way most **Namaste React students organize Episode 3**.

---

# 📁 Suggested Folder Structure

```text
EP_3_JSX
│
├── index.html
├── App.js
└── index.css
```

---

# 1️⃣ Nested Header using `React.createElement`

```javascript
const heading = React.createElement(
  "div",
  { className: "title" },
  [
    React.createElement("h1", {}, "This is H1 tag"),
    React.createElement("h2", {}, "This is H2 tag"),
    React.createElement("h3", {}, "This is H3 tag")
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
```

---

# 2️⃣ Same Element using JSX

```javascript
const jsxHeading = (
  <div className="title">
    <h1>This is H1 tag</h1>
    <h2>This is H2 tag</h2>
    <h3>This is H3 tag</h3>
  </div>
);
```

---

# 3️⃣ Functional Component using JSX

```javascript
const TitleComponent = () => {
  return (
    <div className="title">
      <h1>This is H1 tag</h1>
      <h2>This is H2 tag</h2>
      <h3>This is H3 tag</h3>
    </div>
  );
};
```

---

# 4️⃣ Passing Attributes in JSX

```javascript
const TitleComponent = () => {
  return (
    <div className="title" id="heading" tabIndex="5">
      <h1>Hello React</h1>
      <h2>Learning JSX</h2>
      <h3>Episode 3</h3>
    </div>
  );
};
```

---

# 5️⃣ Composition of Components

Component inside another component.

```javascript
const TitleComponent = () => (
  <h1>Namaste React</h1>
);

const HeadingComponent = () => (
  <div>
    <TitleComponent />
    <h2>This is another heading</h2>
  </div>
);
```

---

# 6️⃣ `{TitleComponent}` vs `<TitleComponent/>` vs `<TitleComponent></TitleComponent>`

Example:

```javascript
const TitleComponent = () => (
  <h1>Namaste React</h1>
);

const App = () => (
  <div>
    {TitleComponent()}
    <TitleComponent />
    <TitleComponent></TitleComponent>
  </div>
);
```

Explanation:

| Syntax                              | Meaning                           |
| ----------------------------------- | --------------------------------- |
| `{TitleComponent()}`                | Calls function directly           |
| `<TitleComponent />`                | Standard React way                |
| `<TitleComponent></TitleComponent>` | Same as above but allows children |

---

# 7️⃣ Header Component (Main Assignment)

### `App.js`

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Logo = () => (
  <img
    className="logo"
    src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
    alt="logo"
  />
);

const SearchBar = () => (
  <input
    type="text"
    className="search"
    placeholder="Search..."
  />
);

const UserIcon = () => (
  <div className="user">👤</div>
);

const Header = () => (
  <div className="header">
    <Logo />
    <SearchBar />
    <UserIcon />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
```

---

# 8️⃣ CSS for Styling

### `index.css`

```css
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid black;
  padding: 10px;
}

.logo {
  width: 60px;
}

.search {
  padding: 8px;
  width: 300px;
}

.user {
  font-size: 30px;
}
```

---

# 9️⃣ `index.html`

```html
<!DOCTYPE html>
<html>
<head>
<title>Namaste React</title>
</head>
<body>

<div id="root"></div>

<script type="module" src="./App.js"></script>

</body>
</html>
```

---

# ▶️ Run the Project

```bash
npm run start
```

or

```bash
npx parcel EP_3_JSX/index.html
```
