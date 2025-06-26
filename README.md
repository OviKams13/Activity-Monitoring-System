
# GitHub Activity Dashboard – Frontend (TypeScript Version)

This is the **TypeScript frontend** of a GitHub activity tracking and supervision dashboard. It is built using **React**, **Vite**, and **SCSS**, with modular components and chart visualizations powered by Chart.js.

> ⚠️ This project does **not** include the `node_modules/` folder. You must install dependencies manually after cloning.

---

## 📦 Tech Stack

- TypeScript
- React.js
- Vite
- Chart.js + react-chartjs-2
- SCSS (Sass)
- Modular Components Architecture

---

## 📁 Project Structure

```
src/
│   App.tsx
│   index.css
│   index.scss
│   main.tsx
│   responsive.scss
├── components/
│   ├── activityDetails/
│   ├── charts/
│   ├── navbar/
│   ├── repoCardInfo/
│   ├── SupervisorCardInfo/
│   ├── TableContainer/
│   ├── UserCardInformation/
│   └── UserListCard/
├── routes/
│   ├── GitHubPage/
│   ├── homePage/
│   ├── layout/
│   ├── login/
│   ├── register/
│   └── supervisorPage/
```

---

## 🧠 Folder Descriptions

### `components/`
- **Charts**: Bar and pie charts displaying user commit stats and app usage.
- **ActivityDetails**: GitHub branch selector and recent commits list.
- **Navbar**: Navigation bar for the dashboard layout.
- **RepoCardInfo**: Repository statistics cards.
- **SupervisorCardInfo**: Supervisor-specific data cards.
- **UserCardInformation**: Displays selected user details.
- **UserListCard**: Clickable list of users supervised.
- **TableContainer**: Table of tracked application activity.

### `routes/`
- **GitHubPage**: Central page aggregating all GitHub data and user charts.
- **homePage**: The landing or index page of the dashboard.
- **layout**: Root layout used in routing and wrapping components like navbar.
- **login / register**: Authentication pages with roles (`employee`, `supervisor`, `hod`).
- **supervisorPage**: Special view for supervisors showing supervised users' activity.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/OviKams13/HR Worker Tracking App.git
cd HR Worker Tracking App/Frontend
```

### 2. Install Dependencies

Make sure you have **Node.js** and **npm** installed.

```bash
npm install
```

If SCSS doesn't compile, install Sass explicitly:

```bash
npm install sass
```

### 3. Start the Development Server

```bash
npm run dev
```

App will be available at:

```
http://localhost:5173
```

---

## 📚 Main Dependencies

These are listed in your `package.json`. You may also install them manually if needed:

```bash
npm install react
npm install react-dom
npm install vite
npm install typescript
npm install sass
npm install chart.js
npm install react-chartjs-2
npm install --save-dev typescript @types/react @types/react-dom
```

---