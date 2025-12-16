import React, { useState } from 'react';
import './TaskItem.css';

function TaskItem({ task, onEdit, onDelete, onToggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleSave = () => {
    if (editText.trim() !== '') {
      onEdit(task.id, editText.trim());
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditText(task.text);
    setIsEditing(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleComplete(task.id)}
        className="task-checkbox"
      />

      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleSave}
          onKeyDown={handleKeyPress}
          className="task-edit-input"
          autoFocus
        />
      ) : (
        <span
          className="task-text"
          onDoubleClick={() => setIsEditing(true)}
        >
          {task.text}
        </span>
      )}

      <div className="task-actions">
        {!isEditing && (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="action-button edit-button"
              title="Düzenle"
            >
              ✏️
            </button>
            <button
              onClick={() => onDelete(task.id)}
              className="action-button delete-button"
              title="Sil"
            >
              🗑️
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default TaskItem;

