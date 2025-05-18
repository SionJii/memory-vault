export default function FormInput({
    label,
    type = 'text',
    name,
    value,
    onChange,
    placeholder,
    error
}) {
    return (
        <div>
                        <label className="block text-gray-700 mb-2" htmlFor={name}>                {label}            </label>            <input                id={name}                type={type}                name={name}                value={value}                onChange={onChange}                placeholder={placeholder}                className={`w-full p-4 border ${                    error ? 'border-red-500' : 'border-gray-200'                } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-colors duration-200`}
            />
            {error && (
                <p className="mt-2 text-sm text-red-500">{error}</p>
            )}
        </div>
    )
} 