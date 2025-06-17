
# GitHub Activity Dashboard – Frontend

This is the **frontend dashboard** of a GitHub activity tracking system. It's built with **React.js** and **Vite**, featuring dynamic components, SCSS styling, and Chart.js visualizations.

> ⚠️ This project does **not** include the `node_modules/` folder. You must install dependencies after cloning.

---

## 📦 Tech Stack

- React.js
- Vite
- Chart.js + react-chartjs-2
- SCSS (Sass)
- Modular Components

---

## 📁 Project Structure

```
src/
│   App.jsx
│   index.css
│   index.scss
│   main.jsx
│   responsive.scss
├── components/
│   ├── activityDetails/
│   │   ├── ActivityDetails.jsx
│   │   └── activityDetails.scss
│   ├── CardInformation/
│   │   ├── CardInformation.jsx
│   │   └── cardInformation.scss
│   ├── charts/
│   │   ├── Charts.jsx
│   │   └── charts.scss
│   ├── navbar/
│   │   ├── Navbar.jsx
│   │   └── navbar.scss
│   ├── repoCardInfo/
│   │   ├── RepoCardInfo.jsx
│   │   └── repoCardInfo.scss
│   ├── TableContainer/
│   │   ├── TableContainer.jsx
│   │   └── tableContainer.scss
├── routes/
│   ├── GitHubPage/
│   │   ├── GitHubPage.jsx
│   │   └── GitHubPage.scss
│   ├── homePage/
│   │   ├── homePage.jsx
│   │   └── homePage.scss
│   ├── layout/
│   │   ├── layout.jsx
│   │   └── layout.scss
```

---

## 🧠 Folder Descriptions

### `components/`
Reusable UI elements:
- `Charts`: Contains the bar and pie charts powered by Chart.js.
- `ActivityDetails`: Shows recent GitHub commits and branch selection.
- `RepoCardInfo`: Displays repository or user info.
- `CardInformation`: Additional repository cards (used in layout/sidebar).
- `Navbar`: The main top navigation bar.
- `TableContainer`: Displays user activity logs (apps used, durations, etc).

### `routes/`
Pages used in React Router:
- `GitHubPage`: Dashboard that shows all GitHub-related data.
- `homePage`: Basic homepage (could be landing or dashboard redirect).
- `layout`: Handles the global layout, including shared components like navbar or sidebars.

### Root files
- `App.jsx`: Main component rendering the router and global layout.
- `main.jsx`: Application entry point (Vite + React).
- `index.scss`: Global styles.
- `responsive.scss`: Media queries and layout breakpoints.

---

## 🚀 Getting Started

### 1. Clone the Project

```bash
git clone https://github.com/your-username/github-dashboard.git
cd github-dashboard/Frontend
```

### 2. Install Dependencies

Make sure you have **Node.js** and **npm** installed.

```bash
npm install
```

If you face issues with SCSS, install Sass:

```bash
npm install sass
```

### 3. Run the Development Server

```bash
npm run dev
```

This will launch the app at:

```
http://localhost:5173
```

---

## 📚 Main Dependencies

Each of these is listed in `package.json`. You can install them manually if needed:

```bash
npm install react
npm install react-dom
npm install vite
npm install chart.js
npm install react-chartjs-2
npm install sass
```

---
