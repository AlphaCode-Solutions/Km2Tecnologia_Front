import axios from "axios";
import { redirect } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const login = async (email: string, password: string) => {
    const response = await axios.post(`${API_URL}/users/login`, { email, password });
    const token = response.data.data.token;
    sessionStorage.setItem("authToken", token);
    sessionStorage.setItem("user", JSON.stringify(response.data.data.user));
    return;
}


export const logout = async () => {
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("user");
    if (sessionStorage.getItem("authToken") === null) {
        redirect("/auth/login");
    }
    return;
}