import { useState, useEffect, useMemo } from 'react';
import { Task, TaskStatus, TaskTag } from '../types/task';
import { getTasks, saveTasks } from '../utils/storage';
import { calculateTaskStats, TaskStatistics } from '../utils/taskStats';

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<TaskTag[]>([]);
  const [sortBy, setSortBy] = useState<'dueDate' | 'priority' | 'createdAt'>('createdAt');

  useEffect(() => {
    setTasks(getTasks());
  }, []);

  const filteredAndSortedTasks = useMemo(() => {
    let filtered = tasks;

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(task =>
        task.title.toLowerCase().includes(term) ||
        task.description.toLowerCase().includes(term) ||
        task.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }

    if (selectedTags.length > 0) {
      filtered = filtered.filter(task =>
        selectedTags.every(tag => task.tags.includes(tag))
      );
    }

    return [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'dueDate':
          if (!a.dueDate) return 1;
          if (!b.dueDate) return -1;
          return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
        case 'priority':
          const priorityOrder = { high: 0, medium: 1, low: 2 };
          return priorityOrder[a.priority] - priorityOrder[b.priority];
        default:
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
    });
  }, [tasks, searchTerm, selectedTags, sortBy]);

  const stats = useMemo(() => calculateTaskStats(tasks), [tasks]);

  const addTask = (task: Omit<Task, 'id' | 'createdAt'>) => {
    const newTask: Task = {
      ...task,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      tags: task.tags || [],
    };
    const updatedTasks = [newTask, ...tasks];
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const updateTaskStatus = (taskId: string, status: TaskStatus) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, status } : task
    );
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const deleteTask = (taskId: string) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const updateTaskTags = (taskId: string, tags: TaskTag[]) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, tags } : task
    );
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  return {
    tasks: filteredAndSortedTasks,
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
  };
}