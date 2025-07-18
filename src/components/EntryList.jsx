import React from 'react';
import Entry from './Entry'; // We will import another component here
import './EntryList.css';

function EntryList({ entries, handleDelete, handleDownload }) {
  return (
    <div className="journal-entries">
      <div className="entries-toolbar">
        <h2>My Entries</h2>
        <button onClick={handleDownload} className="download-btn">Download Journal</button>
      </div>
      {entries.length === 0 ? (
        <p className="no-entries-message">No entries yet. Write your first one!</p>
      ) : (
        entries.map(entry => (
          <Entry
            key={entry.id}
            entry={entry}
            handleDelete={handleDelete}
          />
        ))
      )}
    </div>
  );
}

export default EntryList;