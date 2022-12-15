import React, { useState } from "react";

import { UserType } from "../../types/userType";

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
		<form onSubmit={safeSubmit}>
			<input
				type="text"
				placeholder="Insira seu nome..."
				onChange={(e) => setName(e.target.value)}
				value={name}
			/>

			<input
				type="email"
				placeholder="Insira seu e-mail..."
				onChange={(e) => setEmail(e.target.value)}
				value={email}
			/>

			<button
				type="submit"
			>Seguir</button>
		</form>
	);
}
