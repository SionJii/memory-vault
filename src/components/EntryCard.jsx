export default function EntryCard({ entry, onDelete }) {
    const { title, date, emotion, content } = entry

    return (
        <div className="bg-white rounded-xl shadow-soft overflow-hidden transform transition-all duration-200 hover:shadow-medium hover:-translate-y-1 border border-gray-200">
            <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-900 mb-1">{title}</h2>
                        <p className="text-gray-500 text-sm">{date}</p>
                    </div>
                    <span className="text-2xl text-gray-900">{emotion}</span>
                </div>
                <p className="text-gray-700 line-clamp-3">{content}</p>
                <div className="mt-4 flex justify-end">
                    <button
                        onClick={onDelete}
                        className="text-gray-400 hover:text-accent-500 transition-colors duration-200"
                        aria-label="삭제"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}