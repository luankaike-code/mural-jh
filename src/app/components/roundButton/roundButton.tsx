import { HTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export interface IPropsRoundButton extends PropsWithChildren, HTMLAttributes<HTMLButtonElement> {}

export function RoundButton({children, className, ...rest}: IPropsRoundButton){
	return(
		<button className={twMerge("bg-background border-solid border-2 border-shadow shadow-[2px_2px] shadow-shadow rounded-full", 
			className, "w-10 h-10")} {...rest}>
			{children}
		</button>
	)
}