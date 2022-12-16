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
			className="alura-input alura-focus-ring"
			placeholder={placeholder}
			onChange={(e) => setData(e.target.value)}
			value={value}
			required={required}
		/>
	);
}
