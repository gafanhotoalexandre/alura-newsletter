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
			className="py-1 pl-5 w-full max-w-lg dark:bg-dark-200 dark:text-gray-200 text-dark-200 rounded-full outline-none"
			placeholder={placeholder}
			onChange={(e) => setData(e.target.value)}
			value={value}
			required={required}
		/>
	);
}
