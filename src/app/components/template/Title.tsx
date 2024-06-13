import { ElementType } from "react"

export interface TitleProps {
    main: string
    second: string
    text: string
    icon: ElementType
}

export default function Title(props: TitleProps){
    return (
        <div className="flex gap-2">
            <props.icon size={55} stroke={1}/>
            <div className="flex flex-col">
                <h1 className="text-2xl font-black">{props.main}</h1>
                <h1 className="text-zinc-400">{props.second}</h1>
            </div>
        </div>
    )
}