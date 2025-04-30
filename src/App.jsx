import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import EntryList from './components/EntryList'
import NewEntryForm from './components/NewEntryForm'

export default function App() {
  const stored = localStorage.getItem('entries')
  const [entries, setEntries] = useState(() => {
    try {
      return stored ? JSON.parse(stored) : []
    } catch {
      return []
    }
  })
  
  useEffect(() => {
    localStorage.setItem('entries', JSON.stringify(entries))
  }
  , [entries])

  const addEntry = (entry) => setEntries([entry, ...entries])
  const deleteEntry = (index) => {
    const filtered = entries.filter((_, i) => i !== index)
    setEntries(filtered)
  }

  return (
    <Router>
      <div className="min-h-screen bg-primary">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <EntryList entries={entries} onDelete={deleteEntry}/>
                <Link to="/new">
                  <button className="fixed bottom-6 right-6 bg-accent text-gray-800 rounded-full w-12 h-12 flex items-center justify-center shadow-xl text-2xl transition hover:scale-105">
                    +
                  </button>
                </Link>
              </>
            }
          />
          <Route
            path="/new"
            element={<NewEntryForm onAdd={addEntry} />}
          />
        </Routes>
      </div>
    </Router>
  )
}