import EntryCard from './EntryCard'

export default function EntryList({ entries, onDelete }) {
    return (
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {entries.map((entry, idx) => (
                <EntryCard key={idx} entry={entry} index={idx} onDelete={onDelete} />
            ))}
        </div>
    )
}