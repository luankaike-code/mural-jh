import { Conteiner, IPropsConteiner, PostBody, PostHeader } from "@components"
import { twMerge } from "tailwind-merge"
import { IDataPost } from "@/helpers/interfaces"

export interface IPropsPost extends IDataPost, IPropsConteiner {}

export function Post({codename, markdown, className, ...rest}: IPropsPost){
	return(
		<Conteiner className={twMerge("flex flex-col gap-4 p-4 duration-200 hover:shadow-[-12px_12px]", className)} {...rest}>
			<PostHeader className="break-all">{codename}</PostHeader>
			<PostBody markdown={markdown}/>
		</Conteiner>
	)
}