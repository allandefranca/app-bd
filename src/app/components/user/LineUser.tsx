import { User } from "@/core/model/User"
import Image from "next/image"
import { useMemo } from "react";


export interface LineUserProps {
    user: User
    onClick?: (user: User) => void
}


export default function LineUser(props: LineUserProps) {
    
    // Generate a random gender ('men' or 'women') and random number (1 to 99)
    const [gender, randomImageNumber] = useMemo(() => {
        const genders = ["men", "women"];
        const selectedGender = genders[Math.floor(Math.random() * genders.length)];
        const imageNumber = Math.floor(Math.random() * 99) + 1;
        return [selectedGender, imageNumber];
    }, []);
    
    const imageUrl = `https://randomuser.me/api/portraits/${gender}/${randomImageNumber}.jpg`;

    return (
        <div className="flex bg-zinc-900 items-center gap-5 p-4 rounded-md cursor-pointer" 
        onClick={() => props.onClick?.(props.user)}
        >
            <Image 
                src={imageUrl}
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