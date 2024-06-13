import Backend from "@/backend"
import { User } from "@/core/model/User"
import { useEffect, useState } from "react"

export default  function useUsers() {
    const [users, setUsers] = useState<User[]>([])
    const [user, setUser] = useState<Partial<User> | null>(users[0])

    useEffect(() => {
        Backend.users.get().then(setUsers)
    }, [])

    async function save(){
        if (!user) return
        await Backend.users.save(user)
        const users = await Backend.users.get()
        setUsers(users)
        setUser(null)
    }

    async function deleteUser(){
        if (!user || !user.id) return
        await Backend.users.delete(user.id!)
        const users = await Backend.users.get()
        setUsers(users)
        setUser(null)
    }

    return {
        users,
        user,
        save,
        deleteUser,
        cancel: () => setUser(null),
        updateUser: (user: Partial<User> | null) => setUser(user),
    }
}