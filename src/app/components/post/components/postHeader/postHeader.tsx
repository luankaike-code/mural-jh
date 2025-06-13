import { HTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export interface IPropsPostHeader extends HTMLAttributes<HTMLParagraphElement>, PropsWithChildren {} 

export function PostHeader({ children, className, ...rest }: IPropsPostHeader){
	return(
		<p className={twMerge("border-solid border-b-2 border-foreground w-4/5", className)} {...rest}>
			{ children }
		</p>
	)
}