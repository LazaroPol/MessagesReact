import axios from 'axios';
const instance = axios.create({ baseURL: 'http://localhost:8080' });

export const login = async (username, password) => {
const token = btoa(`${username}:${password}`)
    const response = await instance.post("/login",{},
    {
        headers: {
            "Content-Type": "application/json",
            Authorization: "basic " + token,
        },
    });
    if(response.resp === "ok"){
        setAuth(token);
        console.log(11111111111,token)
        return token;
    }
}

export const setAuth = async (token) => {
    instance.defaults.headers.common.Authorization = `basic ${token}`;
};

export const test = () => {
	instance.get("/users");
}