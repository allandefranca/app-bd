"use client"

import Page from "@/app/components/template/Page"
import Title from "@/app/components/template/Title"
import FormUser from "@/app/components/user/FormUser"
import ListUser from "@/app/components/user/ListUser"
import useUsers from "@/app/data/hooks/useUsers"
import { IconPlus, IconUser } from "@tabler/icons-react"


export default function Pages() {
    const{user,users,save,deleteUser, updateUser} = useUsers();

    return (
        <Page className="flex flex-col gap-10">
            <Title icon={IconUser} main="Users" second="User Registration" text={""}/>
            {user ? (<FormUser 
                user={user} 
                onChange={updateUser}
                save={save}
                cancel={() => updateUser(null)} 
                delete={deleteUser}   
            />)
            : (
                <>
                    <div className="flex justify-end">
                        <button className="flex items-center bg-blue-500 px-4 py-2 rounded-md" onClick={() => updateUser({})}>
                            <IconPlus />
                            <span>New User</span>
                        </button>
                    </div>
                    <ListUser users={users} onClick={updateUser}/>
                </>
            )}       
        </Page>
    )
}