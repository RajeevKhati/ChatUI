import { useContext, useEffect, useRef, useState } from "react";
import styles from "./chat-section.module.css";
import ChatChip from "../chat-chip/chat-chip";
import { ChatContext } from "../../context/chat-context";
import { addChat } from "../../context/reducer";
import { useReply } from "../../shared/use-reply";
import { IconSend } from "../../icons/icon-send";

function ChatSection() {
  const [message, setMessage] = useState("");
  const divRef = useRef<HTMLDivElement>(null);
  const { state, dispatch } = useContext(ChatContext);
  const { fetchReply } = useReply();

  const conversation = state.conversations[state.selectedContact];

  const sendMessage = () => {
    if (!message.trim()) {
      return;
    }
    dispatch(
      addChat({
        message,
        sentByMe: true,
        date: new Date(),
      })
    );
    setMessage("");
    fetchReply();
  };

  useEffect(() => {
    if (conversation.length && divRef.current) {
      divRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [conversation.length]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.chats}>
          {conversation.map((chat) => {
            return (
              <div
                key={chat.date.toISOString()}
                className={`${styles.chatChip} ${
                  chat.sentByMe && styles.placeRight
                }`}
              >
                <ChatChip
                  name={chat.sentByMe ? "You" : state.selectedContact}
                  message={chat.message}
                  date={chat.date}
                />
              </div>
            );
          })}
          <div ref={divRef}></div>
        </div>
        <div className={styles.message}>
          <input
            className={styles.messageInput}
            type="text"
            placeholder="type your message here..."
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
          />
          <button onClick={sendMessage} className={styles.iconSend}>
            <IconSend />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatSection;
