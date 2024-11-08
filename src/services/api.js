import axios from 'axios';
const instance = axios.create({ baseURL: 'http://localhost:8080' });

export const login = async (username, password) => {
const token = btoa(`${username}:${password}`)
console.log(222222222222222,token)
    const response = await instance.post("/login",{},
    {
        
        headers: {
            "Content-Type": "application/json",
            Authorization: "basic " + token,
        },
        
    }
    

);
console.log(333333333333333333, response)
    if(response.status === 200){
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

export const getMessages = async () => {

  const data = await instance.get("messages");

  console.log(data.data)
  return data.data;
}