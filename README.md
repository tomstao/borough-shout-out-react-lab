# 🗽 Borough Shout‑Out — Coding Challenge borough-shout-out-react-lab

---

languages: javascript, html, css  
tags: react, jsx, components, beginner, nyc

---

> **Goal:** Write your first reusable React component and pass simple props.

New York has five proud boroughs.  
Create a **`BoroughCard`** component that shouts them out in style.

---

## Starting

Run

```
npm create vite@latest

```

## Starter files

```
src/
  BoroughCard.jsx      // ➡ create me!
App.jsx             // Code here import BoroughCard and dev here
App.css             // small NYC color palette
```

---

## Requirements

| #   | Feature          | Pass criteria                                                      |
| --- | ---------------- | ------------------------------------------------------------------ |
| 1   | Component exists | `BoroughCard` exports a valid React function component             |
| 2   | Uses props       | Renders **Hello from {borough}!** where `borough` comes from props |
| 3   | Default borough  | If no prop, default to **Queens**                                  |
| 4   | Custom color     | Accepts an optional `bgColor` prop and applies it as inline style  |

*Stretch* — Add an emoji flag for each borough (🌉 Brooklyn, 🏙️ Manhattan, etc.).

---

## Hints

- Destructure props example: `function BoroughCard({ borough="Queens", bgColor }) …`
- Inline style example: `style={{ backgroundColor: bgColor }}`
- Remember to export + import your component in `App.jsx`.
