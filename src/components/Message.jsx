import { useState } from "react";
import { getMessagesById, createMessage } from "../services/api";
import { useUserContext } from "../provider/UserProvider";

const Message = () => {
  const [message, setMessage] = useState([]);
  const [user] = useUserContext();

  console.log("Usuariooooooooooooo", user);
  const handleclick = () => {
    if (message.length === 0) {
      getMessagesById(user.id).then(setMessage);
    } else {
      setMessage([]);
    }
  };

  const createMsg = () => {};

  return (
    <div>
      <button onClick={handleclick}>Ver mensajes</button> <br />
      <br />
      <button>Crear mensaje</button>
      {message.map((msg) => (
        <div key={msg.id}>
          <p>{msg.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Message;
