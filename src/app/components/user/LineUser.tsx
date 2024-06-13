import { User } from "@/core/model/User"
import Image from "next/image"
import { useMemo } from "react";


export interface LineUserProps {
    user: User
    onClick?: (user: User) => void
}


export default function LineUser(props: LineUserProps) {
    
    return (
        <div className="flex bg-zinc-900 items-center gap-5 p-4 rounded-md cursor-pointer" 
        onClick={() => props.onClick?.(props.user)}
        >
            <Image 
                src={props.user.avatarURL}
                width={80}
                height={80}
                className="rounded-full"
                alt="Avatar"
            /> 
            <div className="flex flex-col">
                <span className="text-xl font-black">{props.user.name}</span>
                <span className="text-sm text-zinc-400">{props.user.email}</span>
            </div>
        </div>
    )
}