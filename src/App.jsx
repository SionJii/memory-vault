import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import EntryList from './components/EntryList'
import NewEntryForm from './components/NewEntryForm'
import { useEntries } from './hooks/useEntries'

export default function App() {
  const { entries, addEntry, deleteEntry } = useEntries()

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-6">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <EntryList entries={entries} onDelete={deleteEntry}/>
                  <Link to="/new">
                    <button 
                      className="fixed bottom-8 right-8 bg-primary-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:bg-primary-700 transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-primary-300 focus:ring-offset-2 z-10"
                      aria-label="새 기록 작성"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                      </svg>
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
      </div>
    </Router>
  )
}