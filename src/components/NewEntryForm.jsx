import { useNavigate } from 'react-router-dom'
import { useEntryForm } from '../hooks/useEntryForm'
import FormInput from './FormInput'

export default function NewEntryForm({ onAdd }) {
    const navigate = useNavigate()
    const { formData, errors, handleChange, handleSubmit } = useEntryForm((data) => {
        onAdd(data)
        navigate('/')
    })

    return (
        <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-soft overflow-hidden">
                <div className="p-6">
                    <div className="flex items-center mb-6">
                        <button
                            onClick={() => navigate(-1)}
                            className="text-gray-400 hover:text-gray-600 transition-colors duration-200 mr-3"
                            aria-label="뒤로 가기"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                        </button>
                        <h1 className="text-2xl font-semibold text-gray-900">새 기록 작성</h1>
                    </div>
                    
                    <form className="space-y-6" onSubmit={(e) => {
                        e.preventDefault()
                        handleSubmit()
                    }}>
                        <FormInput
                            label="제목"
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={(e) => handleChange('title', e.target.value)}
                            placeholder="제목을 입력하세요"
                            error={errors.title}
                        />

                        <FormInput
                            label="날짜"
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={(e) => handleChange('date', e.target.value)}
                            error={errors.date}
                        />

                        <FormInput
                            label="감정"
                            type="text"
                            name="emotion"
                            value={formData.emotion}
                            onChange={(e) => handleChange('emotion', e.target.value)}
                            placeholder="😊, 😔 등"
                        />

                        <div>
                            <label className="block text-gray-700 mb-2">내용</label>
                            <textarea
                                className={`w-full p-4 border ${errors.content ? 'border-red-500' : 'border-gray-200'} rounded-lg h-48 resize-none focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-colors duration-200`}
                                placeholder="오늘의 기록을 작성하세요..."
                                value={formData.content}
                                onChange={(e) => handleChange('content', e.target.value)}
                            />
                            {errors.content && (
                                <p className="mt-2 text-sm text-red-500">{errors.content}</p>
                            )}
                        </div>

                        <div className="flex justify-end pt-4">
                            <button
                                type="submit"
                                className="px-6 py-3 bg-primary-500 text-white font-medium rounded-lg shadow-sm hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 transition-colors duration-200"
                            >
                                저장하기
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}