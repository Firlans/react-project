import { useState } from 'react';
import '../assets/style/dashboard.css';
import DashboardSection from './DashboardSection';
import TasksSection from './TasksSection';

export default function App() {
  const [activeSection, setActiveSection] = useState('dashboard');

  function handleMainSection(active, event) {
    event.preventDefault();

    setActiveSection(active);
  }

  return (
    <>
      <header>
        <h1>{activeSection}</h1>
      </header>
      <aside>
        <h1>Title Website</h1>
        <nav>
          <a href="" onClick={(e) => handleMainSection("dashboard", e)}>Dashboard</a>
          <a href="" onClick={(e) => handleMainSection("tasks", e)}>Tasks</a>
        </nav>
      </aside>
      <main>
        {activeSection === "dashboard" && <DashboardSection />}
        {activeSection === "tasks" && <TasksSection />}
      </main>
      <footer>created by &copy;firlans 2024</footer>
    </>
  )
}
