"use server"
import RepositoryUser from "./RepositoryUser";

export default async function deleteUser(id: string) {
    RepositoryUser.delete(id)
}