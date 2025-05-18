import EntryCard from './EntryCard'

export default function EntryList({ entries, onDelete }) {
    if (entries.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-secondary-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <p className="text-secondary-500 text-lg">아직 기록이 없습니다</p>
                <p className="text-secondary-400 mt-2">새로운 기억을 기록해보세요</p>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {entries.map((entry, index) => (
                <EntryCard
                    key={index}
                    entry={entry}
                    onDelete={() => onDelete(index)}
                />
            ))}
        </div>
    )
}