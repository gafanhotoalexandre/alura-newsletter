import { UserType } from '../../types/userType';
import { ToggleTheme } from './ToggleTheme';

interface HeaderProps {
	user: UserType  | null;
}

export function Header({ user }: HeaderProps) {
	return (
		<header className="flex h-20 bg-alura-200 dark:bg-dark-200 justify-between items-center px-5 sm:rounded-xl sm:m-5">
			<span className="text-gray-100">Olá, {user?.name || 'Usuário'}</span>
			<h1 className="text-gray-100 text-xl">Alura Newsletter</h1>
			<ToggleTheme />
		</header>
	);
}
