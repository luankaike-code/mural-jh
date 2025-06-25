import Markdown from "react-markdown";
import { cloneElement, ReactElement, ReactNode, HTMLAttributes } from "react";
import { MarkdownLiComponent, MarkdownBlockquoteComponent } from "@components";

export interface IPropsMarkdownViwer {
	children?: string
}

export function MarkdownViwer({ children }: IPropsMarkdownViwer){
	const comp = (elem: ReactElement, props: HTMLAttributes<HTMLElement>, children: ReactNode) => cloneElement(elem, props, children);

	return (
		<Markdown components={{
			li: ({node, children, ...props}) => comp(<MarkdownLiComponent></MarkdownLiComponent>, props, children),
			blockquote: ({node, children, ...props}) => comp(<MarkdownBlockquoteComponent></MarkdownBlockquoteComponent>, props, children),
		}}>
			{children}
		</Markdown>
	);
}