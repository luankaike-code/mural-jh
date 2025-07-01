import { HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"
import { forwardRef } from "react"

export interface IPropsConteiner extends HTMLAttributes<HTMLDivElement> {}

export const Conteiner = forwardRef<HTMLDivElement, IPropsConteiner>(({children, className, ...rest}, ref) => {
	return(
		<div className={twMerge("bg-emphasis shadow-[-5px_5px] shadow-shadow", className)} ref={ref} {...rest}>
			{children}
		</div>
	)
})