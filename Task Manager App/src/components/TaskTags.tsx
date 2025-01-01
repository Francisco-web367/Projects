import React from 'react';
import { Tag } from 'lucide-react';
import { TaskTag } from '../types/task';

interface TaskTagsProps {
  tags: TaskTag[];
  onTagClick?: (tag: TaskTag) => void;
}

export function TaskTags({ tags, onTagClick }: TaskTagsProps) {
  if (!tags.length) return null;

  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagClick?.(tag)}
          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 hover:bg-blue-200"
        >
          <Tag className="w-3 h-3 mr-1" />
          {tag}
        </button>
      ))}
    </div>
  );
}