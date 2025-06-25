import { PropsWithChildren, HTMLAttributes, Children, cloneElement } from "react";
import { twMerge } from "tailwind-merge";

export interface IPropsMarkdownBlockquoteComponent extends PropsWithChildren, HTMLAttributes<HTMLElement> {}

export function MarkdownBlockquoteComponent({children, className, ...props}: IPropsMarkdownBlockquoteComponent){
	return(
		<blockquote className={twMerge("flex gap-4 indent-1 bg-background/20 before:w-4 before:bg-shadow", className)} {...props}>
			{children}
		</blockquote>
	);
}