import { Header } from "@components";
import { PropsWithChildren } from "react";

export interface IPropsWrapper extends PropsWithChildren {}

export function Wrapper({ children }: IPropsWrapper){
	return(
		<>
			<Header />
			{children}
		</>
	);
}