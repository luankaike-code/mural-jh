"use client"

import { HTMLAttributes, useState, useEffect } from "react";
import { marked } from "marked";
import { twMerge } from "tailwind-merge";
import DOMPurify from "dompurify";

export interface IPropsPostBody extends HTMLAttributes<HTMLDivElement> {
	markdown: string,
}

export function PostBody({ markdown, className, ...rest }: IPropsPostBody){
	const [content, setContent] = useState<string>();
	useEffect(() => {
		const getContent = async () => setContent(await marked(markdown));
		getContent();
	}, [markdown])

	return (
		<div className={twMerge("flex flex-wrap wrap-anywhere flex-col overflow-x-auto max-h-96 w-full", className)} {...rest} 
			dangerouslySetInnerHTML={{
				__html: content? DOMPurify.sanitize(content) : "",
			}}>
		</div>
	);
}