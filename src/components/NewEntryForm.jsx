import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function NewEntryForm({ onAdd }) {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [emotion, setEmotion] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()

    const handleSubmit = () => {
        onAdd({ title, date, emotion, content })
        navigate('/')
    }

    return (
        <div className="flex justify-center mt-6 mb-10">
            <div className="w-full max-w-lg bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                    <button
                        onClick={() => navigate(-1)}
                        className="text-gray-500 hover:text-gray-700 transition mr-2"
                    >
                        ←
                    </button>
                    <h1 className="text-2xl font-semibold text-gray-800">새 기록 작성</h1>
                </div>
                <form className="flex flex-col gap-5">
                    <div>
                        <label className="block text-gray-600 mb-1">제목</label>
                            <input
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                                placeholder="제목을 입력하세요"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                            />
                    </div>

                    <div>
                        <label className="block text-gray-600 mb-1">날짜</label>
                            <input
                                type="date"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                                value={date}
                                onChange={e => setDate(e.target.value)}
                            />
                    </div>

                    <div>
                        <label className="block text-gray-600 mb-1">감정</label>
                            <input
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                                placeholder="😊, 😔 등"
                                value={emotion}
                                onChange={e => setEmotion(e.target.value)}
                            />
                    </div>

                    <div>
                        <label className="block text-gray-600 mb-1">내용</label>
                            <textarea
                                className="w-full p-3 border border-gray-300 rounded-lg h-40 resize-none focus:outline-none focus:ring-2 focus:ring-accent"
                                placeholder="오늘의 기록을 작성하세요..."
                                value={content}
                                onChange={e => setContent(e.target.value)}
                            />
                    </div>

                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="mt-4 py-3 bg-accent text-gray-800 font-medium rounded-lg shadow hover:bg-opacity-90 transition mx-auto w-1/2"
                    >
                        저장하기
                    </button>
                </form>
            </div>
        </div>
    )
}