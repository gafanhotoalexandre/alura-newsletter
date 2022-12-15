import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useLayoutEffect } from "react";

export function ToggleTheme() {
	const systemThemePreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
	const pageClasses = document.documentElement.classList;

	useLayoutEffect(() => {
		systemThemePreference && pageClasses.add('dark');
	}, []);

	function toggle() {
		document.documentElement.classList.toggle('dark');
	}
	return (
		<div className="hidden sm:block">
			<MoonIcon
				className="h-8 text-gray-100 cursor-pointer block dark:hidden dark"
				onClick={toggle}
			/>
			<SunIcon
				className="h-8 text-gray-100 cursor-pointer hidden dark:block"
				onClick={toggle}
			/>
		</div>
	);
}
