import { useState, useEffect } from 'react';

export const useEntries = () => {
  const [entries, setEntries] = useState(() => {
    const stored = localStorage.getItem('entries');
    try {
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('entries', JSON.stringify(entries));
  }, [entries]);

  const addEntry = (entry) => setEntries([entry, ...entries]);
  
  const deleteEntry = (index) => {
    const filtered = entries.filter((_, i) => i !== index);
    setEntries(filtered);
  };

  return { entries, addEntry, deleteEntry };
}; 