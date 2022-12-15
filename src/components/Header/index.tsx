import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { ToggleTheme } from './ToggleTheme';

export function Header() {
	return (
		<header className="flex h-20 bg-gray-500 justify-between items-center px-5 sm:rounded-xl sm:m-5">
			<span className="text-gray-100">Olá, Usuário</span>
			<h1 className="text-gray-100 text-xl">Alura Newsletter</h1>
			<ToggleTheme />
		</header>
	);
}
