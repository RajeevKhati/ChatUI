import styles from "./chat-chip.module.css";

interface ChatChipProps {
  message: string;
  name: string;
  date: Date;
}

function ChatChip({ message, name, date }: ChatChipProps) {
  return (
    <div className={styles.chatChip}>
      <p className={styles.name}>{name}</p>
      <p className={styles.message}>{message}</p>
      <p className={styles.date}>{date.toLocaleDateString()}</p>
    </div>
  );
}

export default ChatChip;
