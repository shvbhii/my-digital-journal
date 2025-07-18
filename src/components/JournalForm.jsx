import React from 'react';
import './JournalForm.css';

function JournalForm({ content, setContent, tags, setTags, mood, setMood, handleSubmit, moodOptions }) {
  return (
    <form className="journal-form" onSubmit={handleSubmit}>
      <h2>New Entry</h2>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
        rows="6"
      />
      <input
        type="text"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        placeholder="Enter tags, separated by commas"
      />
      <div className="mood-selector">
        <label>Your Mood:</label>
        {moodOptions.map(option => (
          <button
            key={option}
            type="button"
            className={`mood-option ${mood === option ? 'selected' : ''}`}
            onClick={() => setMood(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <button type="submit" className="add-entry-btn">Add Entry</button>
    </form>
  );
}

export default JournalForm;
