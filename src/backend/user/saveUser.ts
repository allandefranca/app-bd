"use server"

import { User } from "@/core/model/User";
import Id from "@/core/utils/Id";
import RepositoryUser from "./RepositoryUser";

export default async function saveUser(user: Partial<User>) {
    const newUser = {
        ...user,
        id: user.id ?? Id.new,
    }

    RepositoryUser.save(newUser as User)
}