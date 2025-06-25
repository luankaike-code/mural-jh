import { PropsWithChildren, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export interface IPropsMarkdownLiComponent extends PropsWithChildren, HTMLAttributes<HTMLLIElement> {

}

export function MarkdownLiComponent({children, className, ...props}: IPropsMarkdownLiComponent){
	return(
		<li className={twMerge("list-inside list-disc", className)} {...props}>
			{children}
		</li>
	);
}