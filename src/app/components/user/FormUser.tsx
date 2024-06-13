import { User } from "@/core/model/User";
import InputText from "../shared/InputText";

export interface FormUserProps {
    user: Partial<User>
    onChange: (user: Partial<User>) => void
    save: () => void
    cancel: () => void
    delete: () => void
}

export default function FormUser(props: FormUserProps){
    return (
        <div className="flex flex-col gap-5">
            <InputText 
                label="Name" 
                type="text" 
                value={props.user.name} 
                onChange={(e) => props.onChange?.({...props.user, name: e.target.value})} 
            /> 
            <InputText 
                label="E-mail" 
                type="email" 
                value={props.user.email} 
                onChange={(e) => props.onChange?.({...props.user, email: e.target.value})} 
            /> 
            <InputText 
                label="Password" 
                type="password" 
                value={props.user.password} 
                onChange={(e) => props.onChange?.({...props.user, password: e.target.value})} 
            /> 
            <div className="flex justify-between">
                <div className="flex gap-5">
                    <button className="bg-blue-500 px-4 py-2 rounded-md" onClick={props.save}>Save</button>
                    <button className="bg-zinc-500 px-4 py-2 rounded-md" onClick={props.cancel}>Cancel</button>
                </div>
                <button className="bg-red-500 px-4 py-2 rounded-md" onClick={props.delete}>Delete</button>
            </div>           
        </div>
    )
}