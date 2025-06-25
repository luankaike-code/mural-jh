"use client"

import { IDataPost } from "@interfaces"
import { getPosts } from "@/helpers/api";
import { HTMLAttributes, useEffect, useState, useCallback, useRef } from "react"
import { Post } from "@components";
import { twMerge } from "tailwind-merge"

export interface IPropsMural extends HTMLAttributes<HTMLDivElement> {}

export function Mural({className, ...rest}: IPropsMural){
	const [posts, setPosts] = useState<IDataPost[]>([]);
	const mainElemRef = useRef<HTMLDivElement>(null)

	const getMorePost = useCallback(async () => {
		const newPosts = await getPosts();
		setPosts(p => [...p, ...newPosts]);
	}, []);

	const isAtEndMural = useCallback(() => {
		if(mainElemRef.current == null) return false;

		const userView = window.innerHeight;
		const rectMural = mainElemRef.current.getBoundingClientRect();

		return rectMural.bottom - 100 <= userView;
	}, []);

	useEffect(() => {
		if(mainElemRef.current == null) return;

		getMorePost();

		const addMorePost = () => isAtEndMural() && getMorePost();
		document.addEventListener("scroll", addMorePost);
		mainElemRef.current?.addEventListener("scroll", addMorePost);
	}, [mainElemRef, getMorePost, isAtEndMural]);

	return(
		<main className={twMerge("columns-3 p-6 gap-6 grid-col", className)} ref={mainElemRef} {...rest}>
			{posts.map((props, i) =>
				 <Post className="break-inside-avoid mb-4" key={i} {...props}/>
			)}
		</main>
	);
}