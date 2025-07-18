import { useState, useEffect } from 'react';
import { saveAs } from 'file-saver';
import './App.css';

// Import components
import Header from './components/Header';
import JournalForm from './components/JournalForm';
import EntryList from './components/EntryList';
import Footer from './components/Footer';

function App() {
  // --- STATE MANAGEMENT ---
  const [entries, setEntries] = useState(() => {
    try {
      const savedEntries = localStorage.getItem('journalEntries');
      return savedEntries ? JSON.parse(savedEntries) : [];
    } catch (error) {
      console.error("Error parsing journal entries from localStorage", error);
      return [];
    }
  });

  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [mood, setMood] = useState('😊');
  const [theme, setTheme] = useState(() => localStorage.getItem('journalTheme') || 'light');
  const moodOptions = ['😊', '😂', '😢', '😠', '😍', '🤔', '😴', '😎'];

  // --- SIDE EFFECTS (HOOKS) ---
  useEffect(() => {
    localStorage.setItem('journalEntries', JSON.stringify(entries));
  }, [entries]);

  useEffect(() => {
    document.body.className = '';
    document.body.classList.add(theme);
    localStorage.setItem('journalTheme', theme);
  }, [theme]);

  // --- HANDLER FUNCTIONS ---
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) {
      alert("Please write something in your journal entry!");
      return;
    }
    const newEntry = {
      id: Date.now(),
      content,
      tags: tags.split(',').map(tag => tag.trim()).filter(Boolean),
      mood,
      date: new Date().toLocaleString(),
    };
    setEntries([newEntry, ...entries]);
    setContent('');
    setTags('');
    setMood('😊');
  };

  const handleDelete = (idToDelete) => {
    if (window.confirm("Are you sure you want to delete this entry?")) {
      setEntries(entries.filter(entry => entry.id !== idToDelete));
    }
  };

  const handleDownload = () => {
    if (entries.length === 0) {
      alert("There are no entries to download!");
      return;
    }
    const journalData = JSON.stringify(entries, null, 2);
    const blob = new Blob([journalData], { type: 'application/json' });
    saveAs(blob, `digital-journal-backup-${new Date().toISOString().split('T')[0]}.json`);
  };

  // --- RENDER JSX ---
  return (
    <div className="app-container">
      <Header setTheme={setTheme} />
      <main>
        <JournalForm
          content={content}
          setContent={setContent}
          tags={tags}
          setTags={setTags}
          mood={mood}
          setMood={setMood}
          handleSubmit={handleSubmit}
          moodOptions={moodOptions}
        />
        <EntryList
          entries={entries}
          handleDelete={handleDelete}
          handleDownload={handleDownload}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;