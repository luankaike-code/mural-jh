import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { RoundButton, SvgPlus, SvgThemeMode } from "@components";
import { ButtonPublishPost, ButtonThemeMode } from "./components";
import { changeCurrentTheme, getCurrentTheme } from "@/helpers/scripts";

export interface IPropsHeader extends HTMLAttributes<HTMLHeadingElement> {}

export function Header({ className }: IPropsHeader){
	return(
		<header className={twMerge("bg-emphasis h-24 mb-24", className)}>
			<ul className="relative flex justify-between items-center list-none h-full p-4">
				<li className="absolute flex flex-col top-full left-1/2 -translate-y-1/2 -translate-x-1/2 items-center font-extrabold">
					<h1 className="text-3xl">MURAL DO</h1>
					<h1 className="text-6xl">JH</h1>
				</li>
				<li>
					<ul className="absolute flex right-1/12 top-full gap-4 list-none h-full translate-x-1/2 -translate-y-1/5">
						<li>
							<ButtonPublishPost />
						</li>
						<li>
							<RoundButton className="duration-200 hover:-translate-y-2">
								x
							</RoundButton>
						</li>
						<li>
							<ButtonThemeMode />
						</li>
					</ul>
				</li>
			</ul>
		</header>
	);
}
