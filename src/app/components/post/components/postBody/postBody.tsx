import { HTMLAttributes} from "react";
import { MarkdownViwer } from "@components";

export interface IPropsPostBody extends HTMLAttributes<HTMLDivElement> {
	markdown: string,
}

export function PostBody({ markdown, ...props }: IPropsPostBody){
	return (
		<MarkdownViwer {...props}>
			{markdown}
		</MarkdownViwer>
	);
}