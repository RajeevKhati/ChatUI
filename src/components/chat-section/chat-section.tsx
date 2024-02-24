import { useContext, useState } from "react";
import styles from "./chat-section.module.css";
import ChatChip from "../chat-chip/chat-chip";
import { ChatContext } from "../../context/chat-context";
import { addChat } from "../../context/reducer";
import { useReply } from "../../shared/use-reply";

function ChatSection() {
  const [message, setMessage] = useState("");
  const { state, dispatch } = useContext(ChatContext);
  const { fetchReply } = useReply();

  const conversation = state.conversations[state.selectedContact];

  return (
    <div className={styles.container}>
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
      </div>
      <input
        className={styles.messageInput}
        type="text"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            dispatch(
              addChat({
                message,
                sentByMe: true,
                date: new Date(),
              })
            );
            setMessage("");
            fetchReply();
          }
        }}
      />
    </div>
  );
}

export default ChatSection;
