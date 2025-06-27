"use client"

import { RoundButton, SvgThemeMode } from "@components"
import { changeCurrentTheme, getCurrentTheme } from "@/helpers/scripts"

export function ButtonThemeMode(){
	return (
		<RoundButton className="duration-200 fill-foreground hover:-translate-y-2">
			<SvgThemeMode className="w-full h-full" onClick={() => changeCurrentTheme(getCurrentTheme() === "dark"? "light" : "dark")}/>
		</RoundButton>
	)
}