import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // localStorage'dan görevleri yükle
  useEffect(() => {
    const savedTasks = localStorage.getItem('todoTasks');
    if (savedTasks) {
      try {
        setTasks(JSON.parse(savedTasks));
      } catch (error) {
        console.error('Görevler yüklenirken hata oluştu:', error);
      }
    }
  }, []);

  // Görevler değiştiğinde localStorage'a kaydet
  useEffect(() => {
    localStorage.setItem('todoTasks', JSON.stringify(tasks));
  }, [tasks]);

  // Yeni görev ekle
  const handleAddTask = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    const newTask = {
      id: Date.now(),
      text: inputValue.trim(),
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setInputValue('');
  };

  // Görev düzenle
  const handleEditTask = (id, newText) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, text: newText } : task
    ));
  };

  // Görev sil
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Görev tamamlandı durumunu değiştir
  const handleToggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="app">
      <div className="container">
        <header className="app-header">
          <h1>Simple Todo Manager</h1>
          <p className="subtitle">Görevlerinizi organize edin</p>
        </header>

        <form onSubmit={handleAddTask} className="task-form">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Yeni görev ekle..."
            className="task-input"
          />
          <button type="submit" className="add-button">
            Ekle
          </button>
        </form>

        <TaskList
          tasks={tasks}
          onEdit={handleEditTask}
          onDelete={handleDeleteTask}
          onToggleComplete={handleToggleComplete}
        />

        {tasks.length > 0 && (
          <div className="task-stats">
            <span>
              Toplam: {tasks.length} | 
              Tamamlanan: {tasks.filter(t => t.completed).length} | 
              Bekleyen: {tasks.filter(t => !t.completed).length}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

