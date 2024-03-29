import config from "../config/config";
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);
  const baseUrl = config.apiUrl;

  // Load server
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch(`${baseUrl}/tasks`);
    const data = await res.json();

    return data;
  }

  // Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`${baseUrl}/tasks/fetchTask/${id}`);
    const data = await res.json();

    return data;
  }

  // Add Task
  async function addTask(task) {
    const res = await fetch(`${baseUrl}/tasks/addTask`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    });

    const data = await res.json();

    setTasks([...tasks, data]);
  }
  
  // Delete Task
  async function deleteTask(id) {
    await fetch(`${baseUrl}/tasks/deleteTask/${id}`, {
      method: 'DELETE',
    });

    setTasks(tasks.filter((task) => task._id !== id));
  }

  // Toggle Reminder
  async function toggleReminder(id) {
    const taskToToggle = await fetchTask(id);
    const reminderStatus = { reminder: !taskToToggle.reminder };

    const res = await fetch(`${baseUrl}/tasks/toggleReminder/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(reminderStatus)
    });

    const data = await res.json();
    console.log(data);
    setTasks(
      tasks.map((task) => 
        task._id === id ? {...task, reminder: !data.reminder} : task 
      )
    );
  }

  return (
    <Router>
      <div className="container">
        <Header showAddTask={showAddTask} onAdd={() => setShowAddTask(!showAddTask)} />
        <Routes>
          <Route path='/' exact element={
              <>
                {showAddTask && <AddTask onAdd={addTask} />}
                { tasks.length > 0 ?
                <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
                : 'No Tasks To Show'
                }
              </>
          } />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;