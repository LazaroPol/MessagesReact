import { useState } from "react";
import { getMessagesById, createMessage } from "../services/api";
import { useUserContext } from "../provider/UserProvider";

const Message = () => {
  const [messageList, setMessageList] = useState([]);
  const [message, setMessage] = useState({
    text: "",
    destinatarios: "",
    remitente: "",
  });
  const [user] = useUserContext();

  const handleclick = () => {
    if (messageList.length === 0) {
      getMessagesById(user.id).then(setMessageList);
    } else {
      setMessageList([]);
    }
  };

  const createMsg = () => {
    createMessage(message);
  };

  return (
    <div>
      <button onClick={handleclick}>Ver mensajes</button> <br />
      <br />
      <button onClick={createMsg}>Crear mensaje</button>
      {messageList.map((msg) => (
        <div key={msg.id}>
          <p>{msg.text}</p>
        </div>
      ))}
      <input
        type="text"
        value={message.text}
        onChange={(event) =>
          setMessage({ ...message, text: event.target.value })
        }
      />
      <input
        type="text"
        value={message.destinatarios}
        onChange={(event) =>
          setMessage({ ...message, destinatarios: event.target.value })
        }
      />
    </div>
  );
};

export default Message;
