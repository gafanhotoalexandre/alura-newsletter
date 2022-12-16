import { UserType } from '../../types/userType';
import { ToggleTheme } from './ToggleTheme';

interface HeaderProps {
	user: UserType  | null;
}

export function Header({ user }: HeaderProps) {
	return (
		<header className="alura-header">
			<span className="text-gray-100">Olá, {user?.name || 'Usuário'}</span>
			<h1>Alura Newsletter</h1>
			<ToggleTheme />
		</header>
	);
}
