import { HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"
import { PostTag } from "@components"

export interface IPropsPostTagConteiner extends Omit<HTMLAttributes<HTMLUListElement>, "children"> {
	tags: string[]
}

export function PostTagConteiner({tags, className, ...props}: IPropsPostTagConteiner){
	return (
		<ul className={twMerge("flex gap-2", className)} {...props}>
			{tags.map((t, i) => <PostTag key={i}>{t}</PostTag>)}
		</ul>
	)
}