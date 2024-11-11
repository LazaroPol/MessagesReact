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
        
    }

);
    if(response.status === 200){
        setAuth(token);
        console.log(11111111111,token)
        return {token, id: response.data.id};
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

export const getMessagesById = async (id) => {
  const data = await instance.get("messages/" + id);
  console.log(data.data)
  return data.data;
}

export const createMessage = async (obj) => {
 console.log("objjjjjjjjjjjjjj", obj)
 const insert =  await instance.post('/', obj)
 console.log(1111111, insert, obj)
}

