import { HTMLAttributes} from "react";
import { twMerge } from "tailwind-merge";

export interface IPropsPostTag extends HTMLAttributes<HTMLDivElement> {}

export function PostTag({children, className, ...props}: IPropsPostTag){
	return (
		<div className={twMerge("bg-shadow px-4 rounded-2xl", className)} {...props}>
			{children}
		</div>
	)
}