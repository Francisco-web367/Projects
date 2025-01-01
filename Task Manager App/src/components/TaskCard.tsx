import React from 'react';
import { format } from 'date-fns';
import { Clock, Flag, Trash2 } from 'lucide-react';
import { Task } from '../types/task';

interface TaskCardProps {
  task: Task;
  onDelete: (id: string) => void;
  onStatusChange: (id: string, status: Task['status']) => void;
}

export function TaskCard({ task, onDelete, onStatusChange }: TaskCardProps) {
  const getPriorityColor = (priority: Task['priority']) => {
    switch (priority) {
      case 'high':
        return 'text-red-600';
      case 'medium':
        return 'text-yellow-600';
      case 'low':
        return 'text-green-600';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{task.title}</h3>
        <div className="flex items-center space-x-2">
          <select
            value={task.status}
            onChange={(e) => onStatusChange(task.id, e.target.value as Task['status'])}
            className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="todo">To Do</option>
            <option value="in_progress">In Progress</option>
            <option value="done">Done</option>
          </select>
          <button
            onClick={() => onDelete(task.id)}
            className="text-red-600 hover:text-red-800"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      <p className="text-gray-600 mb-4">{task.description}</p>

      <div className="flex items-center space-x-4 text-sm">
        {task.dueDate && (
          <div className="flex items-center text-gray-500">
            <Clock className="w-4 h-4 mr-1" />
            {format(new Date(task.dueDate), 'MMM d, yyyy h:mm a')}
          </div>
        )}
        <div className={`flex items-center ${getPriorityColor(task.priority)}`}>
          <Flag className="w-4 h-4 mr-1" />
          {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
        </div>
      </div>
    </div>
  );
}