
import { User } from "@/core/model/User"
import LineUser from "./LineUser"

export interface ListUserProp {
    users: User[]
    onClick?: (user: User) => void
}

export default function ListUser(props: ListUserProp){
    return (
        <div className="flex flex-col gap-4">
            {props.users.map((user: User) => {
                return <LineUser key={user.id} user={user} onClick={props.onClick} />
            })}
        </div>
    )
}