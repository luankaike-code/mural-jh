import { HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

export interface IPropsConteiner extends HTMLAttributes<HTMLDivElement> {}

export function Conteiner({children, className, ...rest}: IPropsConteiner){
	return(
		<div className={twMerge("bg-emphasis shadow-[-5px_5px] shadow-shadow", className)} {...rest}>
			{children}
		</div>
	)
}