import React from 'react';
import { ListTodo } from 'lucide-react';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';
import { TaskSearch } from './components/TaskSearch';
import { TaskStats } from './components/TaskStats';
import { useTasks } from './hooks/useTasks';
import { useTheme } from './hooks/useTheme';
import { useLanguage } from './hooks/useLanguage';
import { Header } from './components/Header';

export default function App() {
  const {
    tasks,
    stats,
    searchTerm,
    setSearchTerm,
    selectedTags,
    setSelectedTags,
    sortBy,
    setSortBy,
    addTask,
    updateTaskStatus,
    deleteTask,
    updateTaskTags,
  } = useTasks();

  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900`}>
      <Header 
        theme={theme}
        toggleTheme={toggleTheme}
        language={language}
        setLanguage={setLanguage}
      />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <ListTodo className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-2" />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Task Manager</h1>
          </div>
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
            className="rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          >
            <option value="createdAt">Latest</option>
            <option value="dueDate">Due Date</option>
            <option value="priority">Priority</option>
          </select>
        </div>

        <TaskStats stats={stats} />
        
        <div className="mb-6">
          <TaskSearch
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />
        </div>

        <TaskForm onTaskAdded={addTask} />

        <TaskList
          tasks={tasks}
          selectedTags={selectedTags}
          onTagSelect={setSelectedTags}
          onTaskDeleted={deleteTask}
          onStatusChange={updateTaskStatus}
          onTagsChange={updateTaskTags}
        />
      </main>
    </div>
  );
}