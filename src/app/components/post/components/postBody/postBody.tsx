import { HTMLAttributes} from "react";
import { MarkdownViwer } from "@components";

export interface IPropsPostBody extends HTMLAttributes<HTMLDivElement> {
	markdown: string,
}

export function PostBody({ markdown, className, ...rest }: IPropsPostBody){
	return (
		<MarkdownViwer>
			{markdown}
		</MarkdownViwer>
	);
}