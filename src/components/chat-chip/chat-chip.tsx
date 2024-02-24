import styles from "./chat-chip.module.css";

interface ChatChipProps {
  message: string;
}

function ChatChip({ message }: ChatChipProps) {
  return <div className={styles.chatChip}>{message}</div>;
}

export default ChatChip;
