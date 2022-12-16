import React, { useState } from "react";

import { UserType } from "../../types/userType";
import { Input } from "./Input";

interface FormProps {
	onSubmit: (data: UserType) => void;
}

export function Form({ onSubmit: setUser }: FormProps) {

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	function safeSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		e.stopPropagation();

		setUser({ name, email })
	}

	return (
		<form
			className="h-full flex flex-col items-center justify-center -mt-24 mx-5 gap-10"
			onSubmit={safeSubmit}
		>
			<Input
				type="text"
				placeholder="Insira seu nome..."
				setData={(name) => setName(name)}
				value={name}
				required={true}
			/>

			<Input
				type="email"
				placeholder="Insira seu e-mail..."
				setData={(email) => setEmail(email)}
				value={email}
				required={true}
			/>

			<button
				className="alura-form-btn alura-focus-ring transition-all"
				type="submit"
			>Seguir</button>
		</form>
	);
}
