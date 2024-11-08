export type User = {username: string}
export type UserList = Array<User & {password: string}>


export async function login(username: string, password: string){
    const request = await fetch('/users.js')
    const usersJs: UserList = await request.json()
    return usersJs.find(signIn => signIn.username == username && signIn.password == password)

}