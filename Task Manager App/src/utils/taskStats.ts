import { Task, TaskStatus, TaskPriority } from '../types/task';

export interface TaskStatistics {
  total: number;
  byStatus: Record<TaskStatus, number>;
  byPriority: Record<TaskPriority, number>;
  overdue: number;
  completedOnTime: number;
}

export function calculateTaskStats(tasks: Task[]): TaskStatistics {
  const now = new Date();
  
  return {
    total: tasks.length,
    byStatus: {
      todo: tasks.filter(t => t.status === 'todo').length,
      in_progress: tasks.filter(t => t.status === 'in_progress').length,
      done: tasks.filter(t => t.status === 'done').length,
    },
    byPriority: {
      high: tasks.filter(t => t.priority === 'high').length,
      medium: tasks.filter(t => t.priority === 'medium').length,
      low: tasks.filter(t => t.priority === 'low').length,
    },
    overdue: tasks.filter(t => 
      t.status !== 'done' && 
      t.dueDate && 
      new Date(t.dueDate) < now
    ).length,
    completedOnTime: tasks.filter(t =>
      t.status === 'done' &&
      (!t.dueDate || new Date(t.dueDate) >= new Date(t.createdAt))
    ).length,
  };
}