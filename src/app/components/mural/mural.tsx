"use client"

import { IDataPost } from "@interfaces"
import { getPosts } from "@/helpers/api";
import { HTMLAttributes, useEffect, useState, useCallback, useRef, ReactElement, RefObject, createRef } from "react"
import { Post } from "@components";
import { twMerge } from "tailwind-merge"

export interface IPropsMural extends HTMLAttributes<HTMLDivElement> {}

interface IColDynmaicMural {
	x: number, 
	y: number, 
	ce: RefObject<HTMLDivElement | null>
}

export function Mural({className, ...rest}: IPropsMural){
	const [posts, setPosts] = useState<IDataPost[]>([]);
	const [gap, setGap] = useState<number>(20);
	const [postSize, setPostSize] = useState<number>(0);
	const [items, setItems] = useState<RefObject<HTMLDivElement | null>[]>([]);
	const [postsPos, setPostsPos] = useState<{x: number, y: number}[]>();
	const mainElemRef = useRef<HTMLDivElement>(null);

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

		// const addMorePost = () => isAtEndMural() && getMorePost();
		// document.addEventListener("scroll", addMorePost);
		// mainElemRef.current?.addEventListener("scroll", addMorePost);
	}, [mainElemRef, getMorePost, isAtEndMural]);

	useEffect(() => {
		const newItems = posts.map(() => createRef<HTMLDivElement>());
		setItems(newItems);
	}, [posts]);

	useEffect(() => {
		if(mainElemRef.current == undefined) return;
		setPostSize((mainElemRef.current.clientWidth / 3) - gap * 3);
	}, [mainElemRef]);
		
	useEffect(() => {
		if(mainElemRef.current == undefined) return;
		setPostsPos(undefined);
		const cols = [{x: 0, y: 0}, {x: postSize+gap, y: 0}, {x: (postSize*2)+(gap*2), y: 0}];
		const getSmallerColY = () => cols.reduce((pv, cv) => { return {x: 0, y: Math.min(pv.y, cv.y)} }, cols[0]);
		const getCol = () => {
			const y = getSmallerColY().y;
			const i = cols.findIndex((v) => v.y == y);
			return {x: cols[i].x, y: y, i: i};
		}
		const incrementColY = (i: number, height: number) => cols[i].y += height + gap;
		items.map((item) => {
			if(item == null || item.current == null) return;
			const col = getCol();
			console.log(cols)
			setPostsPos((p) => p? [...p, {x: col.x, y: col.y}] : [{x: col.x, y: col.y}] )
			incrementColY(col.i, item.current.clientHeight);
			console.log(item.current);
		});
	}, [items.length]);

	return(
		<main className={twMerge("relative", className)} ref={mainElemRef} {...rest}>
			{posts.map((props, i) => {
				const pos = postsPos && i < postsPos.length && postsPos != undefined? postsPos[i] : {x: 0, y: 0};
				console.log(pos, postsPos?.length, i);
				return <Post className="absolute" ref={items[i]} style={{transform: `translate(${pos.x}px, ${pos.y}px)`, width: postSize}} key={i} {...props}/>
			})}
		</main>
	);
}