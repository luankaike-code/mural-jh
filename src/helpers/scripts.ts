type themes = "dark" | "light"

export function getPreferTheme(): themes {
	return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches? "dark" : "light";
}

export function changeCurrentTheme(newTheme: themes) {
	document.body.classList.remove(newTheme === "dark"? "light" : "dark");
	document.body.classList.add(newTheme);
}

export function getCurrentTheme(): themes {
	return document.body.classList.contains("dark")? "dark" : "light";
}