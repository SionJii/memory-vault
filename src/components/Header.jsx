import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className="bg-white shadow-soft">
            <div className="container mx-auto px-4 py-4">
                <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <h1 className="text-2xl font-semibold text-gray-900 tracking-normal leading-tight">Memory Vault</h1>
                </Link>
            </div>
        </header>
    )
}