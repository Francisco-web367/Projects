import React from 'react';
import { BarChart2, Clock, CheckCircle2 } from 'lucide-react';
import { TaskStatistics } from '../utils/taskStats';

interface TaskStatsProps {
  stats: TaskStatistics;
}

export function TaskStats({ stats }: TaskStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-sm font-medium text-gray-500 mb-2">Status</h3>
        <div className="space-y-2">
          {Object.entries(stats.byStatus).map(([status, count]) => (
            <div key={status} className="flex justify-between items-center">
              <span className="capitalize">{status.replace('_', ' ')}</span>
              <span className="font-medium">{count}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-sm font-medium text-gray-500 mb-2">Priority</h3>
        <div className="space-y-2">
          {Object.entries(stats.byPriority).map(([priority, count]) => (
            <div key={priority} className="flex justify-between items-center">
              <span className="capitalize">{priority}</span>
              <span className="font-medium">{count}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-sm font-medium text-gray-500 mb-2">Timeline</h3>
        <div className="space-y-2">
          <div className="flex justify-between items-center text-red-600">
            <span>Overdue</span>
            <span className="font-medium">{stats.overdue}</span>
          </div>
          <div className="flex justify-between items-center text-green-600">
            <span>Completed on Time</span>
            <span className="font-medium">{stats.completedOnTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
}