import { HTMLAttributes } from "react";

export interface IPropsSvgPlus extends HTMLAttributes<HTMLOrSVGElement> {
	isOpen?: boolean
}

export function SvgPlus({isOpen, ...rest}: IPropsSvgPlus){
	return(
		<svg width="100" height="100" viewBox="0 0 100 100" {...rest}>
			<rect x="45" y="20" width="10" height="60" />
			<rect x="20" y="45" width="60" height="10" />
		</svg>
	);
}