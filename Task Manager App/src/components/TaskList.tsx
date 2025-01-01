import React from 'react';
import { format } from 'date-fns';
import { Clock, Flag, Trash2 } from 'lucide-react';
import { Task } from '../types/task';
import { TaskCard } from './TaskCard';

interface TaskListProps {
  tasks: Task[];
  onTaskDeleted: (id: string) => void;
  onStatusChange: (id: string, status: Task['status']) => void;
}

export function TaskList({ tasks, onTaskDeleted, onStatusChange }: TaskListProps) {
  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onDelete={onTaskDeleted}
          onStatusChange={onStatusChange}
        />
      ))}
    </div>
  );
}