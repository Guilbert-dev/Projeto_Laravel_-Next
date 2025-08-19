'use server'
import axios from "axios";

export type User = {
    id: number,
    name: string,
    email: string
}

const getData = async () => {
    const response = await axios.get<User[]>(`${process.env.NEXT_PUBLIC_API_BASE}/user`)

    return response.data;
}

export default async function Users() {
    const response = await getData();

    return response;   
    
}