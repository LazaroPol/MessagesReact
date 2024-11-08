import { useEffect, useState } from "react";
import { getMessages } from "../services/api";

const Message = () => {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    getMessages().then(setMessage);
  }, []);

  return (
    <div>
      {message.map((msg) => (
        <div key={msg.id}>
          <p>{msg.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Message;
