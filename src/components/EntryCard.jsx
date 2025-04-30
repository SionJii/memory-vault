export default function EntryCard({ entry, index, onDelete }) {
    return (
        <div className="relative bg-white p-4 rounded-2xl shadow hover:shadow-lg transition">
            {/* 삭제 버튼 */}
            <button
                onClick={() => onDelete(index)}
                className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition"
            >
                &times;
            </button>
            <h2 className="text-lg font-semibold mb-1 text-gray-900">{entry.title}</h2>
            <div className="text-sm text-gray-500 mb-2">{entry.date} · {entry.emotion}</div>
            <p className="text-gray-700 line-clamp-3">{entry.content}</p>
        </div>
    )
}