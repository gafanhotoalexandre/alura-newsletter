interface InputProps {
	type: 'text' | 'email';
	placeholder: string;
	value: string;
	setData: (value: string) => void;
	required?: boolean;
}

export function Input({
	type, placeholder, value, setData, required = false
}: InputProps) {
	return (
		<input
			type={type}
			className="py-1 pl-5 w-full max-w-lg dark:bg-dark-200 dark:text-gray-200 text-dark-200 rounded-full outline-none placeholder:text-gray-400 dark:placeholder:text-gray-600 placeholder:text-xs placeholder:uppercase placeholder:font-bold focus:ring-2 focus:ring-alura-100 focus:ring-offset-2 focus:ring-offset-gray-200 dark:focus:ring-offset-dark-100 focus:outline-none transition-all"
			placeholder={placeholder}
			onChange={(e) => setData(e.target.value)}
			value={value}
			required={required}
		/>
	);
}
