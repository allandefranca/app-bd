"use server"
import RepositoryUser from "./RepositoryUser";

export default async function getAll() {
    return RepositoryUser.getAll()
}