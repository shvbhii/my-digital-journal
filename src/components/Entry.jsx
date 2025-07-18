import React from 'react';
import './Entry.css';

function Entry({ entry, handleDelete }) {
  return (
    <div className="journal-entry">
      <div className="entry-header">
        <span className="entry-mood">{entry.mood}</span>
        <span className="entry-date">{entry.date}</span>
        <button onClick={() => handleDelete(entry.id)} className="delete-btn" title="Delete entry">×</button>
      </div>
      <div className="entry-content">
        <p>{entry.content}</p>
      </div>
      {entry.tags.length > 0 && (
        <div className="entry-footer">
          <div className="entry-tags">
            {entry.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Entry;