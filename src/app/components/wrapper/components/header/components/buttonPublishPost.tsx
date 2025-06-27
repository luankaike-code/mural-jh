import { RoundButton, SvgPlus } from "@components"

export function ButtonPublishPost(){
	return (
		<RoundButton className="duration-200 fill-foreground hover:-translate-y-2">
			<SvgPlus className="w-full h-full"/>
		</RoundButton>
	)
}